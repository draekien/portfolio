/** @jsxImportSource theme-ui */
import React from "react";

export interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
  hideTooltip?: boolean;
}

const InlineLink: React.FC<InlineLinkProps> = ({ href, children, hideTooltip = false }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: "none",
        borderBottom: "1px solid",
        borderBottomColor: "secondary",
        color: "inherit",
        transition: "all 100ms",
        outline: "none",
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        ":hover, :focus": {
          backgroundColor: "b-300",
          borderTopLeftRadius: "md",
          borderTopRightRadius: "md",
        },
      }}
      data-tip={hideTooltip ? "" : href}>
      {children}
    </a>
  );
};

export default InlineLink;
