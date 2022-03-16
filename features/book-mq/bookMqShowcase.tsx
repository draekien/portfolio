/** @jsxImportSource theme-ui */
import React from 'react';
import { Showcase } from '../../components';
import { Text } from 'theme-ui';
import { showcaseDescriptionBodyCss } from '../common/common.styles';

const images = [
  {
    src: 'https://i.imgur.com/7v76QNZ.png',
    mobileSrc: 'https://i.imgur.com/frGowru.png',
    alt: 'The landing page of Book MQ',
  },
  {
    src: 'https://i.imgur.com/ABjOGOa.png',
    mobileSrc: 'https://i.imgur.com/AnF8fKm.png',
    alt: 'The marketing page for Book MQ that explains how Book MQ works',
  },
  {
    src: 'https://i.imgur.com/nExTnSt.png',
    mobileSrc: 'https://i.imgur.com/QXuLMlk.png',
    alt: 'The login page for Book MQ',
  },
  {
    src: 'https://i.imgur.com/WrRtfik.png',
    mobileSrc: 'https://i.imgur.com/lXxyiTB.png',
    alt: 'The events page of Book MQ where you would see events created by other users',
  },
  {
    src: 'https://i.imgur.com/f4sBIAR.png',
    mobileSrc: 'https://i.imgur.com/frGowru.png',
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
