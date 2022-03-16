/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import * as React from "react";
import * as styles from "./footer.styles";

export const Footer: React.FC = () => {
  return (
    <Flex as="footer" sx={styles.footerContainerCss}>
      <Text sx={styles.capsTextCss}>DESIGNED IN ADOBE XD & BUILT WITH NEXT JS</Text>
      <Flex>
        <Text sx={styles.bodyTextLeftCss}>&copy; William Pei</Text>
        <Text sx={styles.bodyTextDividerCss}>\\</Text>
        <Text sx={styles.bodyTextRightCss}>last updated 21.06.28</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
