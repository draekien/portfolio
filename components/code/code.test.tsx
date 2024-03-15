import { render } from '@testing-library/react';
import { Code, Waystone } from '@waystone/ui';

describe('Code', () => {
  it('should match snapshot', () => {
    const { container } = render(<Code>npm i</Code>, {
      wrapper: Waystone,
    });

    expect(container).toMatchSnapshot();
  });
});
