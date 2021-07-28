/** @jsxImportSource theme-ui */
import * as React from "react";
import * as styles from "./mailDivider.styles";
import Link from "next/link";
import { Flex } from "@theme-ui/components";
import { MdEmail, MdCode } from "react-icons/md";

const MailDivider: React.FC = () => {
  return (
    <Flex as="nav" sx={styles.mailDividerContainerCss}>
      <a sx={styles.iconLinkCss} href="mailto:hello@wpei.me" target="_blank" data-tip="Say hello to William Pei" aria-label="Email William Pei">
        <MdEmail sx={styles.iconCss} />
      </a>
      <Link href="/blog">
        <a sx={styles.iconLinkCss} data-tip="Code With Me (Blog)" aria-label="Code With Me">
          <MdCode sx={styles.iconCss} />
        </a>
      </Link>
      <hr sx={styles.hrCss} />
    </Flex>
  );
};

export default MailDivider;
