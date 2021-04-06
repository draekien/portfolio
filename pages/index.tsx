/** @jsxImportSource theme-ui */
import Head from "next/head";
import Introduction from "../components/introduction/introduction";
import MailDivider from "../components/mail-divider/mailDivider";
import HeaderBar from "../components/header-bar/headerBar";
import Showcase from "../components/showcase/showcase";
import { Text } from "@theme-ui/components";

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
        <Showcase
          carousel={{ images: [{ src: "/jiggle-pudding-1.png", alt: "The landing page of Jiggle Pudding" }] }}
          headers={{
            heading: "JIGGLE PUDDING",
            href: "https://jiggle-pudding-web.vercel.app/",
            labels: [
              { key: "Designed", value: "Adobe XD" },
              { key: "Photographed", value: "Nikon D750" },
              { key: "Built", value: "Next JS" },
              { key: "Deployed", value: "Vercel" },
            ],
          }}>
          <Text sx={{ variant: "text.body", mb: "md" }}>
            Jiggle Pudding wanted a very simple website to showcase the different flavours available, where they could be found, and how they could be contacted.
          </Text>
          <Text sx={{ variant: "text.body" }}>
            I used the colours from the provided logo as the colour palette of the website, took some photos of the product, ate some delicious Purin, and put together the design.
          </Text>
        </Showcase>
      </main>
    </div>
  );
};

export default HomePage;
