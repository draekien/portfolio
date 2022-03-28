/** @jsxImportSource theme-ui */
import React from 'react';
import Link from 'next/link';
import { Flex, Text } from '@theme-ui/components';
import { CardLinkProps } from '../card-link/cardLink';
import CoverPhoto, { CoverPhotoProps } from '../cover-photo/coverPhoto';
import { ThemeUIStyleObject } from 'theme-ui';

export interface IllustrationLinkProps extends CardLinkProps, CoverPhotoProps {}

const illustrationLinkContainerCss = (fullWidth: boolean): ThemeUIStyleObject => ({
  display: fullWidth ? 'block' : 'inline-block',
  textAlign: 'left',
  color: 'primary',
  padding: 0,
  borderRadius: 'lg',
  border: '1px solid',
  borderColor: 'muted',
  backgroundColor: 'muted',
  boxShadow: 'md',
  width: fullWidth && '100%',
  maxWidth: !fullWidth && '20rem',
  cursor: 'pointer',
  overflow: 'hidden',
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

const linkTitleCss: ThemeUIStyleObject = {
  fontSize: 'h4',
  marginBottom: 'sm',
};

export const IllustrationLink: React.FC<IllustrationLinkProps> = ({
  href,
  title,
  children,
  external = false,
  fullWidth = true,
  src,
  alt,
}) => {
  const linkContents = (
    <Flex sx={{ alignItems: 'center' }}>
      <Flex sx={{ padding: 'md', flexFlow: 'column' }}>
        <Text as="h4" variant="text.heading" sx={linkTitleCss}>
          {title}
        </Text>
        {children}
      </Flex>
      <CoverPhoto src={src} alt={alt} />
    </Flex>
  );

  if (!external) {
    return (
      <Link href={href} passHref>
        <a sx={illustrationLinkContainerCss(fullWidth)}>{linkContents}</a>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={illustrationLinkContainerCss(fullWidth)}>
      {linkContents}
    </a>
  );
};

export default IllustrationLink;
