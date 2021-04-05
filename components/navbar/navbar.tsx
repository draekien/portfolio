/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";
import * as React from "react";
import Logo from "../logo/logo";

const Navbar: React.FC = () => {
  return (
    <Flex sx={{ px: "xl", py: "md" }}>
      <Logo />
    </Flex>
  );
};

export default Navbar;
