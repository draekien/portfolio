/** @jsxImportSource theme-ui */
import { Flex, Image } from "@theme-ui/components";
import Carousel from "nuka-carousel";
import * as React from "react";

export type ImageWithAlt = {
  src: string;
  alt: string;
};

export interface ShowcaseCarouselProps {
  images: ImageWithAlt[];
  interval?: number;
}

const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({ images, interval = 5000 }) => {
  return (
    <Flex sx={{ flexFlow: "column", position: "relative", borderRadius: "xl", overflow: "hidden", width: "60rem", m: "xl" }}>
      <Image sx={{ width: "100%" }} src="/showcase-header.svg" />
      <Carousel autoplayInterval={interval} autoplay>
        {images.map((image, index) => (
          <Image key={index} src={image.src} sx={{ width: "60rem", height: "29rem" }} alt={image.alt} />
        ))}
      </Carousel>
    </Flex>
  );
};

export default ShowcaseCarousel;
