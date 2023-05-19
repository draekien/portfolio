/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import Carousel from 'nuka-carousel';
import * as styles from './showcaseCarousel.styles';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import Image, { StaticImageData } from 'next/image';
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
      style={{ width: '60rem', height: 'fit-content', objectFit: 'contain' }}
    />
  );

  return (
    <Flex sx={styles.showcaseCarouselContainerCss}>
      {!isMobile && <DesktopCarouselHeader />}
      <Carousel wrapAround={images.length > 1}>
        {images.map(({ src, mobileSrc, alt }, index) => {
          if (isMobile && !mobileSrc) return null;

          return (
            <Image
              key={index}
              src={isMobile ? mobileSrc! : src}
              alt={alt}
              priority={index === 0}
              style={{ objectFit: 'contain', width: '60rem', height: 'fit-content' }}
            />
          );
        })}
      </Carousel>
    </Flex>
  );
};

export default ShowcaseCarousel;
