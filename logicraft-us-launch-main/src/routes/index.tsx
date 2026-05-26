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
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Activity, title: "Transactional Systems", desc: "Transaction engines with ACID guarantees, high concurrency and data consistency under extreme pressure.", tags: ["Core Banking", "Payments", "Settlements"] },
  { icon: ShieldCheck, title: "High Availability", desc: "Distributed systems with automatic failover, active replication and guaranteed disaster recovery.", tags: ["Microservices", "Kubernetes", "Cloud"] },
  { icon: Plug, title: "Enterprise Integration", desc: "We connect legacy and modern ecosystems through robust APIs, message queues and ESB.", tags: ["REST APIs", "Kafka", "EDI"] },
  { icon: Gauge, title: "Real-Time Processing", desc: "Data pipelines and rules engines that process millions of events per second with sub-50ms latency.", tags: ["Streaming", "CEP", "Event Sourcing"] },
  { icon: Lock, title: "Security & Compliance", desc: "Security controls, complete audits, end-to-end encryption and international regulatory compliance.", tags: ["PCI-DSS", "ISO 27001", "SOC 2"] },
  { icon: LineChart, title: "Observability", desc: "Operational dashboards, intelligent alerts and real-time performance analysis for complete visibility.", tags: ["Grafana", "Prometheus", "ELK"] },
];

const reasons = [
  { n: "01", title: "Deep specialization", desc: "We are not generalists. Years solving the most complex transactional systems problems across the Americas." },
  { n: "02", title: "Focus on availability", desc: "Every architecture is designed assuming failures will occur. The difference is how the system responds." },
  { n: "03", title: "Custom development", desc: "No client is alike. We adapt each solution to your processes, tech stack and specific business goals." },
  { n: "04", title: "Partners, not vendors", desc: "We work alongside your team, transfer knowledge and leave you with your own capabilities." },
];

const stack = ["Java / Spring", "Node.js", "Python", "Go", "PostgreSQL", "Oracle DB", "Redis", "Apache Kafka", "Kubernetes", "Docker", "AWS · GCP", "Terraform", "Grafana", "Prometheus", "ElasticSearch", "RabbitMQ"];

const marquee = ["High Availability", "Transactional Security", "Scalability", "Operational Resilience", "Real Time", "Business Continuity"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logoDark} alt="Vertice Tech Group" className="h-9 w-9 rounded-md object-cover" />
            <span className="font-semibold tracking-tight text-sm sm:text-base">
              VERTICE TECH <span className="text-primary">GROUP</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#why" className="hover:text-foreground transition">Why us</a>
            <a href="#stack" className="hover:text-foreground transition">Stack</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
            Free analysis <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Software · Transactional · Enterprise · USA
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Technology that <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">powers</span> your business.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              We design and develop mission-critical platforms for US companies that cannot afford downtime — payments, logistics, complex transactional flows.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
                Free architecture analysis <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-card transition">
                View services
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">99.47%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Uptime</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Operations</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">&lt;50ms</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Latency</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-[image:var(--gradient-primary)] opacity-20 blur-3xl rounded-full" />
              <img src={logoDark} alt="Vertice Tech Group LLC logo" className="relative w-full max-w-md rounded-2xl shadow-[var(--shadow-card)] border border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-card/40 overflow-hidden">
        <div className="flex gap-12 py-4 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
          {[...marquee, ...marquee, ...marquee].map((t, i) => (
            <span key={i} className="text-sm uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-12">
              {t}<span className="text-primary">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Services</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Your way. <span className="text-muted-foreground">Our engineering.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mission-critical and transactional software solutions for companies that demand high performance, security and scalability in every operation.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                <div className="h-11 w-11 rounded-xl bg-[image:var(--gradient-primary)] flex items-center justify-center text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-24 border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Why Vertice Tech</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Built for <span className="text-muted-foreground">critical environments.</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {reasons.map((r) => (
              <div key={r.n} className="bg-background p-8 hover:bg-card transition">
                <div className="text-5xl font-bold text-primary/30">{r.n}</div>
                <h3 className="mt-4 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Technology</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Production-proven <span className="text-muted-foreground">stack.</span>
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span key={tech} className="px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium hover:border-primary hover:text-primary transition cursor-default">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-border bg-card p-10 sm:p-14 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              We develop with the AI that leads the industry
            </h3>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Every project is powered by the most advanced artificial intelligence platforms on the market.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
              {["GitHub Copilot", "Google Gemini", "OpenAI", "Anthropic"].map((p) => (
                <span key={p} className="px-5 py-2 rounded-lg bg-secondary text-secondary-foreground">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <img src={logoDark} alt="" className="mx-auto h-16 w-16 rounded-xl mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Is your system ready <br className="hidden sm:block" /> for what is coming?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Let's evaluate your platform's architecture together — at no cost.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
            Request free architecture analysis <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Contact</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Let's talk about <br /> <span className="text-muted-foreground">your project.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Tell us about your challenge. We respond in under 24 hours with an initial analysis proposal at no cost.
            </p>
            <div className="mt-10 space-y-4">
              <a href="mailto:projects@verticetechgroup.com" className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-medium">projects@verticetechgroup.com</div>
                </div>
              </a>
              <a href="#" className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition">
                <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-medium">Contact us now</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="font-medium">United States 🇺🇸</div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-border bg-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Name *</label>
                <input required className="mt-2 w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                <input className="mt-2 w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email *</label>
              <input required type="email" className="mt-2 w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Main need</label>
              <select className="mt-2 w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Transactional systems</option>
                <option>High availability</option>
                <option>Enterprise integration</option>
                <option>Real-time processing</option>
                <option>Security &amp; compliance</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Brief description</label>
              <textarea rows={4} className="mt-2 w-full rounded-lg bg-background border border-input px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition">
              Send message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoLight} alt="" className="h-10 w-10 rounded-lg bg-white p-1" />
            <div>
              <div className="font-semibold text-sm">VERTICE TECH GROUP LLC</div>
              <div className="text-xs text-muted-foreground">Mission-critical software · USA</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vertice Tech Group LLC. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
