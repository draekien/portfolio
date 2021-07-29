/** @jsxImportSource theme-ui */
import React from "react";
import Tippy from "@tippyjs/react/headless";
import { followCursor } from "tippy.js";

export interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  if (text === "") return <React.Fragment>{children}</React.Fragment>;

  return (
    <Tippy
      render={(attrs) => (
        <div sx={{ backgroundColor: "b-300", px: "sm", py: "xs", borderRadius: "sm", color: "secondary", fontSize: "small" }} {...attrs}>
          {text}
        </div>
      )}
      followCursor={true}
      plugins={[followCursor]}>
      <span>{children}</span>
    </Tippy>
  );
};

export default Tooltip;
