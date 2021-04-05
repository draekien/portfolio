/** @jsxImportSource theme-ui */
import Head from "next/head";
import Link from "next/link";
import Introduction from "../components/introduction/introduction";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FullStack Developer | William Pei</title>
      </Head>
      <main>
        <Introduction />
        <Link href="/demo">
          <a>DEMO</a>
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
