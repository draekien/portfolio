/** @jsxImportSource theme-ui */
import { Box } from "@theme-ui/components";
import * as React from "react";

const Logo: React.FC = () => {
  return (
    <Box sx={{ height: "4rem", width: "4rem" }}>
      <img sx={{ width: "100%", height: "100%" }} src="/mark.svg" alt="The logo of William Pei" />
    </Box>
  );
};

export default Logo;
