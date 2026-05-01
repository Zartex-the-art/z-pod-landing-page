import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setStatus("loading");
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz1LF31GOP6nvzUJFiqapb6PjEw8BKW4bDuesgQCbU2CEuwlKaaALHBsu016XeTbuoYiA/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
          mode: "no-cors",
        }
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-foreground/80 text-sm tracking-wide"
          >
            You're in. We'll keep you updated.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 rounded-xl border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-muted-foreground/30 transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-12 px-6 rounded-xl bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === "error" && (
        <p className="text-center text-destructive text-xs mt-2">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
