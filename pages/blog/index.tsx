/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import Head from "next/head";
import { CardLink } from "../../components";
import HeaderBar from "../../components/header-bar/headerBar";

const BlogPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Code With Me | William Pei</title>
      </Head>
      <main>
        <HeaderBar title={<span>CODE WITH ME</span>} />
        <Flex>
          <CardLink href="/blog/csharp" title="C#">
            <Text as="p" variant="text.body" sx={{ fontSize: "p" }}>
              Explore C# with me as I delve into the world of .NET Core Web APIs.
            </Text>
          </CardLink>
        </Flex>
      </main>
    </div>
  );
};

export default BlogPage;
