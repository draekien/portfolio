/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import { Text } from '@waystone/components';
import CoverPhoto from '../cover-photo/coverPhoto';

/** Props for the {@link Article} component */
export interface ArticleProps {
  /** The title of the article */
  title: React.ReactNode;
  /** An optional author */
  author?: string;
  /** An optional published date string */
  published?: string;
  /** The cover photo path */
  coverPhoto: string;
  /** The cover photo alt string */
  coverAlt: string;
}

/**
 * A pre-defined layout for a blog article
 * @param props - the {@link ArticleProps}
 * @param props.title - the title of the article
 * @param [props.author] - the author of the article
 * @param [props.published] - the publishing date of the article
 * @param props.coverPhoto - the path to the cover photo
 * @param props.coverAlt - the alt text to display when the cover photo fails to load
 * @returns the article component
 */
export const Article: React.FC<ArticleProps> = ({
  title,
  author,
  published,
  coverPhoto,
  coverAlt,
  children,
}) => {
  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'center',
        mt: 'sm',
        alignItems: 'center',
        flexFlow: 'column',
      }}>
      <CoverPhoto src={coverPhoto} alt={coverAlt} />
      <article
        sx={{
          display: 'flex',
          flexFlow: 'column',
          width: '100%',
          maxWidth: ['20rem', '40rem', '60rem'],
          variant: 'text.body',
        }}>
        <section sx={{ width: '100%', mb: 'xl' }}>
          <div sx={{ mt: 'xl', mb: 'sm' }}>
            <Text as="h1" variant="heading">
              {title}
            </Text>
          </div>
          <sub>
            {author && (
              <Text variant="subtitle" inline>
                {author}
              </Text>
            )}
            {published && (
              <Text variant="subtitle" color="secondary" sx={{ px: 'sm' }} inline>
                \\
              </Text>
            )}
            {published && (
              <Text variant="subtitle" inline>
                {published}
              </Text>
            )}
          </sub>
        </section>
        {children}
      </article>
    </Flex>
  );
};

export default Article;
