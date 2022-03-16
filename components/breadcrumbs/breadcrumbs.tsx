/** @jsxImportSource theme-ui */
import React from "react";
import { MdChevronRight } from "react-icons/md";
import { Flex, Text } from "theme-ui";
import InlineLink from "../inline-link/inlineLink";

export type Breadcrumb = {
  title: string;
  href: string;
};

export interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

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
