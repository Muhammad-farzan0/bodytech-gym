"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  phone?: string;
  goal: string;
  message: string;
};

// Replace these with your own EmailJS credentials — see
// https://www.emailjs.com/docs/sdk/installation/
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(data: FormValues) {
    setStatus("sending");
    try {
      if (EMAILJS_SERVICE_ID.startsWith("YOUR_")) {
        // EmailJS not configured yet — simulate success so the form is
        // still demoable. Swap in real IDs above to send real emails.
        await new Promise((r) => setTimeout(r, 700));
      } else {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { ...data },
          { publicKey: EMAILJS_PUBLIC_KEY }
        );
      }
      setStatus("sent");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="panel space-y-5 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="eyebrow mb-2 block">Name</label>
          <input
            {...register("name", { required: "Your name is required" })}
            className="w-full rounded-sm border border-line bg-canvas px-4 py-3 text-sm text-paper outline-none focus:border-coral"
            placeholder="Ayesha Khan"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-coral">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="eyebrow mb-2 block">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
            })}
            className="w-full rounded-sm border border-line bg-canvas px-4 py-3 text-sm text-paper outline-none focus:border-coral"
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-coral">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="eyebrow mb-2 block">Phone (optional)</label>
          <input
            {...register("phone")}
            className="w-full rounded-sm border border-line bg-canvas px-4 py-3 text-sm text-paper outline-none focus:border-coral"
            placeholder="+92 300 1234567"
          />
        </div>
        <div>
          <label className="eyebrow mb-2 block">Goal</label>
          <select
            {...register("goal", { required: true })}
            className="w-full rounded-sm border border-line bg-canvas px-4 py-3 text-sm text-paper outline-none focus:border-coral"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option>General fitness</option>
            <option>Weight loss</option>
            <option>Taekwondo classes</option>
            <option>Pilates / Yoga</option>
            <option>Personal training</option>
          </select>
        </div>
      </div>

      <div>
        <label className="eyebrow mb-2 block">Message</label>
        <textarea
          rows={4}
          {...register("message", { required: "Tell us a bit about your goals" })}
          className="w-full rounded-sm border border-line bg-canvas px-4 py-3 text-sm text-paper outline-none focus:border-coral"
          placeholder="I'd like to know more about..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-coral">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center disabled:opacity-60"
      >
        {status === "sending" && <Loader2 className="animate-spin" size={16} />}
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="flex items-center gap-2 text-sm text-emerald-500">
          <CheckCircle2 size={16} /> Message sent — a coach will reach out
          within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-coral">
          <AlertTriangle size={16} /> Something went wrong. Try again or email
          us directly.
        </p>
      )}
    </form>
  );
}