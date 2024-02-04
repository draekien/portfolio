/** @jsxImportSource theme-ui */
import { Text } from '@theme-ui/components';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Article, Breadcrumbs, CardLink, Footer, HeaderBar } from '../../../components';
import { getSharedServerSideProps } from '../../../utils/getSharedServerSideProps';

export const getServerSideProps = async () => {
  const sharedProps = await getSharedServerSideProps();

  return {
    props: {
      ...sharedProps,
    },
  };
};

const CSharpPage = ({
  lastUpdatedOn,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div sx={{ mb: 'xl' }}>
      <Head>
        <title>C# | Code With Me | William Pei</title>
      </Head>
      <main sx={{ pb: 'xl' }}>
        <HeaderBar>CODE WITH ME</HeaderBar>
        <Breadcrumbs
          crumbs={[
            { title: 'Home', href: '/' },
            { title: 'Code with me', href: '/blog' },
            { title: 'C#' },
          ]}
        />
        <Article
          title="CSharp Articles"
          coverPhoto="/blogs/blog-content.svg"
          coverAlt="A blogging illustration">
          <CardLink
            href="/blog/csharp/unitTestingConstructors"
            title="Fluent Constructor Assertions"
            fullWidth>
            <Text as="p" variant="text.body" sx={{ fontSize: 'p' }}>
              A unit testing library for testing constructors on your way to 100% test
              coverage.
            </Text>
          </CardLink>
        </Article>
      </main>
      <Footer lastUpdatedOn={lastUpdatedOn} />
    </div>
  );
};

export default CSharpPage;
