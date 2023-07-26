/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import { Text } from '@waystone/ui';
import * as React from 'react';
import * as styles from './footer.styles';

export const Footer = () => {
  return (
    <Flex as="footer" sx={styles.footerContainerCss}>
      <Flex sx={{ gap: 'sm' }}>
        <Text variant="eyebrow" inline>
          Designed in Adobe XD
        </Text>
        <Text variant="eyebrow" color="secondary" inline>
          \\
        </Text>
        <Text variant="eyebrow" inline>
          Built with NextJS 13
        </Text>
        <Text variant="eyebrow" color="secondary" inline>
          \\
        </Text>
        <Text variant="eyebrow" inline>
          Powered by Waystone-UI
        </Text>
      </Flex>
      <Flex sx={{ gap: 'sm' }}>
        <Text inline>&copy; William Pei</Text>
        <Text color="secondary" inline>
          \\
        </Text>
        <Text inline>last updated 23.07.26</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
