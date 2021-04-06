/** @jsxImportSource theme-ui */
import { Flex, Image } from "@theme-ui/components";
import Carousel from "nuka-carousel";
import * as styles from "./showcaseCarousel.styles";

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
    <Flex sx={styles.showcaseCarouselContainerCss}>
      <Image sx={styles.showcaseCarouselHeaderCss} src="/showcase-header.svg" alt="A mock up of a browser window." />
      <Carousel autoplayInterval={interval} autoplay>
        {images.map((image, index) => (
          <Image key={index} src={image.src} sx={{ width: "60rem", height: "29rem" }} alt={image.alt} />
        ))}
      </Carousel>
    </Flex>
  );
};

export default ShowcaseCarousel;
