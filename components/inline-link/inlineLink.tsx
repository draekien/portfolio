/** @jsxImportSource theme-ui */
import React from 'react';
import Link from 'next/link';
import Tooltip from '../tooltip/tooltip';
import { Anchor } from '@waystone/ui';

export interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
  hideTooltip?: boolean;
  internal?: boolean;
}

export const InlineLink: React.FC<InlineLinkProps> = ({
  href,
  children,
  hideTooltip = false,
  internal = false,
}) => {
  return (
    <Tooltip text={hideTooltip ? '' : href}>
      <Link href={href} passHref legacyBehavior>
        <Anchor external={!internal}>{children}</Anchor>
      </Link>
    </Tooltip>
  );
};

export default InlineLink;
