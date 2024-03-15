import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Breadcrumb, Breadcrumbs, Footer, HeaderBar } from '../../components';
import {
  BookMqShowcase,
  DraekienUiShowcase,
  JigglePuddingShowcase,
} from '../../features';
import { getSharedStaticProps } from '../../utils/getSharedStaticProps';

const crumbs: Breadcrumb[] = [{ title: 'Home', href: '/' }, { title: 'Archive' }];

export const getStaticProps = async () => {
  const sharedProps = await getSharedStaticProps();

  return {
    ...sharedProps,
  };
};

const ArchivePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Archived Projects | William Pei</title>
      </Head>
      <main>
        <HeaderBar>ARCHIVE</HeaderBar>
        <Breadcrumbs crumbs={crumbs} />
        <DraekienUiShowcase />
        <JigglePuddingShowcase />
        <BookMqShowcase />
      </main>
      <Footer {...props} />
    </>
  );
};

export default ArchivePage;
