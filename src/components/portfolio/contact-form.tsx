import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { PROFILE } from "./data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .max(255, "Email is too long"),
  subject: z.string().trim().min(3, "Add a short subject").max(120, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a bit more (10+ characters)")
    .max(1500, "Message is too long"),
});

type Fields = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = schema.safeParse(values);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Fields;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields");
      return;
    }

    const { name, email, subject, message } = parsed.data;
    const body = `${message}\n\n—\n${name}\n${email}`;
    const href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    toast.success("Opening your email app with the message ready to send.");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="surface-card space-y-4 p-6 text-left sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            className={inputClass}
            placeholder="Your name"
            value={values.name}
            onChange={update("name")}
            maxLength={80}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            className={inputClass}
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={update("email")}
            maxLength={255}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <Field label="Subject" error={errors.subject}>
        <input
          className={inputClass}
          placeholder="What's this about?"
          value={values.subject}
          onChange={update("subject")}
          maxLength={120}
          aria-invalid={!!errors.subject}
        />
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          className={`${inputClass} min-h-36 resize-y`}
          placeholder="Tell me about the role, project or idea…"
          value={values.message}
          onChange={update("message")}
          maxLength={1500}
          aria-invalid={!!errors.message}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        <Send className="size-4" /> Send message
      </button>
      <p className="text-xs text-muted-foreground">
        This opens your email app with everything pre-filled — hit send and it lands in my inbox.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="block text-xs text-rose">{error}</span>}
    </label>
  );
}