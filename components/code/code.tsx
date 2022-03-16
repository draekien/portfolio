/** @jsxImportSource theme-ui */
import React from 'react';

/**
 * Renders the provided children with the correct styling of an inline piece of code
 * @param props - the component props
 * @param props.children - the code to render
 * @returns the code component
 */
export const Code: React.FC = ({ children }) => {
  return (
    <code
      sx={{
        variant: 'text.mono',
        backgroundColor: 'b-500',
        borderRadius: 'sm',
        px: 'xs',
        color: 'secondary',
      }}
    >
      {children}
    </code>
  );
};

export default Code;
