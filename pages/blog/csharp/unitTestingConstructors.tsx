/** @jsxImportSource theme-ui */
import { Text } from '@waystone/ui';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ThemeUICSSObject } from 'theme-ui';
import {
  Article,
  Breadcrumbs,
  Code,
  CodeBlock,
  Footer,
  HeaderBar,
  InlineLink,
} from '../../../components';
import { getSharedStaticProps } from '../../../utils/getSharedStaticProps';

const exampleCtor = `public class TransportHandler : ICommandHandler
{
  private readonly ITransportService _transportService;
  private readonly ILogger<TransportHandler> _logger;

  public TransportHandler(ITransportService transportService,
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

const exampleFcaTests = `[Fact]
public void WhenInstantiatingTransportHandler_ThenHandleAllScenariosAppropriately()
{
  // ARRANGE
  ITransportService transportService = Substitute.For<ITransportService>();
  ILogger<TransportHandler> logger = Substitute.For<ILogger<TransportHandler>>();

  // ACT + ASSERT
  ForConstructorOf<TransportHandler>
    .WithArgTypes(typeof(ITransportService), typeof(ILogger<TransportHandler>))
    .Throws<ArgumentNullException>("Value cannot be null. (Parameter 'transportService')")
    .ForArgs(null, logger)
    .And.Throws<ArgumentNullException>("Value cannot be null. (Parameter 'logger')")
    .ForArgs(transportService, null)
    .And.Succeeds("Both arguments are not null")
    .ForArgs(transportService, logger)
    .Should.BeTrue();
}`;

const bodyCss: ThemeUICSSObject = {
  variant: 'text.body',
  mb: 'lg',
};

export const getStaticProps = async () => {
  const sharedProps = await getSharedStaticProps();

  return {
    ...sharedProps,
  };
};

const UnitTestingConstructorsBlog = ({
  lastUpdatedOn,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div sx={{ mb: 'xl' }}>
      <Head>
        <title>Unit testing constructors | C# | Code With Me | William Pei</title>
      </Head>
      <main sx={{ pb: 'xl' }}>
        <HeaderBar>CODE WITH ME</HeaderBar>
        <Breadcrumbs
          crumbs={[
            { title: 'Home', href: '/' },
            { title: 'Code with me', href: '/blog' },
            { title: 'C#', href: '/blog/csharp' },
            { title: 'Unit testing constructors' },
          ]}
        />
        <Article
          title={
            <div>
              Unit Testing Constructors in C# with{' '}
              <InlineLink
                href="https://github.com/draekien/FluentConstructorAssertions"
                hideTooltip>
                Fluent Constructor Assertions
              </InlineLink>
            </div>
          }
          author="William Pei"
          published="21.06.28"
          coverPhoto="/blogs/fluent-constructor-assertions/cover.svg"
          coverAlt="Illustration of a person looking at some code">
          <Text as="h2" variant="title">
            The Problem
          </Text>
          <Text as="p" sx={bodyCss}>
            In my day to day interactions with writing C# code, I&apos;ve found that
            constructors are surprisingly clunky to unit test. Since the best practice in
            constructors is to null check the constructor arguments, I&apos;ve often found
            myself writing the same boilerplate code for different constructors just so
            that I can pass <Code>null</Code> as one one of the arguments in my
            constructor&apos;s unit test.
          </Text>
          <Text as="p" sx={bodyCss}>
            You may have encountered constructors such as this example below:
          </Text>
          <CodeBlock language="csharp">{exampleCtor}</CodeBlock>
          <Text as="p" sx={bodyCss}>
            To unit test something like this to 100% branch coverage, you would have to
            write multiple actions and then assert that they throw an{' '}
            <Code>ArgumentNullException</Code> when each action is executed. You would
            also have to write a test to make sure that no exceptions are thrown when both
            arguments are valid. For instance, we can use{' '}
            <InlineLink href="https://xunit.net/">XUnit</InlineLink> and{' '}
            <InlineLink href="https://fluentassertions.com/">FluentAssertions</InlineLink>{' '}
            to do the below:
          </Text>
          <CodeBlock language="csharp">{exampleXunitTests}</CodeBlock>
          <Text as="p" sx={bodyCss}>
            As you might imagine, this is not very scallable for constructors that make
            more than 4 or 5 arguments. What about for classes that have multiple ways of
            being instantiated?
          </Text>
          <Text as="h2" variant="title">
            The Solution
          </Text>
          <Text as="p" sx={bodyCss}>
            This is the reason behind the creation of{' '}
            <InlineLink href="https://github.com/draekien/FluentConstructorAssertions">
              Fluent Constructor Assertions
            </InlineLink>
            . This library enables us to easily define the test cases for a specific
            constructor, all in the one test method. No more <Code>ClassData</Code>{' '}
            attributes or <Code>MemberData</Code> attributes! Defining tests for the
            example <Code>TransportHandler</Code> becomes as simple as:
          </Text>
          <CodeBlock language="csharp">{exampleFcaTests}</CodeBlock>
          <Text as="h3" variant="subtitle">
            Whoa what was that!
          </Text>
          <Text as="dl" sx={bodyCss}>
            <span sx={{ mb: 'lg', display: 'block' }}>
              Lets break it down into blocks and explain what just happened.
            </span>
            <dt>Step 1: define the constructor we want to test</dt>
            <dd>
              <Code>Lines 9 - 10</Code>: here, we are creating a test context for the
              class <Code>TransportHandler</Code> which has a constructor that accepts two
              arguments: <Code>ITransportService</Code> and{' '}
              <Code>{`ILogger<TransportHandler>`}</Code>.
            </dd>
            <dt>Step 2: define the first test case</dt>
            <dd>
              <Code>Lines 11 - 12</Code>: in this case, we are checking that the
              constructor will throw an <Code>ArgumentNullException</Code> when the first
              parameter is <Code>null</Code>. We also define the expected exception
              message{' '}
              <Code>
                &quot;Value cannot be null. (Parameter &apos;transportService&apos;)&quot;
              </Code>
              . This expected exception message helps the test runner identify whether the
              exception was thrown for the correct parameter. If you do not specify this
              message, the runner will assume any exception of the specified type is a
              valid exception.
            </dd>
            <dt>Step 3: add some more test cases</dt>
            <dd>
              We are able to chain additional test cases by using the <Code>And</Code>{' '}
              keyword. You can see examples of this on <Code>Lines 13 and 14</Code>. We
              can also use the <Code>Succeeds()</Code> method to define that test case
              that should not throw an exception.
            </dd>
            <dt>Step 4: lets execute the test!</dt>
            <dd>
              <Code>Line 17</Code>: we can tell the test context to execute the configured
              test cases with the <Code>Should.BeTrue()</Code> method.
            </dd>
          </Text>
          <Text as="h2" variant="title">
            Check out the code!
          </Text>
          <Text as="p" sx={bodyCss}>
            If you found this interesting, feel free to check out the{' '}
            <InlineLink href="https://github.com/draekien/FluentConstructorAssertions">
              FluentConstructorAssertions codebase
            </InlineLink>{' '}
            on Github. Don&apos;t be afraid to contribute or raise any issues you find.
            Please also give it a star if you like it!
          </Text>
        </Article>
      </main>
      <Footer lastUpdatedOn={lastUpdatedOn} />
    </div>
  );
};

export default UnitTestingConstructorsBlog;
