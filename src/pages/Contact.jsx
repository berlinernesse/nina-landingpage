import { useState } from "react";
import { ExternalLink, Mail, MessageSquare, Store } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" }); // website = honeypot
  const [sent, setSent] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // simple client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    // TODO: hook this to Formspree/EmailJS/your API later.
    setSent(true);
    setForm({ name: "", email: "", message: "", website: "" });
  }

  return (
    <section className="container mx-auto px-6 py-12 text-gray-100">
      <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
      <p className="mt-2 text-gray-300 max-w-2xl">
        Send a message or reach her on Reddit and Etsy.
      </p>

      {/* External platforms */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href="https://www.reddit.com/user/BellisimaDemonDoll/"
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">Reddit</div>
              <p className="text-sm text-gray-300 mt-1">DM via Reddit profile</p>
            </div>
            <ExternalLink className="opacity-70 group-hover:opacity-100" size={18} />
          </div>
        </a>

        <a
          href="https://www.etsy.com/ca/shop/TinkerhellsSpells?" 
          target="_blank"
          rel="noreferrer"
          className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold flex items-center gap-2">
                <Store size={18} /> Etsy
              </div>
              <p className="text-sm text-gray-300 mt-1">Shop & custom requests</p>
            </div>
            <ExternalLink className="opacity-70 group-hover:opacity-100" size={18} />
          </div>
        </a>
      </div>

      {/* Contact form */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Mail size={18} /> Send a message
        </h2>

        {sent && (
          <div
            className="mt-4 rounded-xl border border-white/10 bg-emerald-500/15 p-3 text-emerald-200"
            role="status"
            aria-live="polite"
          >
            Thanks! Your message was captured (demo). Wire this to your backend/Formspree when ready.
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-4 grid gap-4">
          {/* honeypot (spam bots only) */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={onChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900/60 px-4 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900/60 px-4 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-300">
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-white/15 bg-zinc-900/60 px-4 py-2 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
                placeholder="How can we help?"
              />
              <MessageSquare
                size={16}
                className="pointer-events-none absolute right-3 top-3 opacity-50"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">Don't be afraid to contact me!</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-black hover:opacity-90"
            >
              <Mail size={16} />
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
