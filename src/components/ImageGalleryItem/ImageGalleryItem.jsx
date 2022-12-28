import React from 'react';
import PropTypes from 'prop-types';

import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ img, bigImg, onImgClick }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={img}
        alt=""
        onClick={() => onImgClick(bigImg)}
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
