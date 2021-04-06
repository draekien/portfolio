/** @jsxImportSource theme-ui */
import { Box } from "@theme-ui/components";
import * as styles from "./logo.styles";

const Logo: React.FC = () => {
  return (
    <Box sx={styles.logoContainerCss}>
      <img sx={styles.logoSvgCss} src="/mark.svg" alt="The logo of William Pei" />
    </Box>
  );
};

export default Logo;
