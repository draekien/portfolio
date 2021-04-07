/** @jsxImportSource theme-ui */
import Head from "next/head";
import Introduction from "../components/introduction/introduction";
import MailDivider from "../components/mail-divider/mailDivider";
import HeaderBar from "../components/header-bar/headerBar";
import Showcase from "../components/showcase/showcase";
import { Text } from "@theme-ui/components";
import Footer from "../components/footer/footer";
import { ThemeUIStyleObject } from "theme-ui";

const showcaseDescriptionBodyCss: ThemeUIStyleObject = {
  variant: "text.body",
  mb: "md",
};

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
          carousel={{
            images: [
              {
                src: "https://i.imgur.com/FoayxKa.png",
                mobileSrc: "https://i.imgur.com/kWS2sBY.png",
                alt: "The landing page of Jiggle Pudding",
              },
            ],
          }}
          headers={{
            heading: "JIGGLE PUDDING",
            href: "https://jiggle-pudding-web.vercel.app/",
            labels: [
              { key: "Designed", value: "Adobe XD" },
              { key: "Photographed", value: "Nikon D750" },
              { key: "Built", value: "Next JS" },
              { key: "Deployed", value: "Vercel" },
            ],
          }}
        >
          <Text sx={showcaseDescriptionBodyCss}>
            Jiggle Pudding wanted a very simple website to showcase the
            different flavours available, where they could be found, and how
            they could be contacted.
          </Text>
          <Text sx={showcaseDescriptionBodyCss}>
            I used the colours from the provided logo as the colour palette of
            the website, took some photos of the product, ate some delicious
            Purin, and put together the design.
          </Text>
        </Showcase>
        <Showcase
          carousel={{
            images: [
              {
                src: "https://i.imgur.com/7v76QNZ.png",
                mobileSrc: "https://i.imgur.com/frGowru.png",
                alt: "The landing page of Book MQ",
              },
              {
                src: "https://i.imgur.com/ABjOGOa.png",
                mobileSrc: "https://i.imgur.com/AnF8fKm.png",
                alt:
                  "The marketing page for Book MQ that explains how Book MQ works",
              },
              {
                src: "https://i.imgur.com/nExTnSt.png",
                mobileSrc: "https://i.imgur.com/QXuLMlk.png",
                alt: "The login page for Book MQ",
              },
              {
                src: "https://i.imgur.com/WrRtfik.png",
                mobileSrc: "https://i.imgur.com/lXxyiTB.png",
                alt:
                  "The events page of Book MQ where you would see events created by other users",
              },
              {
                src: "https://i.imgur.com/f4sBIAR.png",
                mobileSrc: "https://i.imgur.com/frGowru.png",
                alt:
                  "The profile page of Book MQ where you can view your own events",
              },
            ],
          }}
          headers={{
            heading: "BOOK MQ",
            href: "https://stark-sierra-09793.herokuapp.com/",
            labels: [
              { key: "Designed", value: "Figma" },
              { key: "Illustrated", value: "unDraw" },
              { key: "Built", value: "React, Express, Mongo" },
              { key: "Deployed", value: "Heroku" },
            ],
          }}
        >
          <Text sx={showcaseDescriptionBodyCss}>
            Macquarie University Advanced Web Development final end of course
            group project. We were instructed to create an MVP for a website
            that allowed user registration and user interactions.
          </Text>
          <Text sx={showcaseDescriptionBodyCss}>
            I was responsible for the creation of the designs as well as the
            backend API using Express JS. I also assisted heavily in the
            creation of the frontend application and setup of our MongoDB.
          </Text>
        </Showcase>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
