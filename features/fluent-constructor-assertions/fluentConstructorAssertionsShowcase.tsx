/** @jsxImportSource theme-ui */
import { Text } from 'theme-ui';
import { InlineLink, Showcase } from '../../components';
import desktop1 from '../../public/fluent-constructor/desktop-1.png';
import desktop2 from '../../public/fluent-constructor/desktop-2.png';
import { showcaseDescriptionBodyCss } from '../common/common.styles';

const images = [
  {
    src: desktop1,
    mobileSrc: desktop1,
    alt: 'Complex usage of Fluent Constructor Assertions',
  },
  {
    src: desktop2,
    mobileSrc: desktop2,
    alt: 'Simple usage of Fluent Constructor Assertions',
  },
];

const labels = [
  { key: 'Language', value: 'C#' },
  { key: 'Built', value: '.NET Standard 2.0' },
  { key: 'Usage', value: 'Unit Testing' },
  {
    key: 'Blog',
    value: (
      <InlineLink href="/blog/csharp/unitTestingConstructors" hideTooltip internal>
        Code With Me
      </InlineLink>
    ),
  },
];

const carousel = { images };
const headers = {
  heading: 'FLUENT CONSTRUCTOR ASSERTIONS',
  href: 'https://github.com/draekien/FluentConstructorAssertions',
  labels,
};

export const FluentConstructorAssertionsShowcase = () => {
  return (
    <Showcase carousel={carousel} headers={headers}>
      <Text sx={showcaseDescriptionBodyCss}>
        This is a library for fluently writing constructor unit tests and assertions. The
        reason I created this was because I found it very clunky to write constructor
        tests - especially for constructors where lots of exceptions are thrown. The
        classic scenario is a constructor that takes 3 - 4 arguments and null checks all
        of them.
      </Text>
    </Showcase>
  );
};

export default FluentConstructorAssertionsShowcase;
