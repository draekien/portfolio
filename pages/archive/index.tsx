import Head from 'next/head';
import { Breadcrumb, Breadcrumbs, HeaderBar } from '../../components';
import {
  BookMqShowcase,
  DraekienUiShowcase,
  JigglePuddingShowcase,
} from '../../features';

const crumbs: Breadcrumb[] = [{ title: 'Home', href: '/' }, { title: 'Archive' }];

const ArchivePage = () => {
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
    </>
  );
};

export default ArchivePage;
