/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import { Anchor, Text } from '@waystone/ui';
import * as styles from './showcaseDescription.styles';
import { PropsWithChildren } from 'react';

export type label = {
  key: string;
  value: React.ReactNode;
};

export interface ShowcaseDescriptionProps {
  heading: string;
  href?: string;
  labels: label[];
}

export const ShowcaseDescription = ({
  heading,
  href,
  labels,
  children,
}: PropsWithChildren<ShowcaseDescriptionProps>) => {
  return (
    <Flex sx={styles.showcaseDescriptionContainerCss}>
      <Flex as="h2" sx={styles.showcaseHeadingContainerCss}>
        <Anchor href={href} external>
          <Text variant="heading" color="secondary" sx={{ mr: 'sm' }} inline>
            \\
          </Text>
          {heading}
        </Anchor>
      </Flex>
      <Flex sx={styles.showcaseLabelsContainerCss}>
        <Flex sx={styles.labelKeyContainerCss}>
          {labels.map(({ key }) => (
            <Text key={key} variant="monospace" color="secondary" inline>
              @{key}
            </Text>
          ))}
        </Flex>
        <Flex sx={styles.labelValueContainerCss}>
          {labels.map(({ key, value }) => (
            <Text key={key} variant="monospace" inline>
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
