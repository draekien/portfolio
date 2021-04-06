/** @jsxImportSource theme-ui */
import Head from "next/head";
import Introduction from "../components/introduction/introduction";
import MailDivider from "../components/mail-divider/mailDivider";
import HeaderBar from "../components/header-bar/headerBar";
import ShowcaseCarousel from "../components/showcase-carousel/showcaseCarousel";

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
        <ShowcaseCarousel images={["/jiggle-pudding-1.png", "/jiggle-pudding-1.png"]} />
      </main>
    </div>
  );
};

export default HomePage;
