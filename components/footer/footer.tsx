/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import * as React from "react";

const Footer: React.FC = () => {
  return (
    <Flex as="footer" sx={{ alignItems: "center", flexFlow: "column", m: "xl" }}>
      <Text sx={{ variant: "text.caps", mb: "md" }}>DESIGNED IN ADOBE XD & BUILT WITH NEXT JS</Text>
      <Flex>
        <Text sx={{ variant: "text.body", mr: "md" }}>&copy; William Pei</Text>
        <Text sx={{ variant: "text.body", color: "secondary" }}>\\</Text>
        <Text sx={{ variant: "text.body", ml: "md" }}>last updated 21.04.06</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
