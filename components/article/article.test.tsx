import { render } from '@testing-library/react';
import Article from './article';

describe('Article', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Article
        {...{
          title: 'test',
          author: 'John Doe',
          published: '2024-01-01',
          coverPhoto: 'https://example.com',
          coverAlt: 'example',
        }}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
