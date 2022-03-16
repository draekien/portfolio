/** @jsxImportSource theme-ui */
import { Box } from "@theme-ui/components";
import Tooltip from "../tooltip/tooltip";
import * as styles from "./logo.styles";

export const Logo: React.FC = () => {
  return (
    <Box sx={styles.logoContainerCss}>
      <Tooltip text="View the source code for this portfolio">
        <a href="https://github.com/draekien/portfolio" target="_blank" rel="noopener noreferrer">
          <img sx={styles.logoSvgCss} src="/mark.svg" alt="The logo of William Pei" />
        </a>
      </Tooltip>
    </Box>
  );
};

export default Logo;
