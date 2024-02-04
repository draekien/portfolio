/** @jsxImportSource theme-ui */
import { Text } from '@waystone/ui';
import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import { Flex } from 'theme-ui';
import InlineLink from '../inline-link/inlineLink';

/** The shape of data required to render a breadcrumb */
export type Breadcrumb = {
  /** The text that will be shown on the page for this link */
  title: string;
  /** The relative path the link will navigate to */
  href?: string;
};

/** The props required to render the breadcrumbs component */
export interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

/**
 * The links required for the user to navigate back towards the home page.
 * @param props - the {@link BreadcrumbsProps}
 * @param props.crumbs - the array of {@link Breadcrumb} data
 * @returns the breadcrumbs component
 */
export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  return (
    <Flex sx={{ alignItems: 'center', px: ['lg', 'lg', 'xl'], pb: 'sm' }}>
      {crumbs.map(({ href, title }) => (
        <React.Fragment key={title}>
          <MdChevronRight sx={{ pt: 'xxs' }} />
          {href ? (
            <InlineLink href={href} internal hideTooltip>
              <Text inline>{title}</Text>
            </InlineLink>
          ) : (
            <Text inline>{title}</Text>
          )}
        </React.Fragment>
      ))}
    </Flex>
  );
};
