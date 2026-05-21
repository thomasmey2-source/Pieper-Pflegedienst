import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, ClipboardList } from 'lucide-react';
import {
  MODULES,
  MODULE_META,
  QUICK_QUESTIONS,
  type AnswerOption,
  type ItemQuestion,
} from '@/lib/pflegegradrechner/questions';
import {
  calcModuleScoresFromAnswers,
  calcQuickEstimate,
  calcTotalScore,
  pflegegradFromScore,
  type AllAnswers,
  type ItemStage,
  type ModuleId,
  type QuickAnswers,
  type QuickResult,
} from '@/lib/pflegegradrechner/scoring';
import { Result } from './Result';

type Phase = 'intro' | 'quick' | 'quick-result' | 'nba' | 'nba-result';

const EMPTY_ANSWERS: AllAnswers = {
  M1: {},
  M2: {},
  M3: {},
  M4: {},
  M5: {},
  M6: {},
};

export function Wizard() {
  const [phase, setPhase] = useState<Phase>('intro');

  // Quick-Check
  const [quickIndex, setQuickIndex] = useState(0);
  const [quickAnswers, setQuickAnswers] = useState<Partial<QuickAnswers>>({});

  // NBA
  const [moduleIndex, setModuleIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [nbaAnswers, setNbaAnswers] = useState<AllAnswers>(EMPTY_ANSWERS);

  // Ref auf den Frage-Container, damit wir bei jeder neuen Frage nach oben scrollen
  const questionRef = useRef<HTMLDivElement | null>(null);
  // Auto-scroll: wenn sich Phase/Index ändert → Frage in den sichtbaren Bereich
  useEffect(() => {
    if (phase === 'quick' || phase === 'nba') {
      // kleine Verzögerung, damit DOM gerendert ist
      const id = window.setTimeout(() => {
        questionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return () => window.clearTimeout(id);
    }
  }, [phase, quickIndex, moduleIndex, itemIndex]);

  // Gesamtscore (für Ergebnis-Phase)
  const totalScore = useMemo(() => {
    const scores = calcModuleScoresFromAnswers(nbaAnswers, MODULE_META);
    return calcTotalScore(scores);
  }, [nbaAnswers]);

  // ---------------------------------------------------------------------------
  // Reset / Navigation
  // ---------------------------------------------------------------------------

  function restart() {
    setPhase('intro');
    setQuickIndex(0);
    setQuickAnswers({});
    setModuleIndex(0);
    setItemIndex(0);
    setNbaAnswers(EMPTY_ANSWERS);
  }

  // ---------------------------------------------------------------------------
  // Phase: Intro
  // ---------------------------------------------------------------------------

  if (phase === 'intro') {
    return (
      <div className="card md:p-10">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-care-soft text-care">
            <ClipboardCheck className="h-8 w-8" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-heading text-h2-mobile md:text-h2">
            So funktioniert der Pflegegradrechner
          </h2>
          <ol className="mt-6 grid max-w-prose-comfort gap-4 text-left">
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs-label font-semibold text-white">
                1
              </span>
              <span className="text-body">
                <strong>Schnelle Einschätzung</strong> in 3 Fragen (ca. 1 Minute).
                Sie erfahren sofort eine erste Tendenz.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs-label font-semibold text-white">
                2
              </span>
              <span className="text-body">
                <strong>Genaue Berechnung</strong> nach den 6 Modulen des
                Begutachtungs-Instruments (NBA), wenn Sie es genauer wissen möchten.
                Dauert etwa 10 Minuten.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs-label font-semibold text-white">
                3
              </span>
              <span className="text-body">
                <strong>Ergebnis und Empfehlung</strong> mit voraussichtlichem
                Pflegegrad und monatlichem Pflegegeld.
              </span>
            </li>
          </ol>
          <button
            type="button"
            onClick={() => setPhase('quick')}
            className="btn-care btn-lg mt-8"
          >
            Jetzt starten
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <p className="mt-4 text-xs-label text-ink-muted">
            Anonym · DSGVO-konform · Keine Anmeldung
          </p>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Phase: Quick-Check
  // ---------------------------------------------------------------------------

  if (phase === 'quick') {
    const question = QUICK_QUESTIONS[quickIndex];
    const currentAnswer = quickAnswers[question.id];

    function selectQuick(value: ItemStage) {
      const next: Partial<QuickAnswers> = {
        ...quickAnswers,
        [question.id]: value,
      };
      setQuickAnswers(next);
      // Eine kleine Verzögerung, damit der Nutzer die Auswahl bestätigt sieht.
      window.setTimeout(() => advanceQuick(next), 180);
    }

    function advanceQuick(answers: Partial<QuickAnswers>) {
      if (quickIndex < QUICK_QUESTIONS.length - 1) {
        setQuickIndex(quickIndex + 1);
      } else {
        // Alle Quick-Fragen beantwortet?
        if (
          answers.selbstversorgung !== undefined &&
          answers.kognition !== undefined &&
          answers.medizinisch !== undefined
        ) {
          setPhase('quick-result');
        }
      }
    }

    function backQuick() {
      if (quickIndex > 0) {
        setQuickIndex(quickIndex - 1);
      } else {
        setPhase('intro');
      }
    }

    return (
      <div ref={questionRef} className="scroll-mt-36 md:scroll-mt-44 lg:scroll-mt-52">
        <div className="sticky top-2 z-20 -mx-4 bg-surface/95 px-4 py-3 shadow-sm backdrop-blur md:relative md:top-0 md:mx-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none">
          <ProgressBar
            current={quickIndex + 1}
            total={QUICK_QUESTIONS.length}
            label={`Schnelle Einschätzung · Frage ${quickIndex + 1} von ${QUICK_QUESTIONS.length}`}
          />
        </div>
        <div className="card mt-6 md:p-10">
          <h2 className="font-heading text-h3 md:text-h2-mobile">{question.text}</h2>
          {question.helper && (
            <p className="mt-2 text-small text-ink-muted">{question.helper}</p>
          )}
          <fieldset className="mt-6">
            <legend className="sr-only">{question.text}</legend>
            <div className="grid gap-3">
              {question.options.map((option) => (
                <OptionCard
                  key={option.value}
                  name={`quick-${question.id}`}
                  option={option}
                  selected={currentAnswer === option.value}
                  onSelect={() => selectQuick(option.value as ItemStage)}
                />
              ))}
            </div>
          </fieldset>
        </div>
        <NavButtons
          onBack={backQuick}
          backLabel={quickIndex === 0 ? 'Zur Übersicht' : 'Zurück'}
        />
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Phase: Quick-Result
  // ---------------------------------------------------------------------------

  if (phase === 'quick-result') {
    const sv = quickAnswers.selbstversorgung ?? 0;
    const kg = quickAnswers.kognition ?? 0;
    const md = quickAnswers.medizinisch ?? 0;
    const estimate: QuickResult = calcQuickEstimate({
      selbstversorgung: sv,
      kognition: kg,
      medizinisch: md,
    });

    return (
      <div className="card md:p-10">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Erste Tendenz</span>
          <h2 className="mt-3 font-heading text-h2-mobile md:text-h2">
            Wahrscheinlicher Bereich
          </h2>
          <p className="mt-4 font-heading text-h2-mobile md:text-h2 text-care">
            {estimate.label}
          </p>
          <p className="mt-4 max-w-prose-comfort text-body text-ink-muted">
            Dies ist nur eine grobe Tendenz. Für eine genauere Einschätzung
            beantworten Sie bitte die 6 Module der vollständigen Berechnung
            (ca. 10 Minuten).
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setPhase('nba')}
              className="btn-care btn-lg"
            >
              <ClipboardList className="h-5 w-5" aria-hidden="true" />
              Genauer berechnen (10 Min)
            </button>
            <button
              type="button"
              onClick={restart}
              className="btn-secondary btn-lg"
            >
              Fertig
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Phase: NBA
  // ---------------------------------------------------------------------------

  if (phase === 'nba') {
    const currentModule = MODULES[moduleIndex];
    const currentItem: ItemQuestion = currentModule.items[itemIndex];
    const currentAnswer = nbaAnswers[currentModule.id]?.[currentItem.id];

    function selectNba(value: ItemStage) {
      const moduleAnswers = {
        ...(nbaAnswers[currentModule.id] ?? {}),
        [currentItem.id]: value,
      };
      const next: AllAnswers = {
        ...nbaAnswers,
        [currentModule.id]: moduleAnswers,
      };
      setNbaAnswers(next);
      window.setTimeout(() => advanceNba(), 180);
    }

    function advanceNba() {
      if (itemIndex < currentModule.items.length - 1) {
        setItemIndex(itemIndex + 1);
      } else if (moduleIndex < MODULES.length - 1) {
        setModuleIndex(moduleIndex + 1);
        setItemIndex(0);
      } else {
        setPhase('nba-result');
      }
    }

    function backNba() {
      if (itemIndex > 0) {
        setItemIndex(itemIndex - 1);
      } else if (moduleIndex > 0) {
        const prevModule = MODULES[moduleIndex - 1];
        setModuleIndex(moduleIndex - 1);
        setItemIndex(prevModule.items.length - 1);
      } else {
        setPhase('quick-result');
      }
    }

    return (
      <div ref={questionRef} className="scroll-mt-36 md:scroll-mt-44 lg:scroll-mt-52">
        <div className="sticky top-2 z-20 -mx-4 bg-surface/95 px-4 py-3 shadow-sm backdrop-blur md:relative md:top-0 md:mx-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none">
          <ModuleProgress
            current={moduleIndex}
            itemIndex={itemIndex}
            itemTotal={currentModule.items.length}
          />
        </div>
        <div className="card mt-6 md:p-10">
          <p className="eyebrow">
            Modul {currentModule.id.replace('M', '')} von 6 · {currentModule.title}
          </p>
          <p className="mt-2 text-small text-ink-muted">
            Frage {itemIndex + 1} von {currentModule.items.length}
          </p>
          <h2 className="mt-4 font-heading text-h3 md:text-h2-mobile">
            {currentItem.text}
          </h2>
          {currentItem.helper && (
            <p className="mt-2 text-small text-ink-muted">{currentItem.helper}</p>
          )}
          <fieldset className="mt-6">
            <legend className="sr-only">{currentItem.text}</legend>
            <div className="grid gap-3">
              {currentItem.options.map((option) => (
                <OptionCard
                  key={`${currentItem.id}-${option.value}`}
                  name={`nba-${currentItem.id}`}
                  option={option}
                  selected={currentAnswer === option.value}
                  onSelect={() => selectNba(option.value as ItemStage)}
                />
              ))}
            </div>
          </fieldset>
        </div>
        <NavButtons onBack={backNba} backLabel="Zurück" />
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Phase: NBA-Result
  // ---------------------------------------------------------------------------

  // phase === 'nba-result'
  const pg = pflegegradFromScore(totalScore);

  return <Result pflegegrad={pg} totalScore={totalScore} onRestart={restart} />;
}

// -----------------------------------------------------------------------------
// Helper-Komponenten
// -----------------------------------------------------------------------------

interface OptionCardProps {
  name: string;
  option: AnswerOption;
  selected: boolean;
  onSelect: () => void;
}

function OptionCard({ name, option, selected, onSelect }: OptionCardProps) {
  const id = `${name}-${option.value}`;
  return (
    <label
      htmlFor={id}
      className={`flex min-h-[80px] cursor-pointer items-start gap-4 rounded-card border-2 p-4 transition-all duration-150 ${
        selected
          ? 'border-care bg-care-soft shadow-md'
          : 'border-line bg-surface hover:border-primary hover:bg-primary-soft'
      }`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={option.value}
        checked={selected}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? 'border-care bg-care text-white' : 'border-ink-muted/40 bg-white'
        }`}
        aria-hidden="true"
      >
        {selected && <CheckCircle2 className="h-5 w-5" />}
      </span>
      <span className="flex flex-col">
        <span className="font-semibold text-ink">{option.label}</span>
        {option.helper && (
          <span className="mt-1 text-small text-ink-muted">{option.helper}</span>
        )}
      </span>
    </label>
  );
}

interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
}

function ProgressBar({ current, total, label }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xs-label uppercase tracking-wider text-ink-muted">
          {label}
        </p>
        <p className="text-xs-label text-ink-muted">{pct} %</p>
      </div>
      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label={label}
      >
        <div
          className="h-full bg-care transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

interface ModuleProgressProps {
  current: number;
  itemIndex: number;
  itemTotal: number;
}

function ModuleProgress({ current, itemIndex, itemTotal }: ModuleProgressProps) {
  const itemPct = Math.round(((itemIndex + 1) / itemTotal) * 100);
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs-label uppercase tracking-wider text-ink-muted">
          Modul {current + 1} / {MODULES.length} · Frage {itemIndex + 1} / {itemTotal}
        </p>
        <p className="text-xs-label text-ink-muted">{itemPct} %</p>
      </div>
      {/* Modul-Segmente */}
      <div className="mt-2 flex gap-1.5">
        {MODULES.map((mod, idx) => (
          <div
            key={mod.id}
            className={`h-2 flex-1 rounded-full transition-colors duration-200 ${
              idx < current
                ? 'bg-care'
                : idx === current
                ? 'bg-care/70'
                : 'bg-line'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

interface NavButtonsProps {
  onBack: () => void;
  backLabel: string;
}

function NavButtons({ onBack, backLabel }: NavButtonsProps) {
  return (
    <div className="mt-6 flex items-center justify-between gap-3">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center justify-center gap-2 rounded-btn border-2 border-primary/30 bg-white px-4 py-2.5 text-small font-semibold text-primary hover:border-primary hover:bg-primary-soft transition-colors"
      >
        <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">{backLabel}</span>
        <span className="sm:hidden">Zurück</span>
      </button>
      <p className="text-xs-label text-ink-muted">
        Tippen Sie auf eine Antwort, um fortzufahren
      </p>
    </div>
  );
}

