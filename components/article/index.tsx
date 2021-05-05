/** @jsxImportSource theme-ui */

import { Flex } from "@theme-ui/components";

export interface ArticleProps {
  title: string;
  author: string;
  published: string;
  coverPhoto: string;
  coverAlt: string;
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ title, author, published, coverPhoto, coverAlt, children }) => {
  return (
    <Flex sx={{ width: "100%", justifyContent: "center" }}>
      <article sx={{ display: "flex", flexFlow: "column", maxWidth: ["20rem", "40rem", "60rem"], variant: "text.body" }}>
        <img sx={{}} src={coverPhoto} alt={coverAlt} />
        <section sx={{ width: "100%" }}>
          <h1 sx={{ variant: "text.heading", fontSize: "h2" }}>{title}</h1>
          <sub sx={{ variant: "text.heading", fontSize: "small" }}>
            {author} \\ {published}
          </sub>
        </section>
        {children}
      </article>
    </Flex>
  );
};

export default Article;
