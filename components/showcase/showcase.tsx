/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";
import * as React from "react";
import ShowcaseCarousel, { ShowcaseCarouselProps } from "../showcase-carousel/showcaseCarousel";
import ShowcaseDescription, { ShowcaseDescriptionProps } from "../showcase-description/showcaseDescription";

export interface ShowcaseProps {
  carousel: ShowcaseCarouselProps;
  headers: ShowcaseDescriptionProps;
  children?: React.ReactNode;
}

const Showcase: React.FC<ShowcaseProps> = ({ carousel, headers, children }) => {
  return (
    <Flex sx={{ alignItems: "center", justifyContent: "space-evenly", m: "xl", height: "40rem" }}>
      <ShowcaseDescription {...headers}>{children}</ShowcaseDescription>
      <ShowcaseCarousel {...carousel} />
    </Flex>
  );
};

export default Showcase;
