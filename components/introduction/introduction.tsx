/** @jsxImportSource theme-ui */
import { Flex, Text } from '@theme-ui/components';
import * as styles from './introduction.styles';

export const Introduction: React.FC = () => {
  return (
    <Flex as="h1" sx={styles.introductionContainerCss}>
      <Flex>
        <Text sx={styles.headingTextCss}>.NET DEVELOPER</Text>
        <Text sx={styles.headingTextMutedCss}>AT</Text>
      </Flex>
      <Flex>
        <Text sx={styles.headingTextCss}>INFOTRACK</Text>
        <Text sx={styles.headingTextMutedCss}>IN</Text>
      </Flex>
      <Flex>
        <Text sx={styles.headingTextCss}>SYDNEY</Text>
        <Text sx={styles.headingTextMutedCss}>AUSTRALIA</Text>
      </Flex>
    </Flex>
  );
};

export default Introduction;
