/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import * as React from "react";
import * as styles from "./headerBar.styles";
import Logo from "../logo/logo";

export interface HeaderBarProps {
  /** The title of the page to display */
  title: React.ReactNode;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <Flex sx={styles.headerBarContainerCss}>
      <Text sx={styles.nameCss}>{title}</Text>
      <Logo />
    </Flex>
  );
};

export default HeaderBar;
