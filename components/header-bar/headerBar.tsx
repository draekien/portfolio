/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import * as React from "react";
import * as styles from "./headerBar.styles";
import Logo from "../logo/logo";

const HeaderBar: React.FC = () => {
  return (
    <Flex sx={styles.headerBarContainerCss}>
      <Text sx={styles.nameCss}>
        WILLIAM
        <br />
        PEI
      </Text>
      <Logo />
    </Flex>
  );
};

export default HeaderBar;
