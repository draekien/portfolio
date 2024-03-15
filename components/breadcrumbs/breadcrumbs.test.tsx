import { render } from '@testing-library/react';
import { Waystone } from '@waystone/ui';
import { Breadcrumbs } from './breadcrumbs';

describe('Breadcrumbs', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Breadcrumbs
        crumbs={[
          {
            title: 'test',
            href: 'https://example.com',
          },
        ]}
      />,
      {
        wrapper: Waystone,
      }
    );

    expect(container).toMatchSnapshot();
  });
});
