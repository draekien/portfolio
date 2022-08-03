/** @jsxImportSource theme-ui */
import { Text } from '@theme-ui/components';
import Head from 'next/head';
import { Article, Breadcrumbs, CardLink, HeaderBar } from '../../../components';

const DesignPatternsPage: React.FC = () => {
  return (
    <div sx={{ mb: 'xl' }}>
      <Head>
        <title>Design Patterns | Code With Me | William Pei</title>
      </Head>
      <main sx={{ pb: 'xl' }}>
        <HeaderBar title={<span>CODE WITH ME</span>} />
        <Breadcrumbs
          crumbs={[
            { title: 'Home', href: '/' },
            { title: 'Code with me', href: '/blog' },
            { title: 'Design Patterns' },
          ]}
        />
        <Article title="Design Patterns" coverPhoto="/blogs/design.svg" coverAlt="">
          <CardLink
            href="/blog/designpatterns/factoryPattern"
            title="Factory Pattern"
            fullWidth>
            <Text as="p" variant="text.body" sx={{ fontSize: 'p' }}>
              A pattern that allows you to create objects without having to specify the
              exact class of the object that will be created.
            </Text>
          </CardLink>
        </Article>
      </main>
    </div>
  );
};

export default DesignPatternsPage;
