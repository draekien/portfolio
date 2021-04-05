/** @jsxImportSource theme-ui */
import Head from "next/head";
import Introduction from "../components/introduction/introduction";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FullStack Developer | William Pei</title>
      </Head>
      <main>
        <Introduction />
      </main>
    </div>
  );
};

export default HomePage;
