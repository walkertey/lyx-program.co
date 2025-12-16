import Link from "next/link";
import Particles from "@/components/Particles";

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white">
      <Particles count={40} />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-fuchsia-500/18 blur-[140px]" />
        <div className="absolute top-10 left-10 h-[440px] w-[440px] rounded-full bg-violet-500/22 blur-[140px]" />
        <div className="absolute bottom-[-160px] right-[-160px] h-[560px] w-[560px] rounded-full bg-white/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(circle at 50% 35%, black 30%, transparent 72%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "100% 6px",
          }}
        />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-white/85 p-[1px] shadow-lg shadow-fuchsia-500/10 logo-3d">
            <div className="grid h-full w-full place-items-center rounded-2xl bg-[#070511] text-sm font-bold tracking-wider">
              LYX
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">LYX.Program.co</div>
            <div className="text-xs text-white/60">Owned by WalkerTey</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#services">
            Services
          </a>
          <a className="hover:text-white" href="#work">
            Work
          </a>
          <a className="hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </nav>

        <Link
          href="#contact"
          className="rounded-2xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
        >
          Start a Project
        </Link>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-10 pb-16 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white" />
              Future-ready development studio
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Make the{" "}
              <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-white bg-clip-text text-transparent">
                Impossible
              </span>{" "}
              Possible.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              We build software, applications, and systems that turn complex ideas into working reality.
            </p>

            <div className="mt-6 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5">
              <blockquote className="text-sm leading-relaxed text-white/85">
                “No one is born worthless; everyone has unique potential waiting to be realized.”
              </blockquote>
              <blockquote className="text-sm leading-relaxed text-white/85">
                “Believe in your own worth! Everyone has a vital role to play in the world.”
              </blockquote>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-white px-5 py-3 text-sm font-semibold text-[#070511] shadow-lg shadow-fuchsia-500/20 hover:opacity-95"
              >
                Start a Project
              </Link>
              <Link
                href="#work"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-4 text-xs text-white/50">
              LYX.Program.co • Owned by WalkerTey
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/26 via-fuchsia-500/18 to-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">System Console</div>
                <div className="text-xs text-white/55">v1.0</div>
              </div>

              <div className="mt-4 space-y-3 text-xs text-white/70">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white/90">Signals</div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[72%] bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white/90">Build Targets</div>
                  <ul className="mt-2 list-disc space-y-1 pl-4">
                    <li>Web Systems</li>
                    <li>Mobile Apps</li>
                    <li>Automation & Integrations</li>
                    <li>AI-Ready Architecture</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white/90">Status</div>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Ready to ship.
                  </div>
                </div>
              </div>

              <div className="mt-5 text-[11px] text-white/50">
                A hopeful future is built — one system at a time.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-xl font-semibold">Services</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Professional engineering with a clean delivery mindset: define, build, ship.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              t: "Web Development",
              d: "High-performance websites, dashboards, and scalable web systems.",
            },
            {
              t: "Application Development",
              d: "Practical, maintainable applications designed for real users.",
            },
            {
              t: "Automation & Integrations",
              d: "Payments, APIs, workflows, and custom logic that saves time.",
            },
            {
              t: "Future-Ready Architecture",
              d: "Built to scale, evolve, and adapt without constant rewrites.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-white/70">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-xl font-semibold">Work</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Selected builds. Replace these with your real projects anytime.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { t: "Booking & Payment Flow", d: "From intent to conversion, end-to-end." },
            { t: "Admin Dashboard", d: "Operations, visibility, and control." },
            { t: "Multilingual Website", d: "International-ready content and UX." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-white/70">{x.d}</div>
              <div className="mt-4 text-xs text-white/50">Case study coming soon</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-xl font-semibold">About</h2>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm leading-relaxed text-white/75">
            LYX.Program.co is a development-driven studio focused on execution.
            We design and engineer real products — not demos, not concepts.
            From websites to applications, from automation to scalable systems,
            we build solutions meant to last.
          </p>
          <div className="mt-4 text-sm font-semibold">Owned & built by WalkerTey.</div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-14 pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            Let’s turn your idea into a system that actually works.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="text-sm font-semibold">Email</div>
              <p className="mt-2 text-sm text-white/70">Replace with your real email:</p>
              <div className="mt-3 rounded-2xl bg-white/10 px-4 py-3 text-sm">
                hello@lyx.program.co
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="text-sm font-semibold">Start a Project</div>
              <p className="mt-2 text-sm text-white/70">
                Tell us what you want to build — we’ll respond with a clear plan.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-white px-5 py-3 text-sm font-semibold text-[#070511] hover:opacity-95"
              >
                Send Project Brief
              </Link>
              <div className="mt-2 text-xs text-white/50">
                (Next step: connect this button to your form/email.)
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} LYX.Program.co • Owned by WalkerTey
        </footer>
      </section>
    </main>
  );
}
