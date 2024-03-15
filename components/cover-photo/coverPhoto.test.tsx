import { render } from '@testing-library/react';
import { Waystone } from '@waystone/ui';
import CoverPhoto from './coverPhoto';

describe('CoverPhoto', () => {
  it('should match snapshot', () => {
    const { container } = render(<CoverPhoto src="https://example.com" alt="example" />, {
      wrapper: Waystone,
    });

    expect(container).toMatchSnapshot();
  });
});
