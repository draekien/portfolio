/** @jsxImportSource theme-ui */
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Footer, HeaderBar, Introduction } from '../components';
import { FluentConstructorAssertionsShowcase } from '../features';
import ArchivedProjectsLink from '../features/archive/archive';
import { getSharedServerSideProps } from '../utils/getSharedServerSideProps';

export const getServerSideProps = async () => {
  const sharedProps = await getSharedServerSideProps();

  return {
    props: {
      ...sharedProps,
    },
  };
};

const HomePage = ({
  lastUpdatedOn,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>.NET Developer | William Pei</title>
        <meta
          name="description"
          content="A portfolio showcasing some of William Pei's personal projects."
        />
      </Head>
      <main>
        <HeaderBar>
          <span>
            WILLIAM
            <br />
            PEI
          </span>
        </HeaderBar>
        <Introduction />
        <FluentConstructorAssertionsShowcase />
        <ArchivedProjectsLink />
      </main>
      <Footer lastUpdatedOn={lastUpdatedOn} />
    </div>
  );
};

export default HomePage;
