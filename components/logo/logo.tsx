/** @jsxImportSource theme-ui */
import { Box } from "@theme-ui/components";
import Link from "next/link";
import * as styles from "./logo.styles";

export const Logo: React.FC = () => {
  return (
    <Box sx={styles.logoContainerCss}>
      <Link href="/">
        <img sx={styles.logoSvgCss} src="/mark.svg" alt="The logo of William Pei" title="Go to Home Page" />
      </Link>
    </Box>
  );
};

export default Logo;
