/** @jsxImportSource theme-ui */
import Head from "next/head";
import Introduction from "../components/introduction/introduction";
import MailDivider from "../components/mail-divider/mailDivider";
import HeaderBar from "../components/header-bar/headerBar";
import Footer from "../components/footer/footer";
import JigglePuddingShowcase from "../features/jiggle-pudding/jigglePuddingShowcase";
import BookMqShowcase from "../features/book-mq/bookMqShowcase";
import DraekienUiShowcase from "../features/draekien-ui/draekienUiShowcase";
import FluentConstructorAssertionsShowcase from "../features/fluent-constructor-assertions/fluentConstructorAssertionsShowcase";

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
