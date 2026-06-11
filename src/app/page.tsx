const skills = [
  {
    title: "JWT",
    emoji: "🔐",
    description:
      "JSON Web Tokens for stateless authentication. Access tokens (short-lived) + refresh tokens (long-lived) — the modern auth stack with rotation and revocation built in.",
    tags: ["Auth", "Stateless", "OAuth 2.0"],
  },
  {
    title: "UUID",
    emoji: "🆔",
    description:
      "Universally unique identifiers for distributed systems. No more auto-increment IDs leaking data — every entity gets a collision-resistant, decentralized primary key.",
    tags: ["Distributed", "Security", "v4 / v7"],
  },
  {
    title: "Redis",
    emoji: "⚡",
    description:
      "In-memory data store for caching, session management, rate limiting, and pub/sub. Denormalize hot data into Redis so your DB never touches a JOIN on the read path.",
    tags: ["Caching", "Pub/Sub", "Session Store"],
  },
  {
    title: "Refresh Token",
    emoji: "🔄",
    description:
      "Long-lived credential that silently reissues short-lived access tokens after expiry. Paired with token rotation — old tokens are invalidated on use, enabling replay detection.",
    tags: ["Rotation", "Revocation", "Silent Refresh"],
  },
  {
    title: "Go Backend Architecture",
    emoji: "🏗️",
    description:
      "Handler → Service → Repository pattern with constructor injection. Implicit interface satisfaction — signatures must match exactly. No DI frameworks needed.",
    tags: ["Clean Architecture", "DI", "Interfaces"],
  },
  {
    title: "sqlx & PostgreSQL",
    emoji: "🗄️",
    description:
      "sqlx extends database/sql with Get(), Select(), NamedExec(). PostgreSQL placeholders use $1, $2 — not 1$, 2$. Sequences power SERIAL auto-increment. Always use RETURNING id to capture generated IDs.",
    tags: ["sqlx", "PostgreSQL", "Sequences"],
  },
  {
    title: "i18n & Validation",
    emoji: "🌐",
    description:
      "Multi-language APIs with go-i18n and YAML locale files (en/km/zh). Translation keys are case-sensitive — one letter off = silent failure. go-playground/validator with custom error translation per language.",
    tags: ["i18n", "Validation", "YAML"],
  },
  {
    title: "Error Handling Patterns",
    emoji: "🐛",
    description:
      "Always use comma-ok for type assertions (x, ok := y.(T)) — bare assertions panic on nil. Error wrapping with fmt.Errorf(\"context: %w\", err) preserves the full chain. := vs = — know when you're declaring vs assigning.",
    tags: ["Error Wrapping", "Type Safety", "Debugging"],
  },
  {
    title: "Data Structures & Algorithms",
    emoji: "🧩",
    description:
      "Core DSA fundamentals — arrays, linked lists, trees, hash tables, graphs, and complexity analysis. Building a reference vault in Obsidian as I learn.",
    tags: ["dsa", "learning"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      <main className="mx-auto max-w-3xl px-6 py-24">
        {/* Hero */}
        <section className="mb-20">
          <p className="text-sm font-medium tracking-widest text-zinc-400 uppercase mb-4">
            Full-Stack Developer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Vuth
          </h1>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I build backend systems with a focus on authentication, caching, and
            distributed design. Below are concepts I&rsquo;ve been deep-diving into
            recently.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-sm font-medium tracking-widest text-zinc-400 uppercase mb-8">
            Recently Learned
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{skill.emoji}</span>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800 pt-8 text-sm text-zinc-400">
          Built with Next.js &amp; Tailwind CSS
        </footer>
      </main>
    </div>
  );
}
