/** @jsxImportSource theme-ui */
import React from 'react';
import { Showcase } from '../../components';
import { Text } from 'theme-ui';
import { showcaseDescriptionBodyCss } from '../common/common.styles';
import desktop1 from '../../public/book-mq/desktop-1.png';
import desktop2 from '../../public/book-mq/desktop-2.png';
import desktop3 from '../../public/book-mq/desktop-3.png';
import desktop4 from '../../public/book-mq/desktop-4.png';
import desktop5 from '../../public/book-mq/desktop-5.png';
import mobile1 from '../../public/book-mq/mobile-1.png';
import mobile2 from '../../public/book-mq/mobile-2.png';
import mobile3 from '../../public/book-mq/mobile-3.png';
import mobile4 from '../../public/book-mq/mobile-4.png';

const images = [
  {
    src: desktop1,
    mobileSrc: mobile1,
    alt: 'The landing page of Book MQ',
  },
  {
    src: desktop2,
    mobileSrc: mobile2,
    alt: 'The marketing page for Book MQ that explains how Book MQ works',
  },
  {
    src: desktop3,
    mobileSrc: mobile3,
    alt: 'The login page for Book MQ',
  },
  {
    src: desktop4,
    mobileSrc: mobile4,
    alt: 'The events page of Book MQ where you would see events created by other users',
  },
  {
    src: desktop5,
    alt: 'The profile page of Book MQ where you can view your own events',
  },
];

const labels = [
  { key: 'Designed', value: 'Figma' },
  { key: 'Illustrated', value: 'unDraw' },
  { key: 'Built', value: 'React, Express, Mongo' },
  { key: 'Deployed', value: 'Heroku' },
];

const headers = {
  heading: 'BOOK MQ',
  href: 'https://stark-sierra-09793.herokuapp.com/',
  labels,
};
const carousel = { images };

export const BookMqShowcase: React.FC = () => {
  return (
    <Showcase carousel={carousel} headers={headers}>
      <Text sx={showcaseDescriptionBodyCss}>
        Macquarie University Advanced Web Development final end of course group project.
        We were instructed to create an MVP for a website that allowed user registration
        and user interactions.
      </Text>
      <Text sx={showcaseDescriptionBodyCss}>
        I was responsible for the creation of the designs as well as the backend API using
        Express JS. I also assisted heavily in the creation of the frontend application
        and setup of our MongoDB.
      </Text>
    </Showcase>
  );
};

export default BookMqShowcase;
