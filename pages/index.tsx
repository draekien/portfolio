/** @jsxImportSource theme-ui */
import Head from "next/head";
import { Introduction, MailDivider, HeaderBar, Footer } from "../components";
import { JigglePuddingShowcase, BookMqShowcase, DraekienUiShowcase, FluentConstructorAssertionsShowcase } from "../features";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>.NET Developer | William Pei</title>
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
        <MailDivider />
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
