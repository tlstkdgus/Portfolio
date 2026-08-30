"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, BookOpen, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

const links = [
  { key: "email", href: `mailto:${profile.links.email}`, icon: Mail, text: profile.links.email },
  { key: "github", href: profile.links.github, icon: Github, text: "github.com/tlstkdgus" },
  { key: "blog", href: profile.links.blog, icon: BookOpen, text: "velog.io/@tlstkdgus" },
  { key: "linkedin", href: profile.links.linkedin, icon: Linkedin, text: "LinkedIn" },
] as const;

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading>{t("heading")}</SectionHeading>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[17px]">
          {t("description")}
        </p>

        <ul className="mt-8 space-y-3">
          {links.map(({ key, href, icon: Icon, text }) => (
            <li key={key}>
              <a
                href={href}
                {...(key !== "email" && { target: "_blank", rel: "noopener noreferrer" })}
                className="group inline-flex items-center gap-3 text-[15px]"
              >
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                <span className="w-16 text-sm text-muted-foreground">{t(key)}</span>
                <span className="font-medium text-foreground group-hover:text-accent group-hover:underline underline-offset-4">
                  {text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
