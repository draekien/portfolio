/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import { Anchor, ButtonGroup, Icon, Text, onClickProps } from '@waystone/ui';
import Link from 'next/link';
import * as React from 'react';
import { useColorMode } from 'theme-ui';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import Logo from '../logo/logo';
import * as styles from './headerBar.styles';

export interface HeaderBarProps {
  /** The title of the page to display */
  children: React.ReactNode;
}

export const HeaderBar = ({ children: title }: HeaderBarProps) => {
  const [colorMode, setColorMode] = useColorMode();
  const isMobile = useMediaQuery(560);

  return (
    <Flex sx={styles.headerBarContainerCss}>
      <Text variant={isMobile ? 'eyebrow' : 'heading'}>{title}</Text>
      <Flex as="nav" sx={styles.navCss}>
        <Link href="/blog" passHref legacyBehavior>
          <Anchor>{isMobile ? <Icon name="code" /> : 'Code With Me'}</Anchor>
        </Link>
        <Link href="mailto:hello@wpei.me" passHref legacyBehavior>
          <Anchor>{isMobile ? <Icon name="mail_outline" /> : 'Say Hello'}</Anchor>
        </Link>
      </Flex>
      <ButtonGroup
        buttons={[
          { id: 'light', icon: { name: 'light_mode' } },
          { id: 'dark', icon: { name: 'dark_mode' } },
        ]}
        onChange={(props: onClickProps) => {
          setColorMode(props.clicked);
        }}
        activeButton={colorMode}
      />
      <Logo />
    </Flex>
  );
};

export default HeaderBar;
