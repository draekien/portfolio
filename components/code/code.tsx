/** @jsxImportSource theme-ui */
import { Code as WaystoneCode } from '@waystone/ui';
import { PropsWithChildren } from 'react';

/**
 * Renders the provided children with the correct styling of an inline piece of code
 * @param props - the component props
 * @param props.children - the code to render
 * @returns the code component
 */
export const Code = ({ children }: PropsWithChildren) => {
  return <WaystoneCode>{children}</WaystoneCode>;
};

export default Code;
