import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface Contact2Props {
  title?: React.ReactNode;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  sending?: boolean;
  className?: string;
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
  sidebar,
  header,
  onSubmit,
  sending = false,
  className,
}: Contact2Props) => {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto w-full max-w-6xl px-4">
        {header ? <div className="mb-10 text-center">{header}</div> : null}

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <div className="flex w-full min-w-0 flex-col gap-6">
            <div className="text-center lg:text-left">
              <h1 className="mb-3 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:mb-4">
                {title}
              </h1>
              <p className="text-base leading-7 text-white/62">{description}</p>
            </div>

            {sidebar ? (
              <div className="w-full min-w-0">{sidebar}</div>
            ) : (
              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 text-center text-xl font-semibold text-white lg:text-left">
                  Contact Details
                </h3>
                <ul className="ml-4 list-disc space-y-2 text-white/72">
                  <li>
                    <span className="font-bold text-white">Phone: </span>
                    {phone}
                  </li>
                  <li>
                    <span className="font-bold text-white">Email: </span>
                    <a href={`mailto:${email}`} className="text-[#b9abff] underline-offset-4 hover:underline">
                      {email}
                    </a>
                  </li>
                  <li>
                    <span className="font-bold text-white">Web: </span>
                    <a
                      href={web.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#b9abff] underline-offset-4 hover:underline"
                    >
                      {web.label}
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex w-full min-w-0">
            <form
              onSubmit={onSubmit}
              className="flex w-full min-w-0 flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-5 pb-4 pt-5 shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:h-full md:px-6 md:pb-5 md:pt-6"
            >
            <div className="flex flex-1 flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="contact-name" className="text-white/72">
                  Name
                </Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Jane Doe"
                  className="border-white/10 bg-black/25 text-white placeholder:text-white/35 focus-visible:ring-[#9b87f5]"
                />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="contact-email" className="text-white/72">
                  Email
                </Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={255}
                  placeholder="you@company.com"
                  className="border-white/10 bg-black/25 text-white placeholder:text-white/35 focus-visible:ring-[#9b87f5]"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1">
              <Label htmlFor="contact-company" className="text-white/72">
                Company
              </Label>
              <Input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={120}
                placeholder="Company name"
                className="border-white/10 bg-black/25 text-white placeholder:text-white/35 focus-visible:ring-[#9b87f5]"
              />
            </div>
            <div className="grid w-full gap-1">
              <Label htmlFor="contact-message" className="text-white/72">
                Message
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                maxLength={1000}
                placeholder="Tell us about your project..."
                className="min-h-[112px] border-white/10 bg-black/25 text-white placeholder:text-white/35 focus-visible:ring-[#9b87f5]"
              />
            </div>
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="mt-auto h-10 w-full shrink-0 bg-gradient-to-r from-[#8b2df2] to-[#2563eb] font-semibold text-white shadow-[0_18px_50px_rgba(139,45,242,0.28)] hover:from-[#9b3dff] hover:to-[#38bdf8]"
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
