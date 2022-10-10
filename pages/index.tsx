/** @jsxImportSource theme-ui */
import Head from 'next/head';
import { Introduction, HeaderBar, Footer } from '../components';
import {
  JigglePuddingShowcase,
  BookMqShowcase,
  DraekienUiShowcase,
  FluentConstructorAssertionsShowcase,
} from '../features';

const HomePage: React.FC = () => {
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
        <HeaderBar
          title={
            <span>
              WILLIAM
              <br />
              PEI
            </span>
          }
        />
        <Introduction />
        <FluentConstructorAssertionsShowcase />
        <DraekienUiShowcase />
        <JigglePuddingShowcase />
        <BookMqShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
