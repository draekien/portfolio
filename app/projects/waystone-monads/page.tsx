import type { Metadata } from "next";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { Colophon } from "@/components/colophon";
import { FrameworkBadge } from "@/components/framework-badge";
import { InstallCommand } from "@/components/install-command";
import { JsonLd } from "@/components/json-ld";
import { LabeledCodeBlock } from "@/components/labeled-code-block";
import { ProjectBreadcrumb } from "@/components/project-breadcrumb";
import { ProjectSectionHeading } from "@/components/project-section";
import structuredData from "./structured-data.json" with { type: "json" };

export const metadata: Metadata = {
  title: "Waystone.Monads | William Pei",
  description:
    "A .NET library implementing Option<T> and Result<T,E> monads for type-safe null and error handling.",
  alternates: {
    canonical: "/projects/waystone-monads",
  },
  openGraph: {
    siteName: "William Pei",
    url: "/projects/waystone-monads",
    type: "website",
  },
};

export default async function WaystoneMonadsPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="container mx-auto py-12 md:py-20">
        <ProjectBreadcrumb section="libraries" current="Waystone.Monads" />

        <header className="mb-16 space-y-6 max-w-2xl lg:max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            <BrandMark className="text-primary mr-3" />
            Waystone.Monads
          </h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Make impossible states impossible at the type level. Idiomatic .NET
            implementations of <Code>{"Option<T>"}</Code> and{" "}
            <Code>{"Result<T, E>"}</Code> inspired by Rust&apos;s standard
            library.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <FrameworkBadge version="netstandard2.0" />
          </div>
          <InstallCommand command="dotnet add package Waystone.Monads" />
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
                href: "https://draekien-industries.wpei.me/",
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
          <ProjectSectionHeading>Why this exists</ProjectSectionHeading>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Null reference exceptions were costing my team production
              incidents. The root cause was always the same: a value that should
              have been treated as optional was accessed unconditionally, and
              nothing in the type system pushed back.
            </p>
            <p>
              Rust&apos;s <Code>Option</Code> and <Code>Result</Code> types
              solve this elegantly: you cannot access the inner value without
              handling both cases. Waystone.Monads brings that discipline to
              .NET, without requiring F# or abandoning idiomatic C# patterns.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start">
            <div>
              <ProjectSectionHeading>Option&lt;T&gt;</ProjectSectionHeading>
              <p className="text-muted-foreground max-w-prose">
                Represents a value that may or may not be present. Forces the
                caller to handle both the <Code>Some</Code> and{" "}
                <Code>None</Code> cases.
              </p>
            </div>
            <div className="space-y-6 max-w-3xl">
              <LabeledCodeBlock
                label="basic usage"
                language="csharp"
                code={`// A user may or may not exist for a given id
Option<User> user = repository.Find(id);

// Pattern match: compiler ensures both cases are handled
return user.Match(
    onSome: u => Results.Ok(u),
    onNone: () => Results.NotFound()
);`}
              />
              <LabeledCodeBlock
                label="chaining with Map and Bind"
                language="csharp"
                code={`// Transform the inner value without unwrapping
Option<string> email = repository
    .Find(userId)
    .Map(u => u.Email)
    .Filter(e => e.EndsWith("@company.com"));

// Flatten nested Options
Option<Address> address = repository
    .Find(userId)
    .Bind(u => addressRepository.Find(u.AddressId));`}
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start">
            <div>
              <ProjectSectionHeading>Result&lt;T, E&gt;</ProjectSectionHeading>
              <p className="text-muted-foreground max-w-prose">
                Represents either a successful value (<Code>Ok</Code>) or a
                typed error (<Code>Err</Code>). Eliminates untyped exceptions
                from your domain logic.
              </p>
            </div>
            <div className="space-y-6 max-w-3xl">
              <LabeledCodeBlock
                label="returning typed errors"
                language="csharp"
                code={`Result<Order, OrderError> result = orderService.Place(cart);

return result.Match(
    onOk: order => Results.Created($"/orders/{order.Id}", order),
    onErr: error => error switch
    {
        OrderError.InsufficientStock => Results.Conflict("Out of stock"),
        OrderError.InvalidAddress    => Results.BadRequest("Invalid address"),
        _                            => Results.StatusCode(500)
    }
);`}
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <ProjectSectionHeading>Compatibility</ProjectSectionHeading>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
              <FrameworkBadge version="netstandard2.0" />
              <span className="text-muted-foreground">
                .NET Core 2.0+, .NET Framework 4.6.1+, .NET 5+
              </span>
            </div>
          </div>
        </section>

        <div className="mt-20">
          <Colophon>
            <p>
              Waystone.Monads is an open-source library I wrote. Claude helped
              me draft this write-up, but the explanations of how the code
              behaves are my own, each one checked back against the source.
            </p>
          </Colophon>
        </div>
      </div>
    </>
  );
}
