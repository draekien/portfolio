/** @jsxImportSource theme-ui */
import React from 'react';
import { Code as WaystoneCode } from '@waystone/components';

/**
 * Renders the provided children with the correct styling of an inline piece of code
 * @param props - the component props
 * @param props.children - the code to render
 * @returns the code component
 */
export const Code: React.FC = ({ children }) => {
  return <WaystoneCode>{children}</WaystoneCode>;
};

export default Code;
