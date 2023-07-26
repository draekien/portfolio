/** @jsxImportSource theme-ui */
import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { Flex } from '@theme-ui/components';
import { CardLinkProps } from '../card-link/cardLink';
import CoverPhoto, { CoverPhotoProps } from '../cover-photo/coverPhoto';
import { CardButton, Text } from '@waystone/ui';

export interface IllustrationLinkProps extends CardLinkProps, CoverPhotoProps {}

export const IllustrationLink = ({
  href,
  title,
  children,
  src,
  alt,
}: PropsWithChildren<IllustrationLinkProps>) => {
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
    <Link style={{ width: '100%' }} href={href} passHref legacyBehavior>
      <CardButton fullWidth>{linkContents}</CardButton>
    </Link>
  );
};

export default IllustrationLink;
