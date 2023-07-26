/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { CardButton, Text } from '@waystone/ui';
import { PropsWithChildren } from 'react';

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
export const CardLink = ({
  href,
  title,
  children,
  fullWidth,
}: PropsWithChildren<CardLinkProps>) => {
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
