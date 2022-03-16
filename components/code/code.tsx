/** @jsxImportSource theme-ui */
import React from "react";

export interface CodeProps {
  children: React.ReactNode;
}

export const Code: React.FC<CodeProps> = ({ children }) => {
  return <code sx={{ variant: "text.mono", backgroundColor: "b-500", borderRadius: "sm", px: "xs", color: "secondary" }}>{children}</code>;
};

export default Code;
