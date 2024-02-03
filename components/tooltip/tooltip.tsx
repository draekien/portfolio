/** @jsxImportSource theme-ui */
import Tippy from '@tippyjs/react/headless';
import React, { PropsWithChildren } from 'react';
import { ThemeUIStyleObject } from 'theme-ui';
import { followCursor } from 'tippy.js';

export interface TooltipProps {
  text: string;
}

const tooltipCss: ThemeUIStyleObject = {
  backgroundColor: 'muted',
  px: 'sm',
  py: 'xs',
  borderRadius: 'sm',
  color: 'secondary',
  fontSize: 'small',
};

export const Tooltip = ({ text, children }: PropsWithChildren<TooltipProps>) => {
  if (text === '') return <React.Fragment>{children}</React.Fragment>;

  return (
    <Tippy
      render={(attrs) => (
        <div sx={tooltipCss} role="tooltip" {...attrs}>
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
