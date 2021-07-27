/** @jsxImportSource theme-ui */
import Head from "next/head";
import Article from "../../../components/article/article";
import HeaderBar from "../../../components/header-bar/headerBar";

const UnitTestingConstructorsBlog: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Unit testing constructors | C# | Code With Me | William Pei</title>
      </Head>
      <main>
        <HeaderBar title={<span>CODE WITH ME</span>} />
        <Article
          title="Unit Testing Constructors in C#"
          author="William Pei"
          published="21.04.17"
          coverPhoto="/blogs/fluent-constructor-assertions/cover.svg"
          coverAlt="Example of fluent constructor assertions">
          <p></p>
        </Article>
      </main>
    </div>
  );
};

export default UnitTestingConstructorsBlog;
