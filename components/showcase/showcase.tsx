/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import ShowcaseCarousel, {
  ShowcaseCarouselProps,
} from '../showcase-carousel/showcaseCarousel';
import ShowcaseDescription, {
  ShowcaseDescriptionProps,
} from '../showcase-description/showcaseDescription';
import * as styles from './showcase.styles';
import { PropsWithChildren } from 'react';

export interface ShowcaseProps {
  carousel: ShowcaseCarouselProps;
  headers: ShowcaseDescriptionProps;
}

export const Showcase = ({ carousel, headers, children }: PropsWithChildren<ShowcaseProps>) => {
  return (
    <Flex sx={styles.showcaseContainerCss}>
      <ShowcaseDescription {...headers}>{children}</ShowcaseDescription>
      <ShowcaseCarousel {...carousel} />
    </Flex>
  );
};

export default Showcase;
