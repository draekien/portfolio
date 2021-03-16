/** @jsxImportSource theme-ui */
import Head from "next/head";
import Loading from "../components/loading/loading";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FullStack Developer | William Pei</title>
      </Head>
      <Loading />
      <main></main>
    </div>
  );
};

export default HomePage;
