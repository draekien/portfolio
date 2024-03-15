import { render } from '@testing-library/react';
import { Waystone } from '@waystone/ui';
import CardLink from './cardLink';

describe('CardLink', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <CardLink href="https://example.com" title="Example.com" />,
      {
        wrapper: Waystone,
      }
    );

    expect(container).toMatchSnapshot();
  });
});
