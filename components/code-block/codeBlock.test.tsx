import { render } from '@testing-library/react';
import { CodeBlock, Waystone } from '@waystone/ui';

describe('CodeBlock', () => {
  it('should match snapshot', () => {
    const { container } = render(<CodeBlock language="bash">npm i</CodeBlock>, {
      wrapper: Waystone,
    });

    expect(container).toMatchSnapshot();
  });
});
