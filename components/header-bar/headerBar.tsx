/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import * as React from "react";
import Logo from "../logo/logo";

const HeaderBar: React.FC = () => {
  return (
    <Flex sx={{ px: "xl", py: "md", justifyContent: "space-between" }}>
      <Text sx={{ variant: "text.heading", fontSize: "h1", lineHeight: "heading" }}>
        WILLIAM
        <br />
        PEI
      </Text>
      <Logo />
    </Flex>
  );
};

export default HeaderBar;
