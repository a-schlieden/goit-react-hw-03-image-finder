import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ul className={style.ImageGallery}>
      {images.map(item => (
        <ImageGalleryItem
          img={item.webformatURL}
          key={item.id}
          bigImg={item.largeImageURL}
          onImgClick={onImgClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      key: PropTypes.string,
      bigImg: PropTypes.string,
    })
  ),
  onImgClick: PropTypes.func,
};
