"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { site } from "@/content/site";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // honeypot, a real visitor never sees or fills this field, a bot filling forms blindly usually does
    if (data.get("company")) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("fill in your name, email, and a message first");
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      setError("that email doesn't look right");
      return;
    }

    // no web3forms key set yet, fall back to opening the visitor's own email client
    if (!site.contact.formAccessKey) {
      const body = `${message}\n\nfrom ${name} (${email})`;
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        subject || "portfolio contact",
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: site.contact.formAccessKey,
          name,
          email,
          subject,
          message,
        }),
      });
      const result = (await response.json()) as { success: boolean };
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError("something went wrong sending that, try emailing directly");
      }
    } catch {
      setStatus("error");
      setError("something went wrong sending that, try emailing directly");
    }
  }

  return (
    <section
      id="contact"
      className="bg-contrast/90 border-border flex min-h-screen scroll-mt-20 flex-col border-t px-6 py-24 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[860px] flex-1 flex-col justify-center gap-10">
        <div>
          <SectionHeading label="Contact">Let&apos;s talk</SectionHeading>
          <p className="text-muted mt-5 text-lg">
            Reach out if you want to work together or just talk shop.
          </p>
        </div>

        {/* noValidate turns off the browser's own error popups, handleSubmit checks everything instead so every error looks the same */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          {/* honeypot field, hidden from real visitors with css */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              placeholder="Name"
              required
              className="border-border bg-surface text-text focus:ring-accent rounded-md border px-5 py-4 text-base focus:ring-2 focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="border-border bg-surface text-text focus:ring-accent rounded-md border px-5 py-4 text-base focus:ring-2 focus:outline-none"
            />
          </div>

          <input
            name="subject"
            placeholder="Subject"
            className="border-border bg-surface text-text focus:ring-accent rounded-md border px-5 py-4 text-base focus:ring-2 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            className="border-border bg-surface text-text focus:ring-accent rounded-md border px-5 py-4 text-base focus:ring-2 focus:outline-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-accent text-contrast w-fit rounded-md px-7 py-4 text-base font-medium shadow-[0_0_24px_rgba(216,178,122,0.22)] disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>

          {status === "success" && (
            <p className="text-accent text-base">
              Thanks, that&apos;s on its way.
            </p>
          )}
          {status === "error" && (
            <p className="text-accent text-base">{error}</p>
          )}
        </form>

        <div className="border-border text-muted flex flex-col gap-3 border-t pt-8 text-base sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${site.contact.email}`}
            className="text-text hover:text-accent"
          >
            {site.contact.email}
          </a>
          <p>{site.location}</p>
          <div className="flex items-center gap-4">
            <a
              href={site.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent"
            >
              <GithubIcon />
            </a>
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
