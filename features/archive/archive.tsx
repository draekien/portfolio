import { Anchor, Text } from '@waystone/ui';
import Link from 'next/link';
import { Flex } from 'theme-ui';

export const ArchivedProjectsLink = () => {
  return (
    <Flex sx={{ justifyContent: 'center', mt: '5vmin' }}>
      <Link href="/archive" passHref legacyBehavior>
        <Anchor>
          <Text variant="eyebrow" inline>
            Load More
          </Text>
        </Anchor>
      </Link>
    </Flex>
  );
};

export default ArchivedProjectsLink;
