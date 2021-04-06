/** @jsxImportSource theme-ui */
import Head from "next/head";
import Introduction from "../components/introduction/introduction";
import MailDivider from "../components/mail-divider/mailDivider";
import HeaderBar from "../components/header-bar/headerBar";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>.NET Developer | William Pei</title>
      </Head>
      <main>
        <HeaderBar />
        <MailDivider />
        <Introduction />
      </main>
    </div>
  );
};

export default HomePage;
