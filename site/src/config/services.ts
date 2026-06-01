export interface Service {
  slug: string;
  title: string;
  short: string;
  iconPath: string;
  description: string;
  includes: string[];
  paidBy: string;
  forWhom: string;
}

export const services: Service[] = [
  {
    slug: 'grundpflege',
    title: 'Grundpflege',
    short: 'Hilfe beim Waschen, Anziehen und Bewegen — täglich und mit Würde.',
    iconPath: '<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/>',
    description:
      'Die Grundpflege umfasst alle Hilfen bei den täglichen Verrichtungen der Körperpflege, Ernährung und Mobilität. Wir kommen so oft, wie es nötig ist — meist ein- bis dreimal täglich, immer mit festen Bezugspersonen.',
    includes: [
      'Waschen, Duschen, Baden',
      'An- und Auskleiden',
      'Hilfe beim Essen und Trinken',
      'Mobilisation und Lagerung',
      'Hilfe beim Toilettengang & Inkontinenzversorgung',
      'Hautpflege und Vorbeugung von Druckstellen',
    ],
    paidBy: 'Pflegekasse (SGB XI) — abhängig vom Pflegegrad',
    forWhom: 'Menschen mit anerkanntem Pflegegrad (PG 2 – 5)',
  },
  {
    slug: 'behandlungspflege',
    title: 'Behandlungspflege',
    short: 'Medikamentengabe, Verbände, Injektionen — abgerechnet über die Krankenkasse (SGB V).',
    iconPath: '<path d="M9 12h6m-3-3v6"/><circle cx="12" cy="12" r="9"/>',
    description:
      'Behandlungspflege erfolgt auf ärztliche Verordnung. Examinierte Pflegefachkräfte führen alle medizinisch notwendigen Maßnahmen genau so durch, wie die Ärztin sie verordnet — sorgfältig dokumentiert und mit der Krankenkasse abgerechnet.',
    includes: [
      'Medikamentengabe & -richten',
      'Injektionen (s. c., i. m.)',
      'Verbandwechsel & Wundversorgung',
      'Blutdruck-, Blutzucker- und Vitalzeichenkontrolle',
      'Kompressionsverbände, Stoma- und Katheterpflege',
      'Inhalationen und spezielle Pflegetechniken',
    ],
    paidBy: 'Krankenkasse (SGB V) — auf ärztliche Verordnung',
    forWhom: 'Alle gesetzlich Versicherten mit ärztlicher Verordnung',
  },
  {
    slug: 'verhinderungspflege',
    title: 'Verhinderungspflege',
    short: 'Wenn pflegende Angehörige Urlaub brauchen oder krank sind — wir übernehmen.',
    iconPath: '<path d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>',
    description:
      'Pflegende Angehörige brauchen Pausen — wir springen ein. Stundenweise oder mehrere Wochen am Stück. Bis zu 1.612 € pro Jahr übernimmt die Pflegekasse, ohne dass Sie nachweisen müssen, wofür das Geld ausgegeben wird.',
    includes: [
      'Stundenweise Entlastung (ab 1 Stunde)',
      'Tage- oder wochenweise Komplettübernahme',
      'Urlaubsvertretung für pflegende Angehörige',
      'Vertretung bei Krankheit oder eigenem Arzttermin',
      'Wir kennen Ihre Routine — kein Pflegebruch',
    ],
    paidBy: 'Pflegekasse — bis 1.612 €/Jahr (ab PG 2)',
    forWhom: 'Pflegebedürftige ab PG 2, die zu Hause gepflegt werden',
  },
  {
    slug: '24h-pflege',
    title: '24-Std.-Bereitschaft',
    short: 'Tagsüber geplante Einsätze — und rund um die Uhr erreichbar, wenn ein dringender Notfall eintritt.',
    iconPath: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
    description:
      'Wir bieten keine durchgehende Rund-um-die-Uhr-Pflege — aber unsere Patientinnen und Patienten erreichen rund um die Uhr unseren Bereitschaftsdienst. Bei dringenden pflegerischen Notfällen ist sofort jemand erreichbar, der die Lage einschätzt und hilft.',
    includes: [
      'Geplante Pflegeeinsätze nach Bedarf — meist mehrmals täglich',
      'Telefonische Bereitschaft rund um die Uhr für unsere Patienten',
      'Schnelle Einschätzung und Hilfe bei dringenden Notfällen',
      'Koordination mit Hausärzten, Not- und Rettungsdienst',
      'Feste Bezugspersonen, die Ihre Situation kennen',
    ],
    paidBy: 'Bestandteil unserer Pflegeleistungen (SGB XI / SGB V)',
    forWhom: 'Unsere Pflegepatienten, die auch außerhalb der Einsätze Sicherheit möchten',
  },
  {
    slug: 'palliativpflege',
    title: 'Palliativpflege',
    short: 'Würdevolle Begleitung in der letzten Lebensphase — zu Hause, im vertrauten Umfeld.',
    iconPath: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    description:
      'Sterben gehört zum Leben — und für viele Menschen ist es ein Wunsch, zu Hause zu sterben. Wir begleiten Sie und Ihre Angehörigen in der letzten Lebensphase: schmerzlindernd, würdevoll, ohne Eile.',
    includes: [
      'Spezialisierte ambulante Palliativversorgung (SAPV)',
      'Schmerz- und Symptommanagement nach ärztlicher Anordnung',
      'Psychische Begleitung von Patient & Angehörigen',
      'Zusammenarbeit mit Hausarzt, Hospiz und Schmerztherapeuten',
      'Beratung zu Patientenverfügung und Vorsorgevollmacht',
    ],
    paidBy: 'Krankenkasse (SAPV) & Pflegekasse',
    forWhom: 'Menschen in der letzten Lebensphase, mit ärztlicher Verordnung',
  },
  {
    slug: 'betreuung',
    title: 'Betreuung',
    short: 'Zeit für Gespräche, Spaziergänge und Aktivitäten — gegen Einsamkeit und für Lebensqualität.',
    iconPath: '<circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0-3-3.85"/>',
    description:
      'Manchmal braucht es keine Pflege im engen Sinn, sondern jemanden, der da ist — vorliest, spazieren geht, gemeinsam kocht. Betreuungsleistungen sind über den Entlastungsbetrag (131 €/Monat ab PG 1) abrechenbar.',
    includes: [
      'Spaziergänge und Begleitung außer Haus',
      'Vorlesen, Spiele, Gespräche',
      'Demenz-Betreuung mit aktivierenden Angeboten',
      'Begleitung zum Friseur, Einkauf, Café',
      'Entlastung pflegender Angehöriger',
    ],
    paidBy: 'Entlastungsbetrag 131 €/Monat (ab PG 1) — Pflegekasse',
    forWhom: 'Alle mit Pflegegrad (ab PG 1) — auch Demenz ohne PG',
  },
  {
    slug: 'arztbegleitung',
    title: 'Arztbegleitung',
    short: 'Begleitung zu Arztterminen, Therapien und Untersuchungen — sicher und verlässlich.',
    iconPath: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    description:
      'Allein zum Arzt fahren ist nicht immer einfach — wir holen Sie ab, begleiten Sie ins Sprechzimmer, hören mit zu und bringen Sie sicher nach Hause. Auch zu Therapien, zur Dialyse oder ins Krankenhaus.',
    includes: [
      'Begleitung zu Hausarzt, Facharzt, Therapeut',
      'Mitschreiben und Erinnern an wichtige Informationen',
      'Hilfe bei Anmeldung, Versichertenkarte, Rezepten',
      'Transport- und Aufzugshilfe bei Mobilitätseinschränkungen',
      'Begleitung zur ambulanten Operation und Nachsorge',
    ],
    paidBy: 'Entlastungsbetrag oder Selbstzahler',
    forWhom: 'Mobilitätseingeschränkte oder unsichere Patienten',
  },
  {
    slug: 'hauswirtschaftliche-versorgung',
    title: 'Hauswirtschaft',
    short: 'Einkaufen, Kochen, Wäsche, Wohnungsreinigung — damit der Alltag leichter wird.',
    iconPath: '<path d="M3 12l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    description:
      'Ein gepflegter Haushalt ist Lebensqualität. Wenn das Bügeln zu schwer und der Einkauf zu weit wird, übernehmen wir — regelmäßig oder vertretungsweise. Auch das ist über die Pflegekasse abrechenbar.',
    includes: [
      'Einkaufen und Besorgungen',
      'Kochen oder Aufwärmen einer warmen Mahlzeit',
      'Wäsche waschen, bügeln, in den Schrank räumen',
      'Wohnungsreinigung (Staubsaugen, Wischen, Bad)',
      'Müll rausbringen, Blumen gießen',
    ],
    paidBy: 'Pflegesachleistung oder Entlastungsbetrag (Pflegekasse)',
    forWhom: 'Pflegebedürftige (ab PG 1)',
  },
];
