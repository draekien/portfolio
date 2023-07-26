/** @jsxImportSource theme-ui */
import React from 'react';
import Link from 'next/link';
import { ThemeUIStyleObject } from '@theme-ui/css';
import { CardButton, Text } from '@waystone/ui';

export interface CardLinkProps {
  href: string;
  title: string;
  external?: boolean;
  fullWidth?: boolean;
}


/**
 * A card that links to another resource.
 * @param props - the {@link CardLinkProps}
 * @returns The card link component
 */
export const CardLink: React.FC<CardLinkProps> = ({
  href,
  title,
  children,
  fullWidth,
}) => {
  return (
    <Link style={{ width: '100%' }} href={href} passHref legacyBehavior>
      <CardButton fullWidth={fullWidth}>
        <Text as="h2" variant="title">
          {title}
        </Text>
        {children}
      </CardButton>
    </Link>
  );
};

export default CardLink;
