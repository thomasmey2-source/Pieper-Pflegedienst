export const site = {
  legalName: 'Armin & Timo Pieper GbR',
  legalSuffix: 'Häusliche Krankenpflege',
  shortName: 'Pieper',
  brandLine: 'Pieper · Häusliche Krankenpflege',
  foundedYear: 1985,
  foundedYearsAgo: 41,
  membership: 'AG Freie Ambulante Krankenpflege e. V.',
  address: {
    street: 'Cronenberger Straße 383',
    zip: '42349',
    city: 'Wuppertal',
    district: 'Cronenberg',
  },
  contact: {
    phone: '0202 4099069',
    phoneHref: 'tel:+4920240990690',
    email: 'info@pflegedienst-pieper.de',
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
  url: 'https://pflegedienst-pieper.de',
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
