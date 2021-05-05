/** @jsxImportSource theme-ui */
import Head from "next/head";
import Article from "../../components/article";
import HeaderBar from "../../components/header-bar/headerBar";

const TestBlog: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Test | William Pei</title>
      </Head>
      <main>
        <HeaderBar title={<span>CODE WITH ME</span>} />
        <Article title="Test" author="William Pei" published="21.04.17" coverPhoto="/book-mq/book-mq-1@2x.png" coverAlt="photo">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda! Earum quia quo cupiditate at nisi, corporis cum fugit soluta maxime fuga est omnis ut, minus
            voluptatibus facilis quis eaque?
          </p>
        </Article>
      </main>
    </div>
  );
};

export default TestBlog;
