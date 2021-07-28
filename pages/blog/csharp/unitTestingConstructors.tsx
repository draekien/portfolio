/** @jsxImportSource theme-ui */
import Head from "next/head";
import { Text, ThemeUICSSObject } from "theme-ui";
import Article from "../../../components/article/article";
import CodeBlock from "../../../components/code-block/codeBlock";
import Code from "../../../components/code/code";
import HeaderBar from "../../../components/header-bar/headerBar";
import InlineLink from "../../../components/inline-link/inlineLink";

const exampleCtor = `public class TransportHandler : ICommandHandler
{
  private readonly ITransportService _transportService;
  private readonly ILogger<TransportHandler> _logger;

  public TransportHandler(
    ITransportService transportService,
    ILogger<TransportHandler> logger)
  {
    _transportService = transportService
                        ?? throw new ArgumentNullException(nameof(transportService));

    _logger = logger ?? throw new ArgumentNullException(nameof(logger));
  }
}`;

const exampleXunitTests = `[Fact]
public void GivenNullTransportService_WhenInstantiating_ThenThrowException()
{
  // ARRANGE
  Action act = () => new TransportHandler(null,
    Substitute.For<ILogger<TransportHandler>>());

  // ACT + ASSERT
  act.Should()
     .Throw<ArgumentNullException>()
     .WithMessage("Value cannot be null. (Parameter 'transportService')");
}

[Fact]
public void GivenNullLogger_WhenInstantiating_ThenThrowException()
{
  // ARRANGE
  Action act = () => new TransportHandler(Substitute.For<ITransportService>(),
    null);

  // ACT + ASSERT
  act.Should()
     .Throw<ArgumentNullException>()
     .WithMessage("Value cannot be null. (Parameter 'logger')");
}`;

const bodyCss: ThemeUICSSObject = {
  variant: "text.body",
  mb: "lg",
};

const UnitTestingConstructorsBlog: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Unit testing constructors | C# | Code With Me | William Pei</title>
      </Head>
      <main>
        <HeaderBar title={<span>CODE WITH ME</span>} />
        <Article
          title="Unit Testing Constructors in C#"
          author="William Pei"
          published="21.06.28"
          coverPhoto="/blogs/fluent-constructor-assertions/cover.svg"
          coverAlt="Illustration of a person looking at some code">
          <Text as="p" sx={bodyCss}>
            In my day to day interactions with writing C# code, I've found that constructors are surprisingly clunky to unit test. Since the best practice in constructors is to
            null check the constructor arguments, I've often found myself writing the same boilerplate code for different constructors just so that I can pass <Code>null</Code> as
            one one of the arguments in my constructor's unit test.
          </Text>
          <Text as="p" sx={bodyCss}>
            You may have encountered constructors such as this example below:
          </Text>
          <CodeBlock language="csharp">{exampleCtor}</CodeBlock>
          <Text as="p" sx={bodyCss}>
            To unit test something like this to 100% branch coverage, you would have to write multiple actions and then assert that they thrown an{" "}
            <Code>ArgumentNullException</Code> when each action is executed. You would also have to write a test to make sure that no exceptions are thrown when both arguments are
            valid. For instance, we can use <InlineLink href="https://xunit.net/">XUnit</InlineLink> and{" "}
            <InlineLink href="https://fluentassertions.com/">FluentAssertions</InlineLink> to do the below:
          </Text>
          <CodeBlock language="csharp">{exampleXunitTests}</CodeBlock>
        </Article>
      </main>
    </div>
  );
};

export default UnitTestingConstructorsBlog;
