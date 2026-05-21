import { RotateCcw, ArrowRight } from 'lucide-react';
import type { Pflegegrad } from '@/lib/pflegegradrechner/scoring';
import { pflegegeldFor } from '@/lib/pflegegradrechner/scoring';

interface ResultProps {
  pflegegrad: Pflegegrad;
  totalScore: number;
  onRestart: () => void;
}

const EXPLANATIONS: Record<Pflegegrad, string> = {
  0: 'Aktuell liegt keine pflegerelevante Beeinträchtigung im Sinne der Pflegeversicherung vor. Wenn sich Ihre Situation ändert, können Sie jederzeit eine neue Einschätzung vornehmen.',
  1: 'Pflegegrad 1 bedeutet eine geringe Beeinträchtigung der Selbstständigkeit. Sie haben unter anderem Anspruch auf den Entlastungsbetrag von 131 € monatlich.',
  2: 'Pflegegrad 2 steht für eine erhebliche Beeinträchtigung. Pflegegeld, Pflegesachleistungen, Verhinderungspflege und der Entlastungsbetrag stehen Ihnen zu.',
  3: 'Pflegegrad 3 bedeutet eine schwere Beeinträchtigung. Sie erhalten erhöhtes Pflegegeld, Anspruch auf Tages- und Nachtpflege sowie Verhinderungspflege.',
  4: 'Pflegegrad 4 steht für eine schwerste Beeinträchtigung. Die Pflege ist meist umfangreich, viele Leistungen werden zusätzlich kombinierbar.',
  5: 'Pflegegrad 5 ist der höchste Pflegegrad und steht für eine schwerste Beeinträchtigung mit besonderen Anforderungen. Es stehen die umfangreichsten Leistungen zur Verfügung.',
};

export function Result({ pflegegrad, totalScore, onRestart }: ResultProps) {
  const pflegegeld = pflegegeldFor(pflegegrad);
  const hasPflegegrad = pflegegrad > 0;

  return (
    <div className="card md:p-10">
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow mb-4">Ihr Ergebnis</p>
        <div
          className={`flex h-44 w-44 items-center justify-center rounded-full shadow-md ${
            hasPflegegrad ? 'bg-care text-white' : 'bg-ink-muted/15 text-ink-muted'
          }`}
          aria-live="polite"
        >
          <div className="flex flex-col items-center">
            {hasPflegegrad ? (
              <>
                <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
                  Pflegegrad
                </span>
                <span className="text-6xl font-heading font-bold leading-none">
                  {pflegegrad}
                </span>
              </>
            ) : (
              <span className="px-4 text-sm font-semibold">
                Kein Pflegegrad
              </span>
            )}
          </div>
        </div>

        <p className="mt-4 text-small text-ink-muted">
          {totalScore.toFixed(1)} von 100 gewichteten Punkten
        </p>

        {hasPflegegrad && pflegegeld > 0 && (
          <div className="mt-6">
            <p className="text-small text-ink-muted">Voraussichtliches monatliches Pflegegeld</p>
            <p className="mt-1 font-heading text-h2-mobile md:text-h2 text-primary">
              {pflegegeld} €
            </p>
            <p className="text-xs-label text-ink-muted">
              bei häuslicher Pflege durch Angehörige (Stand 2025/2026)
            </p>
          </div>
        )}

        <p className="mt-6 max-w-prose-comfort text-body text-ink">
          {EXPLANATIONS[pflegegrad]}
        </p>

        <div className="mt-6 w-full max-w-prose-comfort rounded-card border-l-4 border-warning bg-warning/10 p-4 text-left">
          <p className="text-small text-ink">
            <strong className="font-semibold">Wichtiger Hinweis:</strong>{' '}
            Unverbindliche Schätzung — keine offizielle Begutachtung durch den
            Medizinischen Dienst (MD). Den verbindlichen Pflegegrad legt der
            MD nach einem persönlichen Termin fest.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="/kontakt/"
            className="inline-flex items-center justify-center gap-2 rounded-btn bg-care px-5 py-3 text-center text-base font-semibold leading-tight text-white shadow-md hover:bg-care-hover transition-colors sm:text-lg"
          >
            <span>Termin vereinbaren</span>
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 rounded-btn border-2 border-primary/30 bg-white px-5 py-3 text-base font-semibold text-primary hover:border-primary hover:bg-primary-soft transition-colors sm:text-lg"
          >
            <RotateCcw className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Von vorne beginnen</span>
          </button>
        </div>
        <p className="mt-3 text-small text-ink-muted">
          Wir helfen bei der Antragstellung — kostenlos und unverbindlich.
        </p>
      </div>
    </div>
  );
}
