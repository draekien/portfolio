import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Breadcrumb, Breadcrumbs, Footer, HeaderBar } from '../../components';
import {
  BookMqShowcase,
  DraekienUiShowcase,
  JigglePuddingShowcase,
} from '../../features';
import { getSharedServerSideProps } from '../../utils/getSharedServerSideProps';

const crumbs: Breadcrumb[] = [{ title: 'Home', href: '/' }, { title: 'Archive' }];

export const getServerSideProps = async () => {
  const sharedProps = await getSharedServerSideProps();

  return {
    props: {
      ...sharedProps,
    },
  };
};

const ArchivePage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
