/** @jsxImportSource theme-ui */
import { Text } from "@theme-ui/components";
import Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FullStack Developer | William Pei</title>
      </Head>
      <main>
        <Text sx={{ variant: "text.heading" }}>William Pei</Text>
        <Text sx={{ variant: "text.body" }}>.NET DEVELOPER</Text>
      </main>
    </div>
  );
};

export default HomePage;
