import { createFileRoute } from "@tanstack/react-router";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import {
  Activity,
  ShieldCheck,
  Plug,
  Gauge,
  Lock,
  LineChart,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Minus,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Activity, title: "Transactional Systems", desc: "Transaction engines with ACID guarantees, high concurrency and data consistency under extreme pressure." },
  { icon: ShieldCheck, title: "High Availability", desc: "Distributed architectures with automatic failover, active replication and guaranteed disaster recovery." },
  { icon: Plug, title: "Enterprise Integration", desc: "We connect legacy and modern ecosystems through robust APIs, message queues and service buses." },
  { icon: Gauge, title: "Real-Time Processing", desc: "Data pipelines and rules engines that process millions of events per second with sub-50ms latency." },
  { icon: Lock, title: "Security & Compliance", desc: "Security controls, complete audits, end-to-end encryption and international regulatory compliance." },
  { icon: LineChart, title: "Observability", desc: "Operational dashboards, intelligent alerts and real-time performance analysis for complete visibility." },
];

const principles = [
  { n: "01", title: "Deep specialization", desc: "Years solving the most complex transactional systems problems across the Americas." },
  { n: "02", title: "Built for resilience", desc: "Every architecture is designed assuming failures will occur. The difference is how the system responds." },
  { n: "03", title: "Tailored engineering", desc: "We adapt each solution to your processes, technology stack and specific business outcomes." },
  { n: "04", title: "Partners, not vendors", desc: "We work alongside your team, transfer knowledge and leave you with your own capabilities." },
];

const stack = ["Java · Spring", "Node.js", "Python", "Go", "PostgreSQL", "Oracle DB", "Apache Kafka", "Kubernetes", "AWS", "GCP", "Terraform", "Grafana"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <nav className="mx-auto max-w-6xl px-6 lg:px-10 h-20 flex items-center justify-between">
            <a href="/#top" className="flex items-center gap-3">
            <img src={logoDark} alt="Vertice Tech Group" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="text-[11px] tracking-[0.32em] text-muted-foreground">VERTICE</div>
              <div className="text-sm font-semibold tracking-[0.18em]">TECH GROUP</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-10 text-[13px] text-muted-foreground">
            <a href="/#capabilities" className="hover:text-foreground transition">Capabilities</a>
            <a href="/#approach" className="hover:text-foreground transition">Approach</a>
            <a href="/#expertise" className="hover:text-foreground transition">Expertise</a>
            <a href="/#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a href="/#contact" className="hidden sm:inline-flex items-center gap-2 border-b border-foreground pb-1 text-[13px] font-medium hover:gap-3 transition-all">
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-40 pb-28 border-b border-border">
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:64px_64px] pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.32em] text-muted-foreground">
            <Minus className="h-3 w-8 text-accent" />
            EST. UNITED STATES · MISSION-CRITICAL SOFTWARE
          </div>
          <h1 className="font-serif mt-10 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-5xl">
            Engineering the systems<br />
            <span className="italic text-accent">that cannot fail.</span>
          </h1>
          <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
            <p className="lg:col-span-6 lg:col-start-7 text-lg leading-relaxed text-muted-foreground">
              Vertice Tech Group designs and builds transactional, high-availability platforms for institutions that operate at the edge of complexity — payments, logistics, and the intricate flows that move modern enterprises.
            </p>
          </div>
          <div className="mt-14 flex flex-wrap gap-4">
            <a href="/#contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-[13px] tracking-wider uppercase font-medium hover:bg-primary/90 transition">
              Request architecture review <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/#capabilities" className="inline-flex items-center gap-3 border border-border px-7 py-4 text-[13px] tracking-wider uppercase font-medium hover:border-foreground transition">
              Explore capabilities
            </a>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {[
              { v: "99.47%", l: "Platform uptime" },
              { v: "24 / 7", l: "Operations" },
              { v: "< 50 ms", l: "Transaction latency" },
              { v: "100%", l: "US-incorporated" },
            ].map((s) => (
              <div key={s.l} className="bg-background p-8">
                <div className="font-serif text-4xl text-foreground">{s.v}</div>
                <div className="mt-3 text-[11px] tracking-[0.24em] uppercase text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="py-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] tracking-[0.32em] text-muted-foreground flex items-center gap-3">
              <Minus className="h-3 w-8 text-accent" /> 01 · FIRM
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
              A small firm of senior engineers, focused on the systems where downtime is measured in lost trust — not just lost revenue.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
              We partner with financial institutions, payment processors and enterprises operating at scale. Our practice is intentionally narrow: transactional platforms, real-time integration and the disciplined craft required to keep them running.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="text-[11px] tracking-[0.32em] text-muted-foreground flex items-center gap-3">
                <Minus className="h-3 w-8 text-accent" /> 02 · CAPABILITIES
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05]">
                Six disciplines, <span className="italic">one practice.</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {services.map((s, i) => (
              <div key={s.title} className="group relative border-r border-b border-border p-10 bg-background hover:bg-secondary/40 transition">
                <div className="text-[11px] tracking-[0.32em] text-muted-foreground">0{i + 1}</div>
                <s.icon className="mt-8 h-6 w-6 text-accent" strokeWidth={1.25} />
                <h3 className="font-serif mt-6 text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="py-28 border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="text-[11px] tracking-[0.32em] text-muted-foreground flex items-center gap-3">
                <Minus className="h-3 w-8 text-accent" /> 03 · APPROACH
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05]">
                The principles that <span className="italic">guide every engagement.</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {principles.map((r) => (
              <div key={r.n} className="bg-background p-10">
                <div className="flex items-baseline gap-4">
                  <div className="font-serif text-2xl text-accent">{r.n}</div>
                  <h3 className="font-serif text-2xl tracking-tight">{r.title}</h3>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE / STACK */}
      <section id="expertise" className="py-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-[11px] tracking-[0.32em] text-muted-foreground flex items-center gap-3">
                <Minus className="h-3 w-8 text-accent" /> 04 · EXPERTISE
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.05]">
                A production-proven <span className="italic">technology stack.</span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-xl">
                Selected for reliability, observability and long-term maintainability — not novelty.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-border">
            {stack.map((tech) => (
              <div key={tech} className="border-r border-b border-border px-6 py-6 text-sm font-medium tracking-wide hover:bg-secondary/60 transition">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DARK */}
      <section className="py-32 bg-[color:var(--navy-deep)] text-[color:var(--primary-foreground)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <div className="text-[11px] tracking-[0.32em] opacity-60 flex items-center justify-center gap-3">
            <Minus className="h-3 w-8 text-accent" /> A CONVERSATION TO BEGIN
          </div>
          <h2 className="font-serif mt-10 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Is your platform ready<br />
            <span className="italic text-accent">for what is coming?</span>
          </h2>
          <p className="mt-8 text-lg opacity-75 max-w-xl mx-auto">
            We offer a complimentary architecture review for institutions evaluating the resilience of their mission-critical systems.
          </p>
          <a href="/#contact" className="mt-12 inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-[13px] tracking-wider uppercase font-medium hover:bg-accent hover:text-accent-foreground transition">
            Request the review <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.32em] text-muted-foreground flex items-center gap-3">
              <Minus className="h-3 w-8 text-accent" /> 05 · CONTACT
            </div>
            <h2 className="font-serif mt-8 text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              Tell us about <span className="italic">your system.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              We respond within one business day with a brief analysis and a proposal for a discovery call — at no cost.
            </p>
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <Mail className="h-5 w-5 text-accent mt-1" strokeWidth={1.25} />
                <div>
                  <div className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Email</div>
                  <div className="mt-1 font-medium">projects@verticetechgroup.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <Phone className="h-5 w-5 text-accent mt-1" strokeWidth={1.25} />
                <div>
                  <div className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Direct line</div>
                  <div className="mt-1 font-medium">By appointment</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-accent mt-1" strokeWidth={1.25} />
                <div>
                  <div className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Office</div>
                  <div className="mt-1 font-medium">United States</div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-7 bg-secondary/40 border border-border p-10 space-y-7">
            <div className="grid sm:grid-cols-2 gap-7">
              <div>
                <label className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Full name *</label>
                <input required className="mt-3 w-full bg-transparent border-0 border-b border-border focus:border-foreground py-2 text-sm focus:outline-none transition" />
              </div>
              <div>
                <label className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Company</label>
                <input className="mt-3 w-full bg-transparent border-0 border-b border-border focus:border-foreground py-2 text-sm focus:outline-none transition" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-7">
              <div>
                <label className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Email *</label>
                <input required type="email" className="mt-3 w-full bg-transparent border-0 border-b border-border focus:border-foreground py-2 text-sm focus:outline-none transition" />
              </div>
              <div>
                <label className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Phone</label>
                <input className="mt-3 w-full bg-transparent border-0 border-b border-border focus:border-foreground py-2 text-sm focus:outline-none transition" />
              </div>
            </div>
            <div>
              <label className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Area of interest</label>
              <select className="mt-3 w-full bg-transparent border-0 border-b border-border focus:border-foreground py-2 text-sm focus:outline-none transition">
                <option>Transactional systems</option>
                <option>High availability architecture</option>
                <option>Enterprise integration</option>
                <option>Real-time processing</option>
                <option>Security &amp; compliance</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] tracking-[0.24em] uppercase text-muted-foreground">Brief description</label>
              <textarea rows={4} className="mt-3 w-full bg-transparent border-0 border-b border-border focus:border-foreground py-2 text-sm focus:outline-none transition resize-none" />
            </div>
            <button type="submit" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-[13px] tracking-wider uppercase font-medium hover:bg-primary/90 transition">
              Send inquiry <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--navy-deep)] text-[color:var(--primary-foreground)]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16">
          <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <img src={logoLight} alt="" className="h-12 w-12 object-contain" />
                <div className="leading-tight">
                  <div className="text-[11px] tracking-[0.32em] opacity-60">VERTICE</div>
                  <div className="text-sm font-semibold tracking-[0.18em]">TECH GROUP LLC</div>
                </div>
              </div>
              <p className="mt-6 text-sm opacity-70 max-w-sm leading-relaxed">
                Mission-critical software engineering for institutions that operate where downtime is not an option.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="text-[11px] tracking-[0.24em] uppercase opacity-60">Practice</div>
              <ul className="mt-5 space-y-3 text-sm">
                <li><a href="/#capabilities" className="opacity-80 hover:opacity-100">Capabilities</a></li>
                <li><a href="/#approach" className="opacity-80 hover:opacity-100">Approach</a></li>
                <li><a href="/#expertise" className="opacity-80 hover:opacity-100">Expertise</a></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <div className="text-[11px] tracking-[0.24em] uppercase opacity-60">Office</div>
              <ul className="mt-5 space-y-3 text-sm opacity-80">
                <li>United States</li>
                <li>projects@verticetechgroup.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] tracking-[0.24em] uppercase opacity-60">
            <div>© {new Date().getFullYear()} Vertice Tech Group LLC</div>
            <div>All rights reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}