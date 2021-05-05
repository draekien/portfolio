/** @jsxImportSource theme-ui */
import { Text } from "@theme-ui/components";
import Head from "next/head";
import HeaderBar from "../../components/header-bar/headerBar";

const BlogPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Code With Me | William Pei</title>
      </Head>
      <main>
        <HeaderBar title={<span>CODE WITH ME</span>} />
        <div sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "column" }}>
          <img sx={{ width: ["75%", "50%"], my: "xl" }} src="/illustrations/under-construction.svg" />
          <Text sx={{ variant: "text.caps" }}>UNDER CONSTRUCTION</Text>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
