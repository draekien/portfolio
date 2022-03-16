/** @jsxImportSource theme-ui */
import React from "react";
import { Showcase } from "../../components";
import { Text } from "theme-ui";
import { showcaseDescriptionBodyCss } from "../common/common.styles";

const images = [
  {
    src: "https://i.imgur.com/FoayxKa.png",
    mobileSrc: "https://i.imgur.com/kWS2sBY.png",
    alt: "The landing page of Jiggle Pudding",
  },
];

const labels = [
  { key: "Designed", value: "Adobe XD" },
  { key: "Photographed", value: "Nikon D750" },
  { key: "Built", value: "Next JS" },
  { key: "Deployed", value: "Vercel" },
];

const carousel = { images };
const headers = {
  heading: "JIGGLE PUDDING",
  href: "https://jiggle-pudding-web.vercel.app/",
  labels,
};

export const JigglePuddingShowcase: React.FC = () => {
  return (
    <Showcase carousel={carousel} headers={headers}>
      <Text sx={showcaseDescriptionBodyCss}>
        Jiggle Pudding wanted a very simple website to showcase the different flavours available, where they could be found, and how they could be contacted.
      </Text>
      <Text sx={showcaseDescriptionBodyCss}>
        I used the colours from the provided logo as the colour palette of the website, took some photos of the product, ate some delicious Purin, and put together the design.
      </Text>
    </Showcase>
  );
};

export default JigglePuddingShowcase;
