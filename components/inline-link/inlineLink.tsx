/** @jsxImportSource theme-ui */
import { PropsWithChildren } from 'react';
import Link from 'next/link';
import Tooltip from '../tooltip/tooltip';
import { Anchor } from '@waystone/ui';

export interface InlineLinkProps {
  href: string;
  hideTooltip?: boolean;
  internal?: boolean;
}

export const InlineLink = ({
  href,
  children,
  hideTooltip = false,
  internal = false,
}: PropsWithChildren<InlineLinkProps>) => {
  return (
    <Tooltip text={hideTooltip ? '' : href}>
      <Link href={href} passHref legacyBehavior>
        <Anchor external={!internal}>{children}</Anchor>
      </Link>
    </Tooltip>
  );
};

export default InlineLink;
