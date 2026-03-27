import Navbar from "@/components/ui/navbar";
import Link from "next/link";


export default function Home() {
  const features = [
    {
      title: "Track every application",
      description:
        "Keep all your job applications in one place with clear status labels like Applied, Interview, Offer, and Rejected.",
      icon: "📋",
    },
    {
      title: "Never miss a follow-up",
      description:
        "Set reminders for recruiter emails, interviews, and deadlines so important opportunities never slip through.",
      icon: "⏰",
    },
    {
      title: "Stay organized visually",
      description:
        "Use a clean dashboard with progress summaries, company cards, and activity timelines that are easy to scan.",
      icon: "📊",
    },
  ];

  const stats = [
    { label: "Applications sent", value: "128+" },
    { label: "Interviews tracked", value: "42" },
    { label: "Follow-ups managed", value: "300+" },
    { label: "Hours saved", value: "50+" },
  ];

  const steps = [
    {
      title: "Add your applications",
      description:
        "Log company name, role, job link, date applied, salary range, and notes in seconds.",
    },
    {
      title: "Update status as you go",
      description:
        "Move applications through each stage from applied to interview to offer with a simple workflow.",
    },
    {
      title: "Review your progress",
      description:
        "Spot trends, follow up faster, and stay focused on the roles that matter most.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/40 to-secondary/60" />
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Navbar />

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Organize your job hunt with confidence
              </div>

              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                The easiest way to manage your
                <span className="bg-gradient-to-r from-primary via-foreground to-chart-3 bg-clip-text text-transparent">
                  {" "}
                  job applications
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Track applications, follow-ups, interviews, and offers in one
                clean workspace built for students, new grads, and job seekers.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/sign-up">
                <button className="rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg transition hover:scale-[1.02]">
                  Start Tracking Free
                </button>
                </Link>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border bg-card p-4 shadow-sm"
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="dashboard" className="relative">
              <div className="rounded-[28px] border border-border bg-primary bg-card p-4 shadow-2xl">
                <div className="rounded-[24px] border border-border bg-background p-5">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Dashboard Overview
                      </p>
                      <h3 className="text-xl font-semibold">
                        Your Job Search Pipeline
                      </h3>
                    </div>
                    <div className="rounded-xl bg-accent px-3 py-2 text-sm text-foreground">
                      6 interviews this week
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-border bg-card p-4">
                      <p className="text-sm text-muted-foreground">Applied</p>
                      <p className="mt-2 text-3xl font-bold">24</p>
                      <div className="mt-3 h-2 rounded-full bg-muted">
                        <div className="h-2 w-3/4 rounded-full bg-primary" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-card p-4">
                      <p className="text-sm text-muted-foreground">
                        Interviewing
                      </p>
                      <p className="mt-2 text-3xl font-bold">8</p>
                      <div className="mt-3 h-2 rounded-full bg-muted">
                        <div className="h-2 w-1/2 rounded-full bg-chart-3" />
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-card p-4">
                      <p className="text-sm text-muted-foreground">Offers</p>
                      <p className="mt-2 text-3xl font-bold">2</p>
                      <div className="mt-3 h-2 rounded-full bg-muted">
                        <div className="h-2 w-1/4 rounded-full bg-chart-2" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-2xl border border-border bg-card p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <h4 className="font-semibold">Recent Applications</h4>
                        <span className="text-sm text-muted-foreground">
                          Updated today
                        </span>
                      </div>

                      <div className="space-y-3">
                        {[
                          ["Google", "Frontend Engineer", "Interview"],
                          ["Stripe", "Software Engineer", "Applied"],
                          ["Notion", "Full Stack Developer", "Follow-up"],
                        ].map(([company, role, status]) => (
                          <div
                            key={company}
                            className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3"
                          >
                            <div>
                              <p className="font-medium">{company}</p>
                              <p className="text-sm text-muted-foreground">
                                {role}
                              </p>
                            </div>
                            <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-card p-4">
                      <h4 className="font-semibold">Today’s Focus</h4>
                      <div className="mt-4 space-y-3">
                        {[
                          "Follow up with recruiter at Figma",
                          "Prepare for Amazon behavioral interview",
                          "Update resume for backend roles",
                        ].map((task) => (
                          <div
                            key={task}
                            className="flex items-start gap-3 rounded-2xl border border-border bg-background p-3"
                          >
                            <div className="mt-1 h-3 w-3 rounded-full bg-primary" />
                            <p className="text-sm text-muted-foreground">
                              {task}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Features
          </p>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need for a better job search
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Designed to help you stay consistent, professional, and organized
            during every stage of the application process.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="mt-3 leading-7 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              How it works
            </p>
            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Simple workflow. Clear progress. Less stress.
            </h3>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Instead of juggling spreadsheets, notes, and emails, keep your
              entire job search in one focused system.
            </p>
          </div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="mt-2 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[32px] border border-border bg-gradient-to-br from-primary/10 via-accent to-secondary p-10 text-center shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Start today
          </p>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Turn your job search into a system that works
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Stay organized, follow up on time, and keep moving toward your next
            offer with Application Tracker.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/sign-up">
            <button className="rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition hover:scale-[1.02]">
              Create Free Account
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}