import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { ButtonLink } from "@/components/button-link";
import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
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
  title: "Waystone.Monads | William Pei",
  description:
    "A .NET library implementing Option<T> and Result<T,E> monads for type-safe null and error handling.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold mb-6">
      <BrandMark className="text-primary mr-2" />
      {children}
    </h2>
  );
}

function InstallCommand({ command }: { command: string }) {
  return (
    <div className="flex items-center gap-3 bg-muted rounded-md px-4 py-2.5 font-mono text-sm">
      <span className="text-secondary select-none" aria-hidden="true">
        $
      </span>
      <span className="text-foreground">{command}</span>
    </div>
  );
}

export default async function WaystoneMonadsPage() {
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
            <BreadcrumbPage>Waystone.Monads</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="mb-16 space-y-6 max-w-2xl">
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
            variant="outline"
            className="h-9 px-4"
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
            variant="outline"
            className="h-9 px-4"
          >
            GitBook docs →
          </ButtonLink>
        </div>
      </header>

      <section className="mb-16 max-w-prose">
        <SectionHeading>Why this exists</SectionHeading>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Null reference exceptions were costing my team production incidents.
            The root cause was always the same: a value that should have been
            treated as optional was accessed unconditionally, and nothing in the
            type system pushed back.
          </p>
          <p>
            Rust&apos;s <Code>Option</Code> and <Code>Result</Code> types solve
            this elegantly — you cannot access the inner value without handling
            both cases. Waystone.Monads brings that discipline to .NET, without
            requiring F# or abandoning idiomatic C# patterns.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading>Option&lt;T&gt;</SectionHeading>
        <p className="text-muted-foreground mb-6 max-w-prose">
          Represents a value that may or may not be present. Forces the caller
          to handle both the <Code>Some</Code> and <Code>None</Code> cases.
        </p>
        <div className="space-y-6">
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3">
              <BrandMark className="text-primary mr-1" />
              basic usage
            </p>
            <CodeBlock
              language="csharp"
              code={`// A user may or may not exist for a given id
Option<User> user = repository.Find(id);

// Pattern match — compiler ensures both cases are handled
return user.Match(
    onSome: u => Results.Ok(u),
    onNone: () => Results.NotFound()
);`}
            />
          </div>
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3">
              <BrandMark className="text-primary mr-1" />
              chaining with Map and Bind
            </p>
            <CodeBlock
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
        <SectionHeading>Result&lt;T, E&gt;</SectionHeading>
        <p className="text-muted-foreground mb-6 max-w-prose">
          Represents either a successful value (<Code>Ok</Code>) or a typed
          error (<Code>Err</Code>). Eliminates untyped exceptions from your
          domain logic.
        </p>
        <div className="space-y-6">
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3">
              <BrandMark className="text-primary mr-1" />
              returning typed errors
            </p>
            <CodeBlock
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
        <SectionHeading>Compatibility</SectionHeading>
        <div className="space-y-3 font-mono text-sm">
          <div className="flex items-center gap-4">
            <FrameworkBadge version="netstandard2.0" />
            <span className="text-muted-foreground">
              .NET Core 2.0+, .NET Framework 4.6.1+, .NET 5+
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
