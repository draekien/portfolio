/** @jsxImportSource theme-ui */
import { Flex, Image } from "@theme-ui/components";
import Carousel from "nuka-carousel";
import * as React from "react";

export interface ShowcaseCarouselProps {
  images: string[];
  interval?: number;
}

const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({ images, interval = 5000 }) => {
  return (
    <Flex sx={{ flexFlow: "column", position: "relative", borderRadius: "xl", overflow: "hidden", width: "60rem", height: "fit-content", m: "xl" }}>
      <Image sx={{ width: "100%" }} src="/showcase-header.svg" />
      <Carousel autoplayInterval={interval} autoplay>
        {images.map((image, index) => (
          <Image key={index} src={image} />
        ))}
      </Carousel>
    </Flex>
  );
};

export default ShowcaseCarousel;
