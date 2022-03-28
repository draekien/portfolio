/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import Carousel from 'nuka-carousel';
import * as styles from './showcaseCarousel.styles';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import Image from 'next/image';
import showcaseHeader from '../../public/showcase-header.svg';

export type ImageWithAlt = {
  src: StaticImageData;
  mobileSrc?: StaticImageData;
  alt: string;
};

export interface ShowcaseCarouselProps {
  images: ImageWithAlt[];
}

const MobileSize = 481;

export const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({ images }) => {
  const isMobile = useMediaQuery(MobileSize);

  const DesktopCarouselHeader = () => (
    <Image
      sx={styles.showcaseCarouselHeaderCss}
      src={showcaseHeader}
      alt="A mock up of a browser window."
      width="60rem"
    />
  );

  return (
    <Flex sx={styles.showcaseCarouselContainerCss}>
      {!isMobile && <DesktopCarouselHeader />}
      <Carousel autoGenerateStyleTag wrapAround={images.length > 1}>
        {images.map(({ src, mobileSrc, alt }, index) => {
          if (isMobile && !mobileSrc) return null;

          return (
            <Image
              key={index}
              src={isMobile ? mobileSrc! : src}
              alt={alt}
              priority={index === 0}
            />
          );
        })}
      </Carousel>
    </Flex>
  );
};

export default ShowcaseCarousel;
