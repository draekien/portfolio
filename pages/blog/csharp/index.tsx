/** @jsxImportSource theme-ui */
import { Text } from "@theme-ui/components";
import Head from "next/head";
import { Article, Breadcrumbs, CardLink, CoverPhoto, HeaderBar } from "../../../components";

const CSharpPage: React.FC = () => {
  return (
    <div sx={{ mb: "xl" }}>
      <Head>
        <title>Code With Me | William Pei</title>
      </Head>
      <main sx={{ pb: "xl" }}>
        <HeaderBar title={<span>CODE WITH ME</span>} />
        <Breadcrumbs
          crumbs={[
            { title: "Home", href: "/" },
            { title: "Code with me", href: "/blog" },
          ]}
        />
        <Article title="CSharp Articles" coverPhoto="/blogs/blog-content.svg" coverAlt="A blogging illustration">
          <CardLink href="/blog/csharp/unitTestingConstructors" title="Fluent Constructor Assertions" fullWidth>
            <Text as="p" variant="text.body" sx={{ fontSize: "p" }}>
              A unit testing library for testing constructors on your way to 100% test coverage.
            </Text>
          </CardLink>
        </Article>
      </main>
    </div>
  );
};

export default CSharpPage;
