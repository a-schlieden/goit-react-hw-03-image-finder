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
      {/* <p>{bigImg}</p> */}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
