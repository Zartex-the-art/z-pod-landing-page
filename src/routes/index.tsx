import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/WaitlistForm";
import zpodDevice from "@/assets/zpod-device.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "zpod — Private AI That Remembers You" },
      { name: "description", content: "zpod is a private AI device that remembers your context, works offline, and stays with you across all your devices." },
    ],
  }),
});

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
};

const features = [
  { title: "Persistent Memory", desc: "Your AI accumulates context over time — never starts from scratch." },
  { title: "Offline AI", desc: "Works without internet. Your intelligence travels with you." },
  { title: "Private by Default", desc: "Everything stays on your device. No cloud. No compromise." },
  { title: "Cross-Device", desc: "Seamlessly syncs context across all your devices, securely." },
];

const useCases = [
  { title: "Students", desc: "Build a knowledge companion that grows with your studies." },
  { title: "Developers", desc: "An AI that understands your codebase, stack, and patterns." },
  { title: "Personal Knowledge", desc: "Capture and connect ideas without losing context." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">zpod</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">by Zartex</span>
          </div>
          <a href="#waitlist" className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow/5 blur-[120px]" />
        </div>
        <div className="relative text-center max-w-3xl animate-[fadeInUp_0.8s_ease-out_both]">
          <div className="mb-10 flex justify-center">
            <img
              src={zpodDevice}
              alt="zpod device — a compact AI hub"
              width={280}
              height={280}
              className="drop-shadow-[0_20px_60px_rgba(100,160,255,0.15)]"
            />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]">
            Stop repeating yourself to AI
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            zpod is a private AI that remembers your context, works offline, and stays with you across all your devices.
          </p>
          <div className="mt-10" id="waitlist">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-32 px-6">
        <motion.div className="max-w-3xl mx-auto text-center" {...fade}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            AI today has no memory
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Every conversation starts from zero. You repeat your preferences, re-explain your projects, 
            and lose context the moment you close a tab. Current AI depends on the cloud, exposes your data, 
            and forgets everything about you.
          </p>
        </motion.div>
      </section>

      {/* Solution */}
      <section className="py-32 px-6 bg-surface/50">
        <motion.div className="max-w-3xl mx-auto text-center" {...fade}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">The Solution</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            AI that truly knows you
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            zpod provides continuous memory that persists across sessions, complete privacy with on-device processing, 
            and offline intelligence that doesn't depend on the cloud. Your AI companion, always up to speed.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-32 px-6">
        <motion.div className="max-w-5xl mx-auto" {...fade}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
            Built for the future of AI
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-6 bg-surface/50">
        <motion.div className="max-w-5xl mx-auto" {...fade}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">Use Cases</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16">
            For everyone who thinks
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <motion.div
                key={u.title}
                className="p-8 rounded-2xl border border-border/50 bg-card/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold tracking-tight">{u.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <motion.div className="max-w-2xl mx-auto text-center" {...fade}>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Your AI should know you
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Join the waitlist and be among the first to experience zpod.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight">zpod</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">by Zartex</span>
          </div>
          <span className="text-xs text-muted-foreground">© 2026 Zartex. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
