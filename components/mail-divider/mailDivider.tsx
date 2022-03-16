/** @jsxImportSource theme-ui */
import * as React from 'react';
import * as styles from './mailDivider.styles';
import Link from 'next/link';
import { Flex } from '@theme-ui/components';
import { MdEmail, MdCode } from 'react-icons/md';
import Tooltip from '../tooltip/tooltip';

export const MailDivider: React.FC = () => {
  return (
    <Flex as="nav" sx={styles.mailDividerContainerCss}>
      <Tooltip text="Say hello!">
        <a
          sx={styles.iconLinkCss}
          href="mailto:hello@wpei.me"
          target="_blank"
          rel="noreferrer"
          aria-label="Email William Pei">
          <MdEmail sx={styles.iconCss} />
        </a>
      </Tooltip>

      <Tooltip text="Blog">
        <Link href="/blog">
          <a sx={styles.iconLinkCss} aria-label="Code With Me">
            <MdCode sx={styles.iconCss} />
          </a>
        </Link>
      </Tooltip>

      <hr sx={styles.hrCss} />
    </Flex>
  );
};

export default MailDivider;
