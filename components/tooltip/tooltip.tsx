/** @jsxImportSource theme-ui */
import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { followCursor } from 'tippy.js';
import { PropsWithChildren } from 'react';

export interface TooltipProps {
  text: string;
}

export const Tooltip = ({ text, children }: PropsWithChildren<TooltipProps>) => {
  if (text === '') return <React.Fragment>{children}</React.Fragment>;

  return (
    <Tippy
      render={(attrs) => (
        <div
          sx={{
            backgroundColor: 'muted',
            px: 'sm',
            py: 'xs',
            borderRadius: 'sm',
            color: 'secondary',
            fontSize: 'small',
          }}
          {...attrs}>
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
