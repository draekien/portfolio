/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import { MdOpenInNew } from "react-icons/md";
import * as styles from "./showcaseDescription.styles";

export type label = {
  key: string;
  value: React.ReactNode;
};

export interface ShowcaseDescriptionProps {
  heading: string;
  href?: string;
  labels: label[];
  children?: React.ReactNode;
}

const ShowcaseDescription: React.FC<ShowcaseDescriptionProps> = ({ heading, href, labels, children }) => {
  return (
    <Flex sx={styles.showcaseDescriptionContainerCss}>
      <Flex as="h1" sx={styles.showcaseHeadingContainerCss}>
        <Text sx={styles.showcaseHeadingPreCss}>\\</Text>
        <a href={href} target="_blank" sx={styles.showcaseHeadingLinkCss} rel="noopener noreferrer">
          {heading} {href && <MdOpenInNew sx={styles.showcaseHeadingLinkIconCss} />}
        </a>
      </Flex>
      <Flex sx={styles.showcaseLabelsContainerCss}>
        <Flex sx={styles.labelKeyContainerCss}>
          {labels.map(({ key }, index) => (
            <Text key={index} sx={styles.labelKeyCss}>
              @{key}
            </Text>
          ))}
        </Flex>
        <Flex sx={styles.labelValueContainerCss}>
          {labels.map(({ value }, index) => (
            <Text key={index} sx={styles.labelValueCss}>
              {value}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Flex sx={styles.showcaseChildrenContainerCss}>{children}</Flex>
    </Flex>
  );
};

export default ShowcaseDescription;
