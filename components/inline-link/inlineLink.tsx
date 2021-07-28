/** @jsxImportSource theme-ui */
import React from "react";
import Link from "next/link";

export interface InlineLinkProps {
  href: string;
  children: React.ReactNode;
  hideTooltip?: boolean;
  internal?: boolean;
}

const InlineLink: React.FC<InlineLinkProps> = ({ href, children, hideTooltip = false, internal = false }) => {
  if (internal) {
    return (
      <Link href={href}>
        <a
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
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={internal ? "" : "_blank"}
      rel={internal ? "" : "noopener noreferrer"}
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
