/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import { Text } from '@waystone/components';
import * as React from 'react';
import * as styles from './footer.styles';

export const Footer: React.FC = () => {
  return (
    <Flex as="footer" sx={styles.footerContainerCss}>
      <Flex sx={{ gap: 'sm' }}>
        <Text variant="eyebrow" inline>
          DESIGNED IN ADOBE XD
        </Text>
        <Text variant="eyebrow" color="secondary" inline>
          \\
        </Text>
        <Text variant="eyebrow" inline>
          BUILT WITH NEXT JS
        </Text>
      </Flex>
      <Flex sx={{ gap: 'sm' }}>
        <Text inline>&copy; William Pei</Text>
        <Text color="secondary" inline>
          \\
        </Text>
        <Text inline>last updated 22.10.10</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
