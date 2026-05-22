export const STORYBOOK_BASE = 'https://ankush-rustagi.github.io/vds-color-v2-storybook'
export const DOCS_HUB_BASE = 'https://ankush-rustagi.github.io/vds-color-v2/'
export const FIGMA_VDS =
  'https://www.figma.com/design/ErBiDvqI7wPQKKXWfhC6yl/VDS---Verkada-Design-System'

export type PhaseStatus = 'done' | 'active' | 'next' | 'later'

export const PHASES: {
  label: string
  status: PhaseStatus
  owner: string
  detail: string
}[] = [
  {
    label: '1. Define tokens',
    status: 'done',
    owner: 'Design System',
    detail: '567 semantic tokens in Figma Collection. Light + dark pairs per component.',
  },
  {
    label: '2. Publish guides',
    status: 'active',
    owner: 'Design System + PM',
    detail: 'This hub for strategy. Storybook for migration how-to and before/after.',
  },
  {
    label: '3. Migrate by product line',
    status: 'next',
    owner: 'Each product team',
    detail: 'Swap legacy CSS vars and Figma bindings surface by surface. One team example per line.',
  },
  {
    label: '4. Ship + refine',
    status: 'later',
    owner: 'All teams',
    detail: 'Dark mode still in testing. Visual deltas expected. Feedback loop with Design System.',
  },
]

export const WHO_DOES_WHAT = [
  {
    role: 'Design System',
    responsibility: 'Owns token spec in Figma Collection',
    action: 'Keep Collection current; review team PRs against spec',
    href: `${STORYBOOK_BASE}/?path=/docs/reference-semantic-tokens--docs`,
  },
  {
    role: 'Product designer',
    responsibility: 'Rebind Figma components to semantic variables',
    action: 'Start with Alert Button + Checkbox patterns',
    href: `${STORYBOOK_BASE}/?path=/docs/migrations-color-v2-figma-workflow--docs`,
  },
  {
    role: 'Frontend engineer',
    responsibility: 'Replace legacy CSS vars in product surfaces',
    action: 'Use team Storybook example; map --color-surface-default etc.',
    href: `${STORYBOOK_BASE}/?path=/docs/migrations-color-v2-getting-started--docs`,
  },
  {
    role: 'Eng lead / PM',
    responsibility: 'Communicate scope and visual deltas to stakeholders',
    action: 'Track team migration status; flag a11y regressions',
    href: `${STORYBOOK_BASE}/?path=/docs/foundations-color-v2-whats-changing--docs`,
  },
]

export type TeamStatus = 'example-ready' | 'in-progress' | 'not-started'

export type ProductLineTeam = {
  productLine: string
  commandSurface: string
  migrationExample: string
  legacyToNew: string
  designOwner: string
  engOwner: string
  status: TeamStatus
  storybookHref: string
}

export const PRODUCT_TEAMS: ProductLineTeam[] = [
  {
    productLine: 'Video Security',
    commandSurface: 'Camera grid, live view chrome, device health badges',
    migrationExample: 'Status pill colors on camera tiles',
    legacyToNew: '--color-text-secondary → --text/secondary',
    designOwner: 'VDS + Video design',
    engOwner: 'Web Platform',
    status: 'not-started',
    storybookHref: `${STORYBOOK_BASE}/?path=/docs/teams-video-security--docs`,
  },
  {
    productLine: 'Access Control',
    commandSurface: 'Door reader panels, lock state indicators, credential modals',
    migrationExample: 'Alert button on forced-door events',
    legacyToNew: '--button-danger-bg → --button/background/alert',
    designOwner: 'AC design',
    engOwner: 'Access Control eng',
    status: 'not-started',
    storybookHref: `${STORYBOOK_BASE}/?path=/docs/teams-access-control--docs`,
  },
  {
    productLine: 'Alarms',
    commandSurface: 'Incident banners, zone status, arming controls',
    migrationExample: 'Critical alert banner background',
    legacyToNew: '--bg-alert → --background/alert',
    designOwner: 'Alarms design',
    engOwner: 'Alarms eng',
    status: 'not-started',
    storybookHref: `${STORYBOOK_BASE}/?path=/docs/teams-alarms--docs`,
  },
  {
    productLine: 'Intercom',
    commandSurface: 'Call UI, directory search, door release buttons',
    migrationExample: 'Primary action button on call panel',
    legacyToNew: '--color-primary → --button/background/primary',
    designOwner: 'Intercom design',
    engOwner: 'Intercom eng',
    status: 'not-started',
    storybookHref: `${STORYBOOK_BASE}/?path=/docs/teams-intercom--docs`,
  },
  {
    productLine: 'Environmental Sensors',
    commandSurface: 'Sensor reading cards, threshold alerts, trend charts',
    migrationExample: 'Warning state on CO2 threshold breach',
    legacyToNew: '--color-warning → --support/warning',
    designOwner: 'Sensors design',
    engOwner: 'Sensors eng',
    status: 'not-started',
    storybookHref: `${STORYBOOK_BASE}/?path=/docs/teams-environmental-sensors--docs`,
  },
  {
    productLine: 'Guest / Workplace',
    commandSurface: 'Visitor check-in, badge printing, host notifications',
    migrationExample: 'Checkbox on visitor consent form',
    legacyToNew: '--checkbox-bg → --checkbox/default-background',
    designOwner: 'Guest design',
    engOwner: 'Guest eng',
    status: 'not-started',
    storybookHref: `${STORYBOOK_BASE}/?path=/docs/teams-guest-workplace--docs`,
  },
  {
    productLine: 'Maps',
    commandSurface: 'Site hierarchy, floor overlays, device pins',
    migrationExample: 'Surface background on map sidebar',
    legacyToNew: '--bg-canvas → --background/surface-01',
    designOwner: 'Maps design',
    engOwner: 'Maps eng',
    status: 'in-progress',
    storybookHref: `${STORYBOOK_BASE}/?path=/docs/teams-maps--docs`,
  },
  {
    productLine: 'Command Analytics',
    commandSurface: 'Dashboard charts, KPI cards, date range controls',
    migrationExample: 'Chart series palette + axis label colors',
    legacyToNew: '--vc-axis-label → --text/secondary',
    designOwner: 'Analytics design',
    engOwner: 'Command Analytics eng',
    status: 'in-progress',
    storybookHref: `${STORYBOOK_BASE}/?path=/docs/teams-command-analytics--docs`,
  },
]

export const QUICK_LINKS = [
  { label: "I'm designing in Figma", href: `${STORYBOOK_BASE}/?path=/docs/migrations-color-v2-figma-workflow--docs` },
  { label: "I'm migrating CSS in code", href: `${STORYBOOK_BASE}/?path=/docs/migrations-color-v2-getting-started--docs` },
  { label: 'I need the full token list', href: `${STORYBOOK_BASE}/?path=/docs/reference-semantic-tokens--docs` },
  { label: "I'm scoping for leadership", href: `${STORYBOOK_BASE}/?path=/docs/foundations-color-v2-whats-changing--docs` },
  { label: "I'm building something new", href: `${STORYBOOK_BASE}/?path=/docs/foundations-color-v2-greenfield-adoption--docs` },
  { label: 'VDS Figma source file', href: FIGMA_VDS },
]

export const REFERENCE_PATTERNS = [
  {
    title: 'Alert Button',
    badge: 'Deck slide 6',
    description:
      'Destructive actions across white and surface-01 backgrounds. Five states: default, hover, active, disabled, loading.',
    token: '--button/background/alert → #CB2939',
    href: `${STORYBOOK_BASE}/?path=/docs/migrations-color-v2-alert-button--docs`,
  },
  {
    title: 'Checkbox',
    badge: 'Deck slides 8–9',
    description: 'Default, selected, mixed, and alert paths. Full state matrix on surface-01.',
    token: '--checkbox/default-background → #536573',
    href: `${STORYBOOK_BASE}/?path=/docs/migrations-color-v2-checkbox--docs`,
  },
]
