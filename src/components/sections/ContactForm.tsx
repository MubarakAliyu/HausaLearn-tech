"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Check, Loader, AlertTriangle } from "react-feather";
import { useT } from "@/i18n/LanguageProvider";
import { mailto } from "@/data/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RECIPIENT = "saratubsalihu@gmail.com";
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};
const emailjsReady = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey,
);

export function ContactForm() {
  const t = useT();
  const f = t.contact.form;
  const reduced = useReducedMotion();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!name.trim()) next.name = f.errorRequired;
    if (!email.trim()) next.email = f.errorRequired;
    else if (!EMAIL_RE.test(email)) next.email = f.errorEmail;
    if (!message.trim()) next.message = f.errorRequired;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const emailBody = () =>
    `Name: ${name}\nEmail: ${email}\n\n${message}`;

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // If EmailJS isn't configured yet, fall back to the user's mail client
    // (still addressed to the recipient) so the form always delivers.
    if (!emailjsReady) {
      setStatus("sending");
      window.location.href = mailto(
        `HausaLearn Tech — message from ${name}`,
        emailBody(),
      );
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.serviceId as string,
        EMAILJS.templateId as string,
        {
          from_name: name,
          from_email: email,
          message,
          to_email: RECIPIENT,
          reply_to: email,
        },
        { publicKey: EMAILJS.publicKey as string },
      );
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Field
        id="contact-name"
        label={f.name}
        placeholder={f.namePlaceholder}
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Field
        id="contact-email"
        label={f.email}
        placeholder={f.emailPlaceholder}
        type="email"
        value={email}
        onChange={setEmail}
        error={errors.email}
      />
      <Field
        id="contact-message"
        label={f.message}
        placeholder={f.messagePlaceholder}
        value={message}
        onChange={setMessage}
        error={errors.message}
        textarea
      />

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={reduced || status === "sending" ? undefined : { scale: 1.02 }}
        whileTap={reduced || status === "sending" ? undefined : { scale: 0.98 }}
        className={cn(
          "rounded-md inline-flex h-12 items-center justify-center gap-2 px-6 font-[family-name:var(--font-heading)] font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] disabled:cursor-wait",
          status === "sent"
            ? "bg-kore-600"
            : status === "error"
              ? "bg-kore-700"
              : "bg-brand-gradient-strong",
        )}
      >
        {/* Keyed remount (no exit-wait) so the label swap can never stall. */}
        <motion.span
          key={status}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-2"
        >
          {status === "idle" && (
            <>
              <Send size={18} /> {f.send}
            </>
          )}
          {status === "sending" && (
            <>
              <Loader size={18} className="animate-spin" /> {f.sending}
            </>
          )}
          {status === "sent" && (
            <>
              <Check size={18} /> {f.sent}
            </>
          )}
          {status === "error" && (
            <>
              <AlertTriangle size={18} /> {f.send}
            </>
          )}
        </motion.span>
      </motion.button>

      {status === "error" && (
        <p className="text-kore-700 dark:text-kore -mt-2 text-center text-sm font-medium">
          {f.error}
        </p>
      )}

      <a
        href={mailto(`HausaLearn Tech — message from ${name || ""}`, emailBody())}
        className="text-slate hover:text-shudi text-center text-sm font-medium underline-offset-2 hover:underline"
      >
        {f.mailtoFallback}
      </a>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
}: FieldProps) {
  const shared = cn(
    "peer bg-surface text-ink placeholder:text-transparent rounded-md w-full border px-4 pt-5 pb-2 outline-none transition-colors",
    "focus:border-kore focus:ring-2 focus:ring-kore/20",
    error ? "border-kore-700" : "border-line",
  );
  const labelCls = cn(
    "pointer-events-none absolute left-4 top-3.5 text-slate transition-all",
    "peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-kore",
    "peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs",
  );

  return (
    <div>
      <div className="relative">
        {textarea ? (
          <textarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={4}
            className={cn(shared, "resize-none")}
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={shared}
          />
        )}
        <label htmlFor={id} className={labelCls}>
          {label}
        </label>
      </div>
      <FieldError>{error}</FieldError>
    </div>
  );
}

function FieldError({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      {children && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="text-kore-700 dark:text-kore mt-1.5 text-xs font-medium"
        >
          {children}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
