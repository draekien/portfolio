/** @jsxImportSource theme-ui */
import React from "react";
import Showcase from "../../components/showcase/showcase";
import { Text } from "theme-ui";
import { showcaseDescriptionBodyCss } from "../common/common.styles";

const images = [
  {
    src: "https://i.imgur.com/Zn6Vpze.png",
    mobileSrc: "https://i.imgur.com/ZaQXP5o.png",
    alt: "An example website made using Draekien UI",
  },
  {
    src: "https://i.imgur.com/swSt1yN.png",
    mobileSrc: "https://i.imgur.com/D0cy9oL.png",
    alt: "The datepicker input component in the Draekien UI Storybook",
  },
  {
    src: "https://i.imgur.com/ZDqUj4R.png",
    mobileSrc: "https://i.imgur.com/QiN5DeF.png",
    alt: "The card component in the Draekien UI Storybook",
  },
  {
    src: "https://i.imgur.com/br1Ir7c.png",
    mobileSrc: "https://i.imgur.com/chZzojk.png",
    alt: "The button component in the Draekien UI Storybook",
  },
];

const labels = [
  { key: "Designed", value: "Adobe XD" },
  { key: "Built", value: "React, Theme-UI" },
  { key: "Deployed", value: "Chromatic" },
  { key: "Installed", value: "npm install draekien-ui" },
];

const carousel = { images };
const headers = {
  heading: "DRAEKIEN UI",
  href: "https://github.com/draekien/draekien-ui",
  labels,
};

const DraekienUiShowcase: React.FC = () => {
  return (
    <Showcase carousel={carousel} headers={headers}>
      <Text sx={showcaseDescriptionBodyCss}>
        I created this styled UI library as a way to familiarise myself with front-end technologies that are being used at my workplace. Creating this library has also allowed me
        to explore the CI/CD pipeline offered by GitHub via Actions, for instance automatic storybook deployment, and package publishing. I went for a super clean asthetic to allow
        the library to be used in a wide range of situations.
      </Text>
    </Showcase>
  );
};

export default DraekienUiShowcase;
