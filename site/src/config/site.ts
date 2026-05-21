export const site = {
  legalName: 'Armin & Timo Pieper GbR',
  legalSuffix: 'Häusliche Krankenpflege',
  shortName: 'Pieper',
  brandLine: 'Pieper · Häusliche Krankenpflege',
  foundedYear: 1985,
  foundedYearsAgo: 41,
  membership: 'AG Freie Ambulante Krankenpflege e. V.',
  // Harte Zahlen aus dem Pieper-Briefing
  stats: {
    yearsInBusiness: '40+',          // gegründet 1985 — autoritative Zahl nach außen
    yearsFamilyRun: '25+',           // Pieper-Familie seit 1998 (intern, falls benötigt)
    patients: '~100',                // aktuell betreute Patienten
    mdkNote: '1',                    // MDK-Pflegenote
    teamSize: '~15',                 // Mitarbeitende gesamt
    examined: 6,                     // vollexaminierte Pflegefachkräfte
  },
  unique: [
    'Ältester und größter ambulanter Pflegedienst in Cronenberg & Südstadt',
    'Familiengeführt seit über 30 Jahren',
    'MDK-Pflegenote 1',
    'Alles aus einer Hand — keine Teilversorgung',
  ],
  address: {
    street: 'Cronenberger Straße 383',
    zip: '42349',
    city: 'Wuppertal',
    district: 'Cronenberg',
  },
  contact: {
    phone: '0202-40 25 59',
    phoneHref: 'tel:+49202402559',
    email: 'info@pflegedienstpieper.de',
    whatsapp: '+49 XXX XXXXXXX',
  },
  officeHours: {
    weekdays: 'Mo–Fr 08:30–12:30',
    note: 'und nach Vereinbarung',
  },
  serviceArea: [
    'Cronenberg',
    'Küllenhahn',
    'Sudberg',
    'Kohlfurth',
    'Hahnerberg',
    'Ronsdorf',
    'Lichtscheid',
  ],
  url: 'https://pflegedienstpieper.de',
} as const;

type NavChild = { label: string; href: string };
type NavItem  = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: 'Leistungen',
    href: '/leistungen/',
    children: [
      { label: 'Alle Leistungen',         href: '/leistungen/' },
      { label: 'Grundpflege',             href: '/leistungen/grundpflege/' },
      { label: 'Behandlungspflege',       href: '/leistungen/behandlungspflege/' },
      { label: 'Verhinderungspflege',     href: '/leistungen/verhinderungspflege/' },
      { label: '24h-Pflege',              href: '/leistungen/24h-pflege/' },
      { label: 'Palliativpflege',         href: '/leistungen/palliativpflege/' },
      { label: 'Betreuung',               href: '/leistungen/betreuung/' },
      { label: 'Arztbegleitung',          href: '/leistungen/arztbegleitung/' },
      { label: 'Hauswirtschaft',          href: '/leistungen/hauswirtschaftliche-versorgung/' },
    ],
  },
  { label: 'Pflegegradrechner', href: '/pflegegradrechner/' },
  { label: 'Ratgeber', href: '/ratgeber/' },
  {
    label: 'Über uns',
    href: '/ueber-uns/',
    children: [
      { label: 'Team & Geschichte', href: '/ueber-uns/' },
      { label: 'Karriere',          href: '/karriere/' },
    ],
  },
  { label: 'Kontakt',  href: '/kontakt/' },
];
