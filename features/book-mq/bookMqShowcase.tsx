/** @jsxImportSource theme-ui */
import React from 'react';
import { Showcase } from '../../components';
import { Text } from 'theme-ui';
import { showcaseDescriptionBodyCss } from '../common/common.styles';

const images = [
  {
    src: '/book-mq/desktop-1.png',
    mobileSrc: '/book-mq/mobile-1.png',
    alt: 'The landing page of Book MQ',
  },
  {
    src: '/book-mq/desktop-2.png',
    mobileSrc: '/book-mq/mobile-2.png',
    alt: 'The marketing page for Book MQ that explains how Book MQ works',
  },
  {
    src: '/book-mq/desktop-3.png',
    mobileSrc: '/book-mq/mobile-3.png',
    alt: 'The login page for Book MQ',
  },
  {
    src: '/book-mq/desktop-4.png',
    mobileSrc: '/book-mq/mobile-4.png',
    alt: 'The events page of Book MQ where you would see events created by other users',
  },
  {
    src: '/book-mq/desktop-5.png',
    mobileSrc: '',
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
