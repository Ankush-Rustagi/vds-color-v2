import {
  DOCS_HUB_BASE,
  PHASES,
  PRODUCT_TEAMS,
  QUICK_LINKS,
  REFERENCE_PATTERNS,
  STORYBOOK_BASE,
  WHO_DOES_WHAT,
  type PhaseStatus,
  type TeamStatus,
} from './data'

function phaseLabel(status: PhaseStatus) {
  if (status === 'done') return 'Done'
  if (status === 'active') return 'Now'
  if (status === 'next') return 'Next'
  return 'Later'
}

function phaseClass(status: PhaseStatus) {
  if (status === 'done') return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
  if (status === 'active') return 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300 ring-2 ring-sky-500'
  if (status === 'next') return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
  return 'bg-[var(--card)] text-[var(--muted)]'
}

function teamStatusClass(status: TeamStatus) {
  if (status === 'example-ready') return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
  if (status === 'in-progress') return 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300'
  return 'bg-[var(--card)] text-[var(--muted)]'
}

function teamStatusLabel(status: TeamStatus) {
  if (status === 'example-ready') return 'Example ready'
  if (status === 'in-progress') return 'In progress'
  return 'Not started'
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Verkada Design System</p>
            <h1 className="text-xl font-semibold">Color System v2</h1>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href={STORYBOOK_BASE}
              className="rounded-md bg-[var(--accent)] px-3 py-1.5 font-medium text-white no-underline hover:opacity-90"
            >
              Open Migration Storybook
            </a>
            <a href={DOCS_HUB_BASE} className="rounded-md border border-[var(--border)] px-3 py-1.5 no-underline">
              Strategy hub
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 space-y-12">
        <section className="space-y-4">
          <p className="text-lg font-medium leading-relaxed">
            We are replacing one-off dark mode colors with shared semantic tokens. Every product line migrates its
            Command surfaces to the same token names. Some UI will look slightly different. That is expected.
          </p>
          <p className="text-[var(--muted)]">
            Old: each component had its own hex values and dark mode overrides. New: components bind to tokens like{' '}
            <code>--button/background/alert</code> — one name, light and dark values defined centrally in Figma.
          </p>
        </section>

        <section className="rounded-lg border border-[var(--warning-border)] bg-[var(--warning-bg)] p-4">
          <h2 className="font-semibold">What everyone should expect</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            This is not a silent rename. Alert red shifts to #CB2939. Disabled grays unify to #B0B6BE. Dark mode pairs
            are still in testing. Teams should migrate surface by surface and report regressions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Where we are in the rollout</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((p) => (
              <div
                key={p.label}
                className={`rounded-lg border border-[var(--border)] p-4 ${p.status === 'active' ? 'ring-2 ring-[var(--accent)]' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{p.label}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${phaseClass(p.status)}`}>
                    {phaseLabel(p.status)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.detail}</p>
                <p className="mt-2 text-xs text-[var(--muted)]">Owner: {p.owner}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Who does what</h2>
          <p className="text-sm text-[var(--muted)]">
            Pick your row. Follow the Storybook link for step-by-step detail.
          </p>
          <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-[var(--border)] bg-[var(--card)]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Your responsibility</th>
                  <th className="px-4 py-3 font-semibold">First action</th>
                  <th className="px-4 py-3 font-semibold">Go to</th>
                </tr>
              </thead>
              <tbody>
                {WHO_DOES_WHAT.map((row) => (
                  <tr key={row.role} className="border-b border-[var(--border)] last:border-0">
                    <td className="px-4 py-3 font-medium">{row.role}</td>
                    <td className="px-4 py-3 text-[var(--muted)]">{row.responsibility}</td>
                    <td className="px-4 py-3 text-[var(--muted)]">{row.action}</td>
                    <td className="px-4 py-3">
                      <a href={row.href}>Storybook →</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Team migrations by product line</h2>
          <p className="text-[var(--muted)]">
            Each major product line gets a concrete migration example in Storybook. Teams do not define their own colors.
            They adopt the central spec.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUCT_TEAMS.map((team) => (
              <article key={team.productLine} className="rounded-lg border border-[var(--border)] p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold">{team.productLine}</h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${teamStatusClass(team.status)}`}
                  >
                    {teamStatusLabel(team.status)}
                  </span>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Command surface</p>
                <p className="text-sm">{team.commandSurface}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Example migration</p>
                <p className="text-sm">{team.migrationExample}</p>
                <p className="mt-2">
                  <code>{team.legacyToNew}</code>
                </p>
                <p className="mt-3 text-xs text-[var(--muted)]">
                  Design: {team.designOwner} · Eng: {team.engOwner}
                </p>
                <a href={team.storybookHref} className="mt-3 inline-block text-sm font-semibold">
                  Team Storybook example →
                </a>
              </article>
            ))}
          </div>
          <p className="text-xs text-[var(--muted)]">
            Viewing Station follows Video Security patterns. Command Platform (shared nav, settings) migrates with Web
            Platform — see Storybook Foundations for cross-cutting surfaces.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Shared reference patterns (all teams start here)</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {REFERENCE_PATTERNS.map((pat) => (
              <article key={pat.title} className="rounded-lg border border-[var(--border)] p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{pat.title}</h3>
                  <span className="rounded-full bg-[var(--info-bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--accent)]">
                    {pat.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{pat.description}</p>
                <p className="mt-2">
                  <code>{pat.token}</code>
                </p>
                <a href={pat.href} className="mt-3 inline-block text-sm font-semibold">
                  Before/after in Storybook →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Quick links</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg border border-[var(--border)] p-3 text-sm font-medium no-underline hover:bg-[var(--card)]"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[var(--info-border)] bg-[var(--info-bg)] p-4">
          <h2 className="font-semibold">Two URLs, one rollout</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            This page is the strategy hub (why, who, which team, what phase). Storybook is the implementation hub (how,
            before/after, token reference).
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              Strategy hub:{' '}
              <a href={DOCS_HUB_BASE}>{DOCS_HUB_BASE}</a>
            </li>
            <li>
              Migration Storybook:{' '}
              <a href={STORYBOOK_BASE}>{STORYBOOK_BASE}</a>
            </li>
          </ul>
        </section>

        <footer className="border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
          Source: VDS Figma Color Updates 1–10 + Collection · May 2026 ·{' '}
          <a href="https://ankush-rustagi.github.io/">Portfolio hub</a>
        </footer>
      </main>
    </div>
  )
}
