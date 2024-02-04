/** @jsxImportSource theme-ui */
import { Text } from '@waystone/ui';
import { Flex } from 'theme-ui';
import InlineLink from '../inline-link/inlineLink';
import * as styles from './footer.styles';

export type FooterProps = {
  lastUpdatedOn: string;
};

export function Footer({ lastUpdatedOn }: FooterProps) {
  return (
    <Flex as="footer" sx={styles.footerContainerCss}>
      <Flex
        sx={{
          gap: 'sm',
          flexFlow: ['row wrap', 'row'],
          justifyContent: 'space-around',
        }}>
        <Text variant="caption" inline>
          Built with NextJS
        </Text>
        <Text variant="caption" color="secondary" inline>
          \\
        </Text>
        <Text variant="caption" inline>
          Powered by{' '}
          <InlineLink href="https://github.com/draekien-industries/waystone-ui">
            Waystone UI
          </InlineLink>
        </Text>
      </Flex>
      <Flex sx={{ gap: 'sm', marginTop: 'md' }}>
        <Text variant="caption" inline>
          &copy; William Pei {new Date().getFullYear()}
        </Text>
        <Text variant="caption" color="secondary" inline>
          \\
        </Text>
        <Text variant="caption" inline>
          last updated {new Date(lastUpdatedOn).toISOString().substring(0, 10)}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Footer;
