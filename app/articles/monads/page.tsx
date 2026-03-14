export default function Page() {
  return (
    <article className="prose prose-article prose-sm md:prose-base mx-auto">
      <h1>Waystone.Monads</h1>
      <small>Functional error handling for .NET</small>

      <h2>Project Overview</h2>
      <p>
        Waystone.Monads is a comprehensive .NET class library that brings
        idiomatic functional programming patterns to C#. It is inspired by
        Rust&apos;s <code>Option</code> and <code>Result</code> types from the
        standard library, and provides a type-safe, composable approach to
        handling nullable values and error cases.
      </p>
      <h2>Benefits</h2>
      <h3>Type-safe error handling</h3>
      <p>
        Eliminate unexpected error states with the <code>Result</code> type.
        Every function outcome is explicit:
      </p>
      <ul>
        <li>
          <code>{"Ok<TOk, TErr>"}</code> represents successful operations and
          contains a success value
        </li>
        <li>
          <code>{"Err<TOk, TErr>"}</code> represents failed operations and
          contains an error value
        </li>
      </ul>
      <p>
        This removes ambiguity about what a function can return, making error
        handling an integral part of your API contract.
      </p>
      <h3>Composable error flow</h3>
      <p>Chain operations seamlessly without nested try-catch blocks:</p>
      <pre>
        {`var result = await user
  .Validate(validator)
  .Map(validated => service.Process(validated))
  .Match(ok => ok.Email, err => "[NOT PROVIDED]")`}
      </pre>
    </article>
  );
}
