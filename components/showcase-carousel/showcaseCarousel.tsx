/** @jsxImportSource theme-ui */
import { Flex, Image } from "@theme-ui/components";
import Carousel from "nuka-carousel";
import * as styles from "./showcaseCarousel.styles";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export type ImageWithAlt = {
  src: string;
  mobileSrc: string;
  alt: string;
};

export interface ShowcaseCarouselProps {
  images: ImageWithAlt[];
}

const MobileSize = 481;

const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({ images }) => {
  const isMobile = useMediaQuery(MobileSize);

  const DesktopCarouselHeader = () => (
    <Image
      sx={styles.showcaseCarouselHeaderCss}
      src="/showcase-header.svg"
      alt="A mock up of a browser window."
    />
  );

  return (
    <Flex sx={styles.showcaseCarouselContainerCss}>
      {!isMobile && <DesktopCarouselHeader />}
      <Carousel autoGenerateStyleTag>
        {images.map(({ src, mobileSrc, alt }, index) => (
          <Image
            key={index}
            src={isMobile ? mobileSrc : src}
            sx={{ width: "60rem" }}
            alt={alt}
          />
        ))}
      </Carousel>
    </Flex>
  );
};

export default ShowcaseCarousel;
