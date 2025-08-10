/** @jsxImportSource theme-ui */
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Footer, HeaderBar, Introduction } from '../components';
import { FluentConstructorAssertionsShowcase, WaystoneMonadsShowcase } from '../features';
import ArchivedProjectsLink from '../features/archive/archive';
import { getSharedStaticProps } from '../utils/getSharedStaticProps';

export const getStaticProps = async () => {
  const sharedProps = await getSharedStaticProps();

  return {
    ...sharedProps,
  };
};

const HomePage = ({ lastUpdatedOn }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        <WaystoneMonadsShowcase />
        <FluentConstructorAssertionsShowcase />
        <ArchivedProjectsLink />
      </main>
      <Footer lastUpdatedOn={lastUpdatedOn} />
    </div>
  );
};

export default HomePage;
