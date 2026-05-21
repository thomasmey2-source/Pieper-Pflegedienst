// Fragen-Sets für den Pflegegradrechner
// Quick-Check: 3 Fragen für eine schnelle Tendenz
// NBA-Wizard: 6 Module mit jeweils 3-6 Items, vereinfacht formuliert

import type { ItemStage, ModuleId, ModuleMeta } from './scoring';

export interface AnswerOption {
  label: string;
  helper?: string;
  value: ItemStage;
}

export interface ItemQuestion {
  id: string;
  text: string;
  helper?: string;
  options: AnswerOption[];
}

export interface ModuleDefinition {
  id: ModuleId;
  title: string;
  shortTitle: string;
  description: string;
  items: ItemQuestion[];
}

// -----------------------------------------------------------------------------
// Standard-Antwort-Skalen
// -----------------------------------------------------------------------------

const SELBSTSTAENDIGKEIT_OPTIONS: AnswerOption[] = [
  { label: 'Selbstständig', helper: 'Erledigt die Person ohne Hilfe.', value: 0 },
  { label: 'Überwiegend selbstständig', helper: 'Kleine Erinnerungen oder Anstöße reichen.', value: 1 },
  { label: 'Überwiegend unselbstständig', helper: 'Braucht regelmäßig spürbare Hilfe.', value: 2 },
  { label: 'Unselbstständig', helper: 'Geht ohne fremde Hilfe nicht.', value: 3 },
];

const HAEUFIGKEIT_OPTIONS: AnswerOption[] = [
  { label: 'Nie / sehr selten', value: 0 },
  { label: 'Selten (etwa 1× pro Woche)', value: 1 },
  { label: 'Häufig (mehrmals pro Woche)', value: 2 },
  { label: 'Täglich oder fast täglich', value: 3 },
];

const FAEHIGKEIT_VORHANDEN_OPTIONS: AnswerOption[] = [
  { label: 'Vollständig vorhanden', value: 0 },
  { label: 'Größtenteils vorhanden', value: 1 },
  { label: 'In Teilen vorhanden', value: 2 },
  { label: 'Nicht vorhanden', value: 3 },
];

// -----------------------------------------------------------------------------
// Quick-Check
// -----------------------------------------------------------------------------

export interface QuickQuestion {
  id: 'selbstversorgung' | 'kognition' | 'medizinisch';
  text: string;
  helper: string;
  options: AnswerOption[];
}

export const QUICK_QUESTIONS: QuickQuestion[] = [
  {
    id: 'selbstversorgung',
    text: 'Wie viel Hilfe braucht die Person bei Körperpflege, Anziehen und Essen?',
    helper: 'Denken Sie an den typischen Tag: Waschen, Zähne putzen, Anziehen, Mahlzeiten.',
    options: [
      { label: 'Keine Hilfe nötig', helper: 'Macht alles selbstständig.', value: 0 },
      { label: 'Wenig Hilfe', helper: 'Hin und wieder eine kleine Unterstützung.', value: 1 },
      { label: 'Regelmäßig Hilfe', helper: 'Mehrmals täglich Unterstützung nötig.', value: 2 },
      { label: 'Umfassende Hilfe', helper: 'Bei fast allen Verrichtungen.', value: 3 },
    ],
  },
  {
    id: 'kognition',
    text: 'Wie ist die geistige Verfassung der Person?',
    helper: 'Erinnerungsvermögen, Orientierung und Verständnis im Alltag.',
    options: [
      { label: 'Orientiert und klar', value: 0 },
      { label: 'Vergisst manchmal etwas', value: 1 },
      { label: 'Deutlich vergesslich oder verwirrt', value: 2 },
      { label: 'Stark eingeschränkt (z. B. Demenz)', value: 3 },
    ],
  },
  {
    id: 'medizinisch',
    text: 'Werden täglich medizinische Maßnahmen benötigt?',
    helper: 'Z. B. Medikamente richten, Verbände, Injektionen, Wundversorgung.',
    options: [
      { label: 'Nein', value: 0 },
      { label: 'Gelegentlich', value: 1 },
      { label: 'Mehrmals pro Woche', value: 2 },
      { label: 'Täglich', value: 3 },
    ],
  },
];

// -----------------------------------------------------------------------------
// NBA-Module (6 Module mit vereinfachten Items)
// -----------------------------------------------------------------------------

export const MODULES: ModuleDefinition[] = [
  {
    id: 'M1',
    title: 'Mobilität',
    shortTitle: 'Mobilität',
    description: 'Wie selbstständig bewegt sich die Person?',
    items: [
      { id: 'm1_position', text: 'Position im Bett wechseln (z. B. drehen, aufsetzen)', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm1_sitzen', text: 'Stabil sitzen können', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm1_umsetzen', text: 'Vom Bett in einen Stuhl wechseln', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm1_fortbewegen', text: 'Sich in der Wohnung fortbewegen', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm1_treppe', text: 'Treppensteigen (eine Etage)', options: SELBSTSTAENDIGKEIT_OPTIONS },
    ],
  },
  {
    id: 'M2',
    title: 'Geistige und kommunikative Fähigkeiten',
    shortTitle: 'Geistig',
    description: 'Wie gut funktionieren Erinnerung, Orientierung und Verständigung?',
    items: [
      { id: 'm2_personen', text: 'Vertraute Personen erkennen', options: FAEHIGKEIT_VORHANDEN_OPTIONS },
      { id: 'm2_orientierung_ort', text: 'Sich örtlich orientieren (Wohnung, Umgebung)', options: FAEHIGKEIT_VORHANDEN_OPTIONS },
      { id: 'm2_orientierung_zeit', text: 'Sich zeitlich orientieren (Tag, Uhrzeit)', options: FAEHIGKEIT_VORHANDEN_OPTIONS },
      { id: 'm2_gedaechtnis', text: 'Wichtige Ereignisse merken', options: FAEHIGKEIT_VORHANDEN_OPTIONS },
      { id: 'm2_entscheiden', text: 'Entscheidungen im Alltag treffen', options: FAEHIGKEIT_VORHANDEN_OPTIONS },
      { id: 'm2_verstehen', text: 'Aufforderungen verstehen', options: FAEHIGKEIT_VORHANDEN_OPTIONS },
    ],
  },
  {
    id: 'M3',
    title: 'Verhaltensweisen und psychische Probleme',
    shortTitle: 'Verhalten',
    description: 'Wie häufig zeigen sich belastende Verhaltensweisen?',
    items: [
      { id: 'm3_unruhe', text: 'Motorische Unruhe (z. B. nächtliches Umherlaufen)', options: HAEUFIGKEIT_OPTIONS },
      { id: 'm3_aggressiv', text: 'Verbale oder körperliche Abwehr bei Pflege', options: HAEUFIGKEIT_OPTIONS },
      { id: 'm3_angst', text: 'Ängste oder Panikzustände', options: HAEUFIGKEIT_OPTIONS },
      { id: 'm3_antrieb', text: 'Antriebslosigkeit oder depressive Stimmung', options: HAEUFIGKEIT_OPTIONS },
      { id: 'm3_wahn', text: 'Wahnvorstellungen oder Sinnestäuschungen', options: HAEUFIGKEIT_OPTIONS },
    ],
  },
  {
    id: 'M4',
    title: 'Selbstversorgung',
    shortTitle: 'Selbstversorgung',
    description: 'Wie selbstständig läuft die tägliche Körperpflege und Ernährung?',
    items: [
      { id: 'm4_waschen', text: 'Sich waschen (Gesicht, Hände, Oberkörper)', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm4_duschen', text: 'Duschen oder Baden, einschließlich Haare waschen', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm4_intim', text: 'Intimbereich pflegen', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm4_zaehne', text: 'Zahnpflege oder Prothesenpflege', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm4_ankleiden_oben', text: 'Oberkörper an- und auskleiden', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm4_ankleiden_unten', text: 'Unterkörper an- und auskleiden', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm4_essen', text: 'Essen mundgerecht vorbereiten und einnehmen', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm4_trinken', text: 'Ausreichend trinken', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm4_toilette', text: 'Toilette benutzen', options: SELBSTSTAENDIGKEIT_OPTIONS },
    ],
  },
  {
    id: 'M5',
    title: 'Krankheitsbedingte Anforderungen',
    shortTitle: 'Medizinisch',
    description: 'Wie viel Hilfe ist bei medizinischen Maßnahmen nötig?',
    items: [
      { id: 'm5_medikamente', text: 'Medikamente einnehmen', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm5_injektionen', text: 'Injektionen (z. B. Insulin) durchführen', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm5_messungen', text: 'Werte messen (Blutdruck, Blutzucker)', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm5_verbaende', text: 'Verbandswechsel oder Wundversorgung', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm5_therapien', text: 'Therapien zu Hause durchführen (z. B. Inhalation)', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm5_arzt', text: 'Arztbesuche organisieren und durchführen', options: SELBSTSTAENDIGKEIT_OPTIONS },
    ],
  },
  {
    id: 'M6',
    title: 'Gestaltung des Alltags und soziale Kontakte',
    shortTitle: 'Alltag',
    description: 'Wie selbstständig wird der Tag gestaltet?',
    items: [
      { id: 'm6_tagesablauf', text: 'Tagesablauf planen und einhalten', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm6_ruhen', text: 'Sich beschäftigen und ausruhen', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm6_zukunft', text: 'In die Zukunft gerichtete Pläne entwickeln', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm6_kontakte_direkt', text: 'Kontakt zu Menschen im direkten Umfeld pflegen', options: SELBSTSTAENDIGKEIT_OPTIONS },
      { id: 'm6_kontakte_aussen', text: 'Kontakte außerhalb des Hauses pflegen', options: SELBSTSTAENDIGKEIT_OPTIONS },
    ],
  },
];

export const MODULE_META: Record<ModuleId, ModuleMeta> = MODULES.reduce(
  (acc, mod) => {
    acc[mod.id] = { id: mod.id, itemCount: mod.items.length };
    return acc;
  },
  {} as Record<ModuleId, ModuleMeta>,
);
