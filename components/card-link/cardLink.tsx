/** @jsxImportSource theme-ui */
import React from 'react';
import Link from 'next/link';
import { ThemeUIStyleObject } from '@theme-ui/css';
import { CardButton, Text } from '@waystone/components';

export interface CardLinkProps {
  href: string;
  title: string;
  external?: boolean;
  fullWidth?: boolean;
}

const cardLinkCss: (fullWidth: boolean) => ThemeUIStyleObject = (fullWidth) => ({
  display: fullWidth ? 'block' : 'inline-block',
  textAlign: 'left',
  color: 'primary',
  borderRadius: 'lg',
  border: '1px solid',
  borderColor: 'muted',
  backgroundColor: 'muted',
  boxShadow: 'md',
  paddingX: 'md',
  paddingY: 'lg',
  width: fullWidth && '100%',
  maxWidth: !fullWidth && '20rem',
  cursor: 'pointer',
  transition: 'all 200ms',
  ':hover, :focus': {
    boxShadow: 'lg',
    borderColor: 'p-200',
  },
  ':active': {
    borderColor: 'p-300',
    boxShadow: 'md',
  },
});

/**
 * A card that links to another resource.
 * @param props - the {@link CardLinkProps}
 * @param props.href - the url to link to
 * @param props.title - the title of the card
 * @param props.children - the body of the card
 * @param [props.external=false] - is the href provided an external link
 * @param [props.fullWidth=false] - should the card take up the full width of the parent container
 * @returns The card link component
 */
export const CardLink: React.FC<CardLinkProps> = ({
  href,
  title,
  children,
  external = false,
  fullWidth = false,
}) => {
  if (!external) {
    return (
      <Link href={href} passHref>
        <CardButton fullWidth>
          <Text as="h2" variant="title">
            {title}
          </Text>
          {children}
        </CardButton>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" sx={cardLinkCss(fullWidth)}>
      <Text as="h2" variant="text.heading" sx={{ fontSize: 'h4', marginBottom: 'sm' }}>
        {title}
      </Text>
      {children}
    </a>
  );
};

export default CardLink;
