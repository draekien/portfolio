/** @jsxImportSource theme-ui */
import { Showcase } from '../../components';
import { Text } from 'theme-ui';
import { showcaseDescriptionBodyCss } from '../common/common.styles';
import desktop1 from '../../public/draekien-ui/desktop-1.png';
import desktop2 from '../../public/draekien-ui/desktop-2.png';
import desktop3 from '../../public/draekien-ui/desktop-3.png';
import desktop4 from '../../public/draekien-ui/desktop-4.png';
import mobile1 from '../../public/draekien-ui/mobile-1.png';
import mobile2 from '../../public/draekien-ui/mobile-2.png';
import mobile3 from '../../public/draekien-ui/mobile-3.png';
import mobile4 from '../../public/draekien-ui/mobile-4.png';

const images = [
  {
    src: desktop1,
    mobileSrc: mobile1,
    alt: 'An example website made using Draekien UI',
  },
  {
    src: desktop2,
    mobileSrc: mobile2,
    alt: 'The datepicker input component in the Draekien UI Storybook',
  },
  {
    src: desktop3,
    mobileSrc: mobile3,
    alt: 'The card component in the Draekien UI Storybook',
  },
  {
    src: desktop4,
    mobileSrc: mobile4,
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

export const DraekienUiShowcase = () => {
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
