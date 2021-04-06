/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";
import * as styles from "./showcase.styles";
import ShowcaseCarousel, { ShowcaseCarouselProps } from "../showcase-carousel/showcaseCarousel";
import ShowcaseDescription, { ShowcaseDescriptionProps } from "../showcase-description/showcaseDescription";

export interface ShowcaseProps {
  carousel: ShowcaseCarouselProps;
  headers: ShowcaseDescriptionProps;
  children?: React.ReactNode;
}

const Showcase: React.FC<ShowcaseProps> = ({ carousel, headers, children }) => {
  return (
    <Flex sx={styles.showcaseContainerCss}>
      <ShowcaseDescription {...headers}>{children}</ShowcaseDescription>
      <ShowcaseCarousel {...carousel} />
    </Flex>
  );
};

export default Showcase;
