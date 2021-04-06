/** @jsxImportSource theme-ui */
import Head from "next/head";
import Introduction from "../components/introduction/introduction";
import MailDivider from "../components/mail-divider/mailDivider";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FullStack Developer | William Pei</title>
      </Head>
      <main>
        <MailDivider />
        <Introduction />
      </main>
    </div>
  );
};

export default HomePage;
