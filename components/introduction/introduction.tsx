/** @jsxImportSource theme-ui */
import { Flex, Image, Text } from "@theme-ui/components";

const Introduction: React.FC = () => {
  return (
    <Flex sx={{ flexFlow: "column", m: "xl", height: "40rem", justifyContent: "center" }}>
      <Flex>
        <Text sx={{ variant: "text.heading", fontSize: "hero", lineHeight: "hero", pr: "lg" }}>.NET DEVELOPER</Text>
        <Text sx={{ variant: "text.heading", fontSize: "hero", lineHeight: "hero", color: "muted" }}>AT</Text>
      </Flex>
      <Flex>
        <Text sx={{ variant: "text.heading", fontSize: "hero", lineHeight: "hero", pr: "lg" }}>INFOTRACK</Text>
        <Text sx={{ variant: "text.heading", fontSize: "hero", lineHeight: "hero", color: "muted" }}>IN</Text>
      </Flex>
      <Flex>
        <Text sx={{ variant: "text.heading", fontSize: "hero", lineHeight: "hero", pr: "lg" }}>SYDNEY</Text>
        <Text sx={{ variant: "text.heading", fontSize: "hero", lineHeight: "hero", color: "muted" }}>AUSTRALIA</Text>
      </Flex>
    </Flex>
  );
};

export default Introduction;
