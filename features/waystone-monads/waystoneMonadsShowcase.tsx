/** @jsxImportSource theme-ui */
import { Code } from '@waystone/ui';
import { Text } from 'theme-ui';
import { InlineLink, Showcase } from '../../components';
import slide1 from '../../public/waystone-monads/slide-1.png';
import { showcaseDescriptionBodyCss } from '../common/common.styles';

const images = [
  {
    src: slide1,
    mobileSrc: slide1,
    alt: 'An introduction to Waystone.Monads',
  },
];

const labels = [
  { key: 'Language', value: 'C#' },
  { key: 'Built For', value: '.NET Standard 2.0, .NET LTS' },
  { key: 'Usage', value: 'Functional Programming' },
  {
    key: 'Documentation',
    value: <InlineLink href="https://draekien-industries.wpei.me">GitBook</InlineLink>,
  },
];

const carousel = { images };
const headers = {
  heading: 'WAYSTONE MONADS',
  href: 'https://github.com/draekien-industries/waystone-dotnet',
  labels,
};

export const WaystoneMonadsShowcase = () => {
  return (
    <Showcase carousel={carousel} headers={headers}>
      <Text sx={showcaseDescriptionBodyCss}>
        Waystone.Monads is a lightweight, idiomatic C# library that implements two
        fundamental functional types: <Code>Option&lt;T&gt;</Code> and{' '}
        <Code>Result&lt;T, E&gt;</Code>. It is inspired by Rust&apos;s{' '}
        <Code>std::option</Code> and <Code>std::result</Code> types and brings their power
        and functionality into the world of C#.
      </Text>
    </Showcase>
  );
};

export default WaystoneMonadsShowcase;
