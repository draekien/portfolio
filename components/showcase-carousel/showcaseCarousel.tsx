/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { createShimmer } from 'utils/shimmer';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import showcaseHeader from '../../public/showcase-header.svg';
import * as styles from './showcaseCarousel.styles';

export type ImageWithAlt = {
  src: StaticImageData;
  mobileSrc?: StaticImageData;
  alt: string;
};

export interface ShowcaseCarouselProps {
  images: ImageWithAlt[];
}

const MobileSize = 481;

const MobileCarousel = ({ images }: ShowcaseCarouselProps) => {
  if (!images?.some((x) => x.mobileSrc)) return null;

  return (
    <Carousel wrapAround={images.length > 1}>
      {images
        .filter((x) => x.mobileSrc)
        .map(({ mobileSrc, alt }, index) => {
          return (
            <Image
              key={`${index}:${mobileSrc!}`}
              src={mobileSrc!}
              alt={alt}
              style={{ objectFit: 'contain', height: 'auto', maxWidth: '100%' }}
              width={320}
              placeholder={createShimmer(320, 640)}
            />
          );
        })}
    </Carousel>
  );
};

const DesktopCarousel = ({ images }: ShowcaseCarouselProps) => {
  return (
    <Carousel wrapAround={images.length > 1}>
      {images.map(({ src, alt }, index) => {
        return (
          <Image
            key={`${index}:${src}`}
            src={src}
            alt={alt}
            priority={index === 0}
            style={{ objectFit: 'contain', height: 'auto', width: '100%' }}
            width={960}
            placeholder={createShimmer(960, 540)}
          />
        );
      })}
    </Carousel>
  );
};

const DesktopCarouselHeader = () => (
  <Image
    src={showcaseHeader}
    alt="A mock up of a browser window."
    width={960}
    style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
  />
);

export const ShowcaseCarousel = ({ images }: ShowcaseCarouselProps) => {
  const isMobile = useMediaQuery(MobileSize);

  return (
    <Flex sx={styles.showcaseCarouselContainerCss}>
      {isMobile ? (
        <MobileCarousel images={images} />
      ) : (
        <>
          <DesktopCarouselHeader />
          <DesktopCarousel images={images} />
        </>
      )}
    </Flex>
  );
};

export default ShowcaseCarousel;
