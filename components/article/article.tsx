/** @jsxImportSource theme-ui */
import Image from "next/image";
import { Flex } from "@theme-ui/components";
import { Heading } from "../heading/heading";

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
    <Flex sx={{ width: "100%", justifyContent: "center", mt: "sm", alignItems: "center", flexFlow: "column" }}>
      <div sx={{ height: ["10em", "15em", "20em"], width: "100%", backgroundColor: "p-300" }}>
        <div sx={{ position: "relative", height: "100%", width: "100%", marginTop: "md" }}>
          <Image src={coverPhoto} alt={coverAlt} layout="fill" objectFit="none" objectPosition="50% 0%" priority />
        </div>
      </div>
      <article sx={{ display: "flex", flexFlow: "column", width: "100%", maxWidth: ["20rem", "40rem", "60rem"], variant: "text.body" }}>
        <section sx={{ width: "100%", mb: "xl" }}>
          <div sx={{ mt: "xl", mb: "sm" }}>
            <Heading variant="h2">{title}</Heading>
          </div>
          <sub sx={{ variant: "text.heading", fontSize: "small" }}>
            {author} <span sx={{ color: "secondary", px: "sm" }}>\\</span> {published}
          </sub>
        </section>
        {children}
      </article>
    </Flex>
  );
};

export default Article;
