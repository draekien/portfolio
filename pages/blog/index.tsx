/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import Head from "next/head";
import { Breadcrumbs, IllustrationLink, HeaderBar } from "../../components";

const BlogPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Blog | William Pei</title>
      </Head>
      <main>
        <HeaderBar title={<span>CODE WITH ME</span>} />
        <Breadcrumbs crumbs={[{ title: "Home", href: "/" }]} />
        <Flex sx={{ padding: ["sm", "md", "xl"] }}>
          <IllustrationLink href="/blog/csharp" title="CSharp" src="/blogs/blogging.svg" alt="A blogging illustration">
            <Text as="p" variant="text.body" sx={{ fontSize: "p" }}>
              Explore C# with me as I delve into the world of .NET Core Web APIs.
            </Text>
          </IllustrationLink>
        </Flex>
      </main>
    </div>
  );
};

export default BlogPage;
