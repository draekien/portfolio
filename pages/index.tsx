/** @jsxImportSource theme-ui */
import Head from 'next/head';
import { Footer, HeaderBar, Introduction } from '../components';
import { FluentConstructorAssertionsShowcase } from '../features';

const HomePage = () => {
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
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
