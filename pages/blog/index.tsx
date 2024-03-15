/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import { Text } from '@waystone/ui';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Breadcrumbs, Footer, HeaderBar, IllustrationLink } from '../../components';
import { getSharedStaticProps } from '../../utils/getSharedStaticProps';

export const getStaticProps = async () => {
  const sharedProps = await getSharedStaticProps();

  return {
    ...sharedProps,
  };
};

const BlogPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Blog | Code With Me | William Pei</title>
      </Head>
      <main>
        <HeaderBar>Code With Me</HeaderBar>
        <Breadcrumbs crumbs={[{ title: 'Home', href: '/' }, { title: 'Code with me' }]} />
        <Flex sx={{ padding: ['sm', 'md', 'xl'], gap: ['sm', 'md', 'xl'] }}>
          <IllustrationLink
            href="/blog/csharp"
            title="C#"
            src="/blogs/blogging.svg"
            alt="A blogging illustration">
            <Text as="p" variant="body" sx={{ fontSize: 'p' }}>
              Explore C# with me as I delve into the world of .NET Core Web APIs.
            </Text>
          </IllustrationLink>
        </Flex>
      </main>
      <Footer {...props} />
    </>
  );
};

export default BlogPage;
