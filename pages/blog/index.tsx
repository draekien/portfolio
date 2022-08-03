/** @jsxImportSource theme-ui */
import { Flex, Text } from '@theme-ui/components';
import Head from 'next/head';
import { Breadcrumbs, IllustrationLink, HeaderBar, Heading } from '../../components';

const BlogPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Blog | Code With Me | William Pei</title>
      </Head>
      <main>
        <HeaderBar title={<Heading variant="h1">CODE WITH ME</Heading>} />
        <Breadcrumbs crumbs={[{ title: 'Home', href: '/' }, { title: 'Code with me' }]} />
        <Flex sx={{ padding: ['sm', 'md', 'xl'], gap: ['sm', 'md', 'xl'] }}>
          <IllustrationLink
            href="/blog/csharp"
            title="C#"
            src="/blogs/blogging.svg"
            alt="A blogging illustration">
            <Text as="p" variant="text.body" sx={{ fontSize: 'p' }}>
              Explore C# with me as I delve into the world of .NET Core Web APIs.
            </Text>
          </IllustrationLink>
          <IllustrationLink
            href="/blog/designpatterns"
            title="Design Patterns"
            src="/blogs/design.svg"
            alt="">
            <Text as="p" variant="text.body" sx={{ fontSize: 'p' }}>
              A series on design patterns and when to use them.
            </Text>
          </IllustrationLink>
        </Flex>
      </main>
    </div>
  );
};

export default BlogPage;
