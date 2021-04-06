/** @jsxImportSource theme-ui */
import * as React from "react";
import * as styles from "./mailDivider.styles";
import { Flex } from "@theme-ui/components";
import { MdEmail } from "react-icons/md";

const MailDivider: React.FC = () => {
  return (
    <Flex sx={styles.mailDividerContainerCss}>
      <a sx={styles.mailLinkCss} href="mailto:hellowp@mailinator.com" target="_blank" title="Email William Pei">
        <MdEmail sx={styles.mailIconCss} />
      </a>
      <hr sx={styles.hrCss} />
    </Flex>
  );
};

export default MailDivider;
