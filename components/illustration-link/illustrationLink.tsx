/** @jsxImportSource theme-ui */
import React from 'react';
import Link from 'next/link';
import { Flex } from '@theme-ui/components';
import { CardLinkProps } from '../card-link/cardLink';
import CoverPhoto, { CoverPhotoProps } from '../cover-photo/coverPhoto';
import { CardButton, Text } from '@waystone/components';

export interface IllustrationLinkProps extends CardLinkProps, CoverPhotoProps {}

export const IllustrationLink: React.FC<IllustrationLinkProps> = ({
  href,
  title,
  children,
  src,
  alt,
}) => {
  const linkContents = (
    <Flex sx={{ alignItems: 'center' }}>
      <Flex sx={{ padding: 'md', flexFlow: 'column' }}>
        <Text as="h2" variant="heading">
          {title}
        </Text>
        {children}
      </Flex>
      <CoverPhoto src={src} alt={alt} />
    </Flex>
  );

  return (
    <Link href={href} passHref>
      <CardButton fullWidth>{linkContents}</CardButton>
    </Link>
  );
};

export default IllustrationLink;
