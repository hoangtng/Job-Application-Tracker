import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-16 flex items-center justify-between rounded-full border border-border bg-background/80 px-5 py-3 shadow-sm backdrop-blur">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary"><Briefcase/>Job Tracker</Link>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        <a
          href="#features"
          className="text-md text-muted-foreground transition hover:text-foreground"
        >
          Features
        </a>
        <a
          href="#how-it-works"
          className="text-md text-muted-foreground transition hover:text-foreground"
        >
          How it works
        </a>
        <a
          href="#dashboard"
          className="text-md text-muted-foreground transition hover:text-foreground"
        >
          Preview
        </a>
        <a
          href="/sign-in"
          className="text-md text-muted-foreground transition hover:text-foreground"
        >
          Login
        </a>
        <Link href="/sign-up">
            <Button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            
            Get Started
            
            </Button>
        </Link>
      </div>
    </nav>
  );
}