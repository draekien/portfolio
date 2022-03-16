/** @jsxImportSource theme-ui */
import React from 'react';
import { Showcase, InlineLink } from '../../components';
import { Text } from 'theme-ui';
import { showcaseDescriptionBodyCss } from '../common/common.styles';

const images = [
  {
    src: 'https://i.imgur.com/j7Eofgt.png',
    mobileSrc: 'https://i.imgur.com/j7Eofgt.png',
    alt: 'Complex usage of Fluent Constructor Assertions',
  },
  {
    src: 'https://i.imgur.com/6f9oop0.png',
    mobileSrc: 'https://i.imgur.com/6f9oop0.png',
    alt: 'Simple usage of Fluent Constructor Assertions',
  },
];
const labels = [
  { key: 'Language', value: 'C#' },
  { key: 'Built', value: '.NET Standard 2.0' },
  { key: 'Used', value: 'Unit Testing' },
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

export const FluentConstructorAssertionsShowcase: React.FC = () => {
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
