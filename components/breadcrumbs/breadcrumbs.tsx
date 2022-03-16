/** @jsxImportSource theme-ui */
import React from "react";
import { MdChevronRight } from "react-icons/md";
import { Flex, Text } from "theme-ui";
import InlineLink from "../inline-link/inlineLink";

/** The shape of data required to render a breadcrumb */
export type Breadcrumb = {
  /** The text that will be shown on the page for this link */
  title: string;
  /** The relative path the link will navigate to */
  href: string;
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
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <Flex sx={{ alignItems: "center", px: ["lg", "lg", "xl"], pb: "sm" }}>
      {crumbs.map(({ href, title }, index) => (
        <React.Fragment key={index}>
          <MdChevronRight sx={{ pt: "xxs" }} />
          <InlineLink href={href} internal hideTooltip>
            <Text variant="text.body">{title}</Text>
          </InlineLink>
        </React.Fragment>
      ))}
    </Flex>
  );
};
