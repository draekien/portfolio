/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import * as React from "react";
import { MdOpenInNew } from "react-icons/md";

export type label = {
  key: string;
  value: string;
};

export interface ShowcaseDescriptionProps {
  heading: string;
  href?: string;
  labels: label[];
  children?: React.ReactNode;
}

const ShowcaseDescription: React.FC<ShowcaseDescriptionProps> = ({ heading, href, labels, children }) => {
  return (
    <Flex sx={{ flexFlow: "column", width: "30rem", m: "xl" }}>
      <Flex as="h1" sx={{ mb: "lg" }}>
        <Text sx={{ variant: "text.heading", color: "secondary", mr: "md" }}>\\</Text>
        <a
          href={href}
          target="_blank"
          sx={{
            textDecoration: "none",
            variant: "text.heading",
            color: "primary",
            transition: "all 300ms",
            ":hover, :active, :focus": {
              color: "s-000",
            },
            ":focus": {
              outline: "0.125rem solid",
              outlineColor: "muted",
              outlineOffset: "0.25rem",
            },
          }}
          rel="noopener noreferrer">
          {heading} {href && <MdOpenInNew sx={{ width: "1rem", height: "1rem", verticalAlign: "top", mt: "xs" }} />}
        </a>
      </Flex>

      <Flex sx={{ mb: "xl" }}>
        <Flex sx={{ flexFlow: "column", mr: "md" }}>
          {labels.map(({ key }, index) => (
            <Text key={index} sx={{ variant: "text.mono", color: "secondary" }}>
              @{key}
            </Text>
          ))}
        </Flex>
        <Flex sx={{ flexFlow: "column" }}>
          {labels.map(({ value }, index) => (
            <Text key={index} sx={{ variant: "text.body" }}>
              {value}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Flex sx={{ flexFlow: "column", mt: "lg" }}>{children}</Flex>
    </Flex>
  );
};

export default ShowcaseDescription;
