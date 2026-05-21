// Pflegegradrechner - Score-Berechnung nach NBA / §15 SGB XI
// Vereinfachte Eigenentwicklung. Unverbindliche Schätzung.

export type ModuleId = 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6';

// Antwort-Stufe pro Item (NBA-Skalierung 0-3)
// 0 = selbstständig, 1 = überwiegend selbstständig,
// 2 = überwiegend unselbstständig, 3 = unselbstständig
export type ItemStage = 0 | 1 | 2 | 3;

// Antworten als Map: Item-ID -> Stufe
export type ModuleAnswers = Record<string, ItemStage>;

export type AllAnswers = Record<ModuleId, ModuleAnswers>;

// Anzahl Items je Modul (Standard-Fragebogen). Wird in questions.ts gepflegt.
// Max-Rohwert eines Moduls = items * 3.
export interface ModuleMeta {
  id: ModuleId;
  itemCount: number;
}

// Gewichtete Modul-Punkte (0-100) je Modul nach Stufen-Konversion.
// Wir verwenden eine lineare Normalisierung des Rohwerts (Summe der Stufen)
// auf 0-100. Damit bilden wir die NBA-Stufentabelle vereinfacht ab.
export interface ModuleScores {
  M1: number;
  M2: number;
  M3: number;
  M4: number;
  M5: number;
  M6: number;
}

// Quick-Check-Antworten (3 Fragen)
export interface QuickAnswers {
  selbstversorgung: 0 | 1 | 2 | 3;
  kognition: 0 | 1 | 2 | 3;
  medizinisch: 0 | 1 | 2 | 3;
}

// -----------------------------------------------------------------------------
// Module-Score-Berechnung
// -----------------------------------------------------------------------------

/**
 * Berechnet die Modul-Punkte (0-100) aus den Item-Antworten eines Moduls.
 * Linearer Mapping: rohwert / maxRoh * 100.
 * @param answers Antworten innerhalb eines Moduls (Item -> Stufe)
 * @param itemCount Anzahl Items im Modul (für Max-Rohwert)
 */
export function calcModuleScore(answers: ModuleAnswers, itemCount: number): number {
  if (itemCount <= 0) return 0;
  const sum = Object.values(answers).reduce<number>((acc, val) => acc + (val ?? 0), 0);
  const max = itemCount * 3;
  const score = (sum / max) * 100;
  return Math.round(score * 10) / 10;
}

// -----------------------------------------------------------------------------
// Gesamtscore nach NBA-Gewichtung
// -----------------------------------------------------------------------------

/**
 * Gewichtet die Modul-Scores nach NBA (§15 SGB XI):
 *  - M1: 10 %
 *  - M2 vs. M3: jeweils 0-100, der höhere Wert zählt, gewichtet mit 15 %
 *  - M4: 40 %
 *  - M5: 20 %
 *  - M6: 15 %
 * Ergebnis: 0-100 Punkte.
 */
export function calcTotalScore(moduleScores: ModuleScores): number {
  const m1 = clamp(moduleScores.M1) * 0.1;
  const m2m3 = Math.max(clamp(moduleScores.M2), clamp(moduleScores.M3)) * 0.15;
  const m4 = clamp(moduleScores.M4) * 0.4;
  const m5 = clamp(moduleScores.M5) * 0.2;
  const m6 = clamp(moduleScores.M6) * 0.15;
  const total = m1 + m2m3 + m4 + m5 + m6;
  return Math.round(total * 10) / 10;
}

function clamp(n: number): number {
  if (!Number.isFinite(n)) return 0;
  if (n < 0) return 0;
  if (n > 100) return 100;
  return n;
}

// -----------------------------------------------------------------------------
// Pflegegrad-Mapping nach §15 SGB XI
// -----------------------------------------------------------------------------

export type Pflegegrad = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * Pflegegrad-Zuordnung aus Gesamtpunktzahl (0-100).
 * 0 = kein Pflegegrad (geringfügige Beeinträchtigung)
 */
export function pflegegradFromScore(totalScore: number): Pflegegrad {
  const s = clamp(totalScore);
  if (s < 12.5) return 0;
  if (s < 27) return 1;
  if (s < 47.5) return 2;
  if (s < 70) return 3;
  if (s < 90) return 4;
  return 5;
}

// -----------------------------------------------------------------------------
// Monatliches Pflegegeld (Stand 2025/2026)
// -----------------------------------------------------------------------------

/**
 * Monatliches Pflegegeld in Euro für die häusliche Pflege durch Angehörige.
 * Aktuelle Werte 2025/2026.
 */
export function pflegegeldFor(pg: Pflegegrad): number {
  switch (pg) {
    case 2:
      return 347;
    case 3:
      return 599;
    case 4:
      return 800;
    case 5:
      return 990;
    case 1:
    case 0:
    default:
      return 0;
  }
}

// -----------------------------------------------------------------------------
// Quick-Check: Tendenz-Schätzung
// -----------------------------------------------------------------------------

export interface QuickResult {
  /** Untere geschätzte Pflegegrad-Grenze (0 = kein PG). */
  lower: Pflegegrad;
  /** Obere geschätzte Pflegegrad-Grenze. */
  upper: Pflegegrad;
  /** Textuelle Beschreibung, z.B. "Pflegegrad 2 – 3". */
  label: string;
}

/**
 * Schnelle Tendenz aus 3 Quick-Check-Fragen.
 * Wir gewichten die 3 Achsen und übersetzen die Summe in einen PG-Bereich.
 */
export function calcQuickEstimate(quickAnswers: QuickAnswers): QuickResult {
  // Selbstversorgung wiegt doppelt (proxy für M4 = 40%)
  const weighted =
    quickAnswers.selbstversorgung * 2 +
    quickAnswers.kognition * 1.2 +
    quickAnswers.medizinisch * 1.0;
  // weighted-Bereich: 0 .. 12.6
  // Mapping auf PG-Bereich (mit Unsicherheits-Spanne ±1)
  let center: Pflegegrad;
  if (weighted < 1.5) center = 0;
  else if (weighted < 3.5) center = 1;
  else if (weighted < 6) center = 2;
  else if (weighted < 8.5) center = 3;
  else if (weighted < 11) center = 4;
  else center = 5;

  const lower = Math.max(0, center - 1) as Pflegegrad;
  const upper = Math.min(5, center + 1) as Pflegegrad;

  return {
    lower,
    upper,
    label: formatRange(lower, upper),
  };
}

function formatRange(lower: Pflegegrad, upper: Pflegegrad): string {
  if (lower === 0 && upper === 0) return 'Kein Pflegegrad';
  if (lower === 0) return `Kein Pflegegrad bis Pflegegrad ${upper}`;
  if (lower === upper) return `Pflegegrad ${lower}`;
  return `Pflegegrad ${lower} – ${upper}`;
}

// -----------------------------------------------------------------------------
// Helfer: Gesamt-Berechnung aus All-Antworten
// -----------------------------------------------------------------------------

export function calcModuleScoresFromAnswers(
  answers: AllAnswers,
  meta: Record<ModuleId, ModuleMeta>,
): ModuleScores {
  return {
    M1: calcModuleScore(answers.M1 ?? {}, meta.M1.itemCount),
    M2: calcModuleScore(answers.M2 ?? {}, meta.M2.itemCount),
    M3: calcModuleScore(answers.M3 ?? {}, meta.M3.itemCount),
    M4: calcModuleScore(answers.M4 ?? {}, meta.M4.itemCount),
    M5: calcModuleScore(answers.M5 ?? {}, meta.M5.itemCount),
    M6: calcModuleScore(answers.M6 ?? {}, meta.M6.itemCount),
  };
}
