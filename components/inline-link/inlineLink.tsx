/** @jsxImportSource theme-ui */
import React from 'react';
import Link from 'next/link';
import Tooltip from '../tooltip/tooltip';

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
  if (internal) {
    return (
      <Tooltip text={hideTooltip ? '' : href}>
        <Link href={href}>
          <a
            sx={{
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderBottomColor: 'secondary',
              color: 'inherit',
              transition: 'all 100ms',
              outline: 'none',
              fontFamily: 'inherit',
              fontWeight: 'inherit',
              fontSize: 'inherit',
              cursor: 'pointer',
              ':hover, :focus': {
                backgroundColor: 'b-300',
                borderTopLeftRadius: 'md',
                borderTopRightRadius: 'md',
              },
            }}>
            {children}
          </a>
        </Link>
      </Tooltip>
    );
  }

  return (
    <Tooltip text={hideTooltip ? '' : href}>
      <a
        href={href}
        target={internal ? '' : '_blank'}
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          borderBottom: '1px solid',
          borderBottomColor: 'secondary',
          color: 'inherit',
          transition: 'all 100ms',
          outline: 'none',
          fontFamily: 'inherit',
          fontWeight: 'inherit',
          fontSize: 'inherit',
          cursor: 'pointer',
          ':hover, :focus': {
            backgroundColor: 'b-300',
            borderTopLeftRadius: 'md',
            borderTopRightRadius: 'md',
          },
        }}>
        {children}
      </a>
    </Tooltip>
  );
};

export default InlineLink;
