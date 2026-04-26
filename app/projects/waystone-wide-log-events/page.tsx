import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { ExpandableInstallCommand } from "@/components/expandable-install-command";
import { FrameworkBadge } from "@/components/framework-badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Waystone.WideLogEvents | William Pei",
  description:
    "A .NET library for accumulating and emitting structured log events as a single wide event per request.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold mb-6">
      <BrandMark className="text-primary mr-3" />
      {children}
    </h2>
  );
}

export default async function WaystoneWideLogEventsPage() {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <Breadcrumb className="mb-12">
        <BreadcrumbList className="font-mono text-sm">
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <BrandMark className="text-primary" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Waystone.WideLogEvents</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-16 space-y-6 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          <BrandMark className="text-primary mr-3" />
          Waystone.WideLogEvents
        </h1>
        <p className="text-lg md:text-xl text-foreground leading-relaxed">
          One structured log event per request, not dozens. Accumulate context
          throughout a request&apos;s lifetime and flush it all at once.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <FrameworkBadge version="netstandard2.0" />
          <FrameworkBadge version="net8.0" />
          <FrameworkBadge version="net10.0" />
        </div>
        <ExpandableInstallCommand />
        <div className="flex gap-4">
          <ButtonLink
            link={{
              href: "https://github.com/draekien-industries/waystone-dotnet",
              target: "_blank",
              rel: "noopener noreferrer",
            }}
            external
          >
            GitHub →
          </ButtonLink>
          <ButtonLink
            link={{
              href: "https://draekien-industries.wpei.me/waystone.widelogevents",
              target: "_blank",
              rel: "noopener noreferrer",
            }}
            external
            className="text-muted-foreground"
          >
            GitBook docs →
          </ButtonLink>
        </div>
      </header>

      <section className="mb-16 max-w-prose">
        <SectionHeading>Why this exists</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Debugging distributed systems meant correlating dozens of fragmented
            log entries per request. A single user action could scatter context
            across 30+ log lines — different timestamps, different log levels,
            different services — and you had to mentally stitch them together.
          </p>
          <p>
            The wide event pattern solves this. Instead of emitting a log entry
            every time something happens, you accumulate properties into a
            context bag and flush the whole thing as one rich, structured event
            at the end of the operation. One line per request. Trivially
            queryable.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading>Setup</SectionHeading>
        <p className="text-muted-foreground mb-6 max-w-prose">
          Configure Serilog with the <Code>WideLogEventsContext</Code> enricher
          and middleware. The library integrates with{" "}
          <Code>Serilog.AspNetCore</Code> — your existing request logging
          pipeline stays intact.
        </p>
        <div className="max-w-3xl">
          <CodeBlock
            language="csharp"
            code={`// Program.cs
builder.Host.UseSerilog((context, config) => config
    .Enrich.FromWideLogEventsContext()
    .Filter.WithWideLogEventsSampling()
    .ReadFrom.Configuration(context.Configuration));

var app = builder.Build();

// Middleware order matters — register before UseSerilogRequestLogging
app.UseWideLogEventsContext();
app.UseSerilogRequestLogging();`}
          />
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading>Usage</SectionHeading>
        <p className="text-muted-foreground mb-6 max-w-prose">
          Push properties anywhere in the request pipeline. They accumulate in
          the ambient context and flush as a single structured event when the
          request completes.
        </p>
        <div className="space-y-6 max-w-3xl">
          <div>
            <p className="font-mono text-sm text-secondary mb-3">
              <BrandMark className="text-primary mr-1" /> pushing properties
            </p>
            <CodeBlock
              language="csharp"
              code={`// In a handler, service, or middleware — anywhere in the request
WideLogEventContext.PushProperty("userId", userId);
WideLogEventContext.PushProperty("action", "checkout");
WideLogEventContext.PushProperty("cartItemCount", cart.Items.Count);
WideLogEventContext.PushProperty("totalValue", cart.Total);

// All properties appear in the single request-end log event:
// {
//   "userId": "usr_abc123",
//   "action": "checkout",
//   "cartItemCount": 3,
//   "totalValue": 149.95,
//   "RequestPath": "/api/orders",
//   "StatusCode": 201,
//   "Elapsed": 42.7
// }`}
            />
          </div>
          <div>
            <p className="font-mono text-sm text-secondary mb-3">
              <BrandMark className="text-primary mr-1" /> sampling by log level
            </p>
            <CodeBlock
              language="csharp"
              code={`// Tune per-level sample rates — errors and fatals always emit
builder.Host.UseSerilog((context, config) => config
    .Enrich.FromWideLogEventsContext()
    .Filter.WithWideLogEventsSampling(options =>
    {
        options.VerboseSampleRate     = 0.01; // 1%  (default)
        options.DebugSampleRate       = 0.01; // 1%  (default)
        options.InformationSampleRate = 0.05; // 5%  (default)
        options.WarningSampleRate     = 0.10; // 10% (default)
        options.ErrorSampleRate       = 1.0;  // always (default)
        options.FatalSampleRate       = 1.0;  // always (default)

        // Override in development so nothing gets dropped
        if (builder.Environment.IsDevelopment())
        {
            options.VerboseSampleRate     = 1.0;
            options.DebugSampleRate       = 1.0;
            options.InformationSampleRate = 1.0;
            options.WarningSampleRate     = 1.0;
        }
    })
    .ReadFrom.Configuration(context.Configuration));`}
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading>Compatibility</SectionHeading>
        <div className="space-y-3 font-mono text-sm">
          {[
            {
              badge: "netstandard2.0" as const,
              targets: ".NET Core 2.0+, .NET Framework 4.6.1+, .NET 5+",
            },
            {
              badge: "net8.0" as const,
              targets: "Full .NET 8 API surface with performance improvements",
            },
            {
              badge: "net10.0" as const,
              targets: "Full .NET 10 API surface",
            },
          ].map(({ badge, targets }) => (
            <div key={badge} className="flex items-center gap-4">
              <FrameworkBadge version={badge} />
              <span className="text-muted-foreground">{targets}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
