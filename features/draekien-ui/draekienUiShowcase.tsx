/** @jsxImportSource theme-ui */
import React from 'react';
import { Showcase } from '../../components';
import { Text } from 'theme-ui';
import { showcaseDescriptionBodyCss } from '../common/common.styles';

const images = [
  {
    src: '/draekien-ui/desktop-1.png',
    mobileSrc: '/draekien-ui/mobile-1.png',
    alt: 'An example website made using Draekien UI',
  },
  {
    src: '/draekien-ui/desktop-2.png',
    mobileSrc: '/draekien-ui/mobile-2.png',
    alt: 'The datepicker input component in the Draekien UI Storybook',
  },
  {
    src: '/draekien-ui/desktop-3.png',
    mobileSrc: '/draekien-ui/mobile-3.png',
    alt: 'The card component in the Draekien UI Storybook',
  },
  {
    src: '/draekien-ui/desktop-4.png',
    mobileSrc: '/draekien-ui/mobile-4.png',
    alt: 'The button component in the Draekien UI Storybook',
  },
];

const labels = [
  { key: 'Designed', value: 'Adobe XD' },
  { key: 'Built', value: 'React, Theme-UI' },
  { key: 'Deployed', value: 'Chromatic' },
  { key: 'Installed', value: 'npm install draekien-ui (obsolete)' },
];

const carousel = { images };
const headers = {
  heading: 'DRAEKIEN UI',
  href: 'https://github.com/draekien/draekien-ui',
  labels,
};

export const DraekienUiShowcase: React.FC = () => {
  return (
    <Showcase carousel={carousel} headers={headers}>
      <Text sx={showcaseDescriptionBodyCss}>
        I created this styled UI library as a way to familiarise myself with front-end
        technologies that are being used at my workplace. Creating this library has also
        allowed me to explore the CI/CD pipeline offered by GitHub via Actions, for
        instance automatic storybook deployment, and package publishing. I went for a
        super clean asthetic to allow the library to be used in a wide range of
        situations.
      </Text>
    </Showcase>
  );
};

export default DraekienUiShowcase;
