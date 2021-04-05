/** @jsxImportSource theme-ui */
import { Flex, Image, Text } from "@theme-ui/components";

const Introduction: React.FC = () => {
  return (
    <Flex>
      <Flex sx={{ flexFlow: "column", m: "lg" }}>
        <Text sx={{ variant: "text.heading", fontSize: "h4", mb: "xs", fontWeight: "normal" }}>William Pei</Text>
        <Text sx={{ fontWeight: "thin", mb: "md" }}>/ˈwɪljəm/ /peɪ/</Text>
        <Text as="em" sx={{ fontStyle: "italic", fontWeight: "thin", mb: "xs" }}>
          noun
        </Text>
        <Text sx={{ variant: "text.body", ml: "md" }}>
          A fullstack developer for{" "}
          <a href="https://www.infotrack.com.au" target="_blank">
            InfoTrack AU
          </a>{" "}
          in Sydney, Australia. Regularly dabbles in UI/UX for sheer enjoyment. Currently creating a themed component library for React JS.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Introduction;
