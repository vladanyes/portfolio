import React from 'react';
import { getStrapiMedia } from '../lib/media';

const Image = ({ image, style }) => {
  // todo:
  const imageUrl = getStrapiMedia(image);

  return <img src={image} alt={image.alternativeText || image.name} style={style} />;
};

export default Image;
