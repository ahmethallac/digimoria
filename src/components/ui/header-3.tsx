'use client';

import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Bot,
  CalendarCheck,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  MessageCircle,
  Sparkles,
  Target,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type LinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

const serviceLinks: LinkItem[] = [
  {
    title: "Digital Performance",
    href: "/#services",
    description: "Google, Meta and LinkedIn campaigns optimized with AI.",
    icon: BarChart3,
  },
  {
    title: "AI Automation",
    href: "/#services",
    description: "Hands-free workflows from lead capture to CRM updates.",
    icon: Layers3,
  },
  {
    title: "Website Development",
    href: "/#services",
    description: "Fast, conversion-focused sites and landing pages.",
    icon: Globe2,
  },
  {
    title: "AI Content Production",
    href: "/#services",
    description: "Scalable content pipelines that match your brand voice.",
    icon: Sparkles,
  },
  {
    title: "AI Agent Development",
    href: "/#services",
    description: "Sales, support and outreach agents across key channels.",
    icon: Bot,
  },
  {
    title: "Vibe Coding Solutions",
    href: "/#services",
    description: "MVPs, internal tools and custom software built fast.",
    icon: Code2,
  },
];

const systemLinks: LinkItem[] = [
  {
    title: "AI Meeting Engine",
    href: "/#ai-meeting-engine",
    description: "The core customer acquisition infrastructure.",
    icon: Target,
  },
  {
    title: "Lead Sources",
    href: "/#lead-sources",
    description: "Traffic and prospect inputs from high-intent channels.",
    icon: Globe2,
  },
  {
    title: "Prospect Data",
    href: "/#prospect-data",
    description: "Decision-maker discovery and lead enrichment.",
    icon: Database,
  },
  {
    title: "AI Communication",
    href: "/#ai-communication",
    description: "Instant response and qualification across conversations.",
    icon: MessageCircle,
  },
  {
    title: "Calendar Booking",
    href: "/#calendar-booking",
    description: "Qualified prospects scheduled directly into your calendar.",
    icon: CalendarCheck,
  },
  {
    title: "CRM Pipeline",
    href: "/#crm-pipeline",
    description: "A visual pipeline for booked meetings and deal stages.",
    icon: UserCheck,
  },
];

const companyLinks: LinkItem[] = [
  {
    title: "About DigiMoria",
    href: "/about",
    description: "The team building AI-first acquisition systems.",
    icon: Users,
  },
  {
    title: "Proof of Performance",
    href: "/#proof",
    description: "Qualified leads, testimonials and measurable outcomes.",
    icon: BarChart3,
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Start a conversation about your growth system.",
    icon: Mail,
  },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0613]/88 text-white shadow-sm shadow-black/20 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
        scrolled && "border-white/12 bg-[#0a0613]/94",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 lg:px-8">
        <div className="flex min-w-0 items-center gap-5">
          <Link
            to="/"
            className="rounded-lg p-2 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0613]"
            aria-label="DigiMoria home"
          >
            <img
              src="/digimoria-header-logo.png"
              alt="DigiMoria"
              className="h-9 w-auto md:h-10"
              width={200}
              height={44}
              fetchPriority="high"
            />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white">Services</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#0a0613] p-0">
                  <div className="grid w-[42rem] grid-cols-2 gap-2 bg-[#10091e] p-2 shadow-2xl shadow-black/40">
                    {serviceLinks.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </div>
                  <div className="border-t border-white/10 bg-[#10091e] px-3 py-3">
                    <p className="text-sm text-white">
                      Need the full stack?{" "}
                      <NavigationMenuLink asChild>
                        <Link to="/contact" className="font-medium text-white hover:underline">
                          Build your AI system
                        </Link>
                      </NavigationMenuLink>
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white">System</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#0a0613] p-0">
                  <div className="grid w-[42rem] grid-cols-2 gap-2 bg-[#10091e] p-2 shadow-2xl shadow-black/40">
                    {systemLinks.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white">Company</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#0a0613] p-0">
                  <div className="grid w-[34rem] gap-2 bg-[#10091e] p-2 shadow-2xl shadow-black/40">
                    {companyLinks.map((item) => (
                      <ListItem key={item.title} {...item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white" asChild>
            <Link to="/about">About</Link>
          </Button>
          <Button className="bg-[#8b2df2] text-white hover:bg-[#9b4cff]" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen((current) => !current)}
          className="border-white/15 bg-white/5 text-white hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <MobileMenu open={open} className="flex flex-col justify-between gap-6 overflow-y-auto">
        <div className="flex w-full flex-col gap-5">
          <MobileGroup title="Services" links={serviceLinks} onNavigate={closeMenu} />
          <MobileGroup title="System" links={systemLinks} onNavigate={closeMenu} />
          <MobileGroup title="Company" links={companyLinks} onNavigate={closeMenu} />
        </div>
        <div className="grid gap-2">
          <Button variant="outline" className="w-full bg-transparent" asChild>
            <Link to="/about" onClick={closeMenu}>
              About DigiMoria
            </Link>
          </Button>
          <Button className="w-full" asChild>
            <Link to="/contact" onClick={closeMenu}>
              Get Started
            </Link>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-hidden border-y border-white/10 bg-[#0a0613]/96 text-white backdrop-blur-xl md:hidden"
    >
      <div
        data-state={open ? "open" : "closed"}
        className={cn("size-full p-4 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", className)}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
  return (
    <NavigationMenuLink
      className={cn(
        "group flex w-full flex-row gap-x-3 rounded-md p-2.5 text-white transition-colors hover:bg-[#8b2df2] hover:text-white focus:bg-[#8b2df2] focus:text-white",
        className,
      )}
      {...props}
      asChild
    >
      <Link to={href}>
        <div className="flex aspect-square size-11 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.08] shadow-sm">
          <Icon className="size-5 text-white" aria-hidden="true" />
        </div>
        <div className="flex min-w-0 flex-col items-start justify-center">
          <span className="font-medium leading-5">{title}</span>
          {description && (
            <span className="line-clamp-2 text-xs leading-5 text-white/58 transition-colors group-hover:text-white group-focus:text-white">
              {description}
            </span>
          )}
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

function MobileGroup({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: LinkItem[];
  onNavigate: () => void;
}) {
  return (
    <section className="space-y-2" aria-labelledby={`mobile-${title.toLowerCase()}`}>
      <h2 id={`mobile-${title.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        {title}
      </h2>
      <div className="grid gap-1.5">
        {links.map((link) => (
          <Link
            key={link.title}
            to={link.href}
            onClick={onNavigate}
            className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 text-left transition-colors hover:bg-[#8b2df2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0613]"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
              <link.icon className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium leading-5">{link.title}</span>
              {link.description && <span className="line-clamp-1 text-xs text-white/58">{link.description}</span>}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
