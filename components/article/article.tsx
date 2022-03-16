/** @jsxImportSource theme-ui */
import { Flex } from "@theme-ui/components";
import { Heading } from "../heading/heading";
import CoverPhoto from "../cover-photo/coverPhoto";

export interface ArticleProps {
  title: React.ReactNode;
  author?: string;
  published?: string;
  coverPhoto: string;
  coverAlt: string;
}

export const Article: React.FC<ArticleProps> = ({ title, author, published, coverPhoto, coverAlt, children }) => {
  return (
    <Flex sx={{ width: "100%", justifyContent: "center", mt: "sm", alignItems: "center", flexFlow: "column" }}>
      <CoverPhoto src={coverPhoto} alt={coverAlt} />
      <article sx={{ display: "flex", flexFlow: "column", width: "100%", maxWidth: ["20rem", "40rem", "60rem"], variant: "text.body" }}>
        <section sx={{ width: "100%", mb: "xl" }}>
          <div sx={{ mt: "xl", mb: "sm" }}>
            <Heading variant="h2">{title}</Heading>
          </div>
          {(author || published) && (
            <sub sx={{ variant: "text.heading", fontSize: "small" }}>
              {author} <span sx={{ color: "secondary", px: "sm" }}>\\</span> {published}
            </sub>
          )}
        </section>
        {children}
      </article>
    </Flex>
  );
};

export default Article;
