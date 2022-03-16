/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";
import * as React from "react";
import * as styles from "./loading.styles";

export const Loading: React.FC = () => {
  return (
    <Flex sx={styles.loadingContainerCss}>
      <img sx={styles.loadingImgCss} src="/loading-icon.svg" alt="Loading..." />
    </Flex>
  );
};

export default Loading;
