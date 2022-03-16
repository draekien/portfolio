/** @jsxImportSource theme-ui */
import { Flex, Text } from "@theme-ui/components";
import Head from "next/head";
import { CardLink } from "../../../components";
import HeaderBar from "../../../components/header-bar/headerBar";

const CSharpPage: React.FC = () => {
  return (
    <div sx={{ mb: "xl" }}>
      <Head>
        <title>Code With Me | William Pei</title>
      </Head>
      <main sx={{ pb: "xl" }}>
        <HeaderBar title={<span>CODE WITH ME</span>} />
        <Flex sx={{ width: "100%", justifyContent: "center", mt: "sm", alignItems: "center", flexFlow: "column" }}>
          <CardLink href="/blog/csharp/unitTestingConstructors" title="Fluent Constructor Assertions">
            <Text as="p" variant="text.body" sx={{ fontSize: "p" }}>
              A unit testing library for testing constructors on your way to 100% test coverage.
            </Text>
          </CardLink>
        </Flex>
      </main>
    </div>
  );
};

export default CSharpPage;
