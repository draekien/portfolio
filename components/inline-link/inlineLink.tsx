/** @jsxImportSource theme-ui */
import React from "react";

export interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
}

const InlineLink: React.FC<InlineLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        variant: "text.body",
        textDecoration: "none",
        borderBottom: "1px solid",
        borderBottomColor: "secondary",
        color: "inherit",
        transition: "all 100ms",
        outline: "none",
        ":hover, :focus": {
          backgroundColor: "b-300",
          borderTopLeftRadius: "md",
          borderTopRightRadius: "md",
        },
      }}
      data-tip={href}>
      {children}
    </a>
  );
};

export default InlineLink;
