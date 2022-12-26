// import React, { Component } from 'react';
// import { Vortex } from 'react-loader-spinner';
// import style from './ImageGallery.module.css';

// export class ImageGallery extends Component {
//   static propTypes = {};

// state = {
//    images: [],
//    loading: false,
//   error: null,
//   status: 'idleNothing',
// };

// render() {
//   const { images, error, status } = this.state;
// const totalFeedback = this.totalFeedback()

// if (status === 'idleNothing') {
// }
// if (status === 'noImg') {
//   return <h2> Sorry no img with name {this.props.searchWord} !!!!!</h2>;
// }
// if (status === 'pendingLoad') {
//   return (
//     <Vortex
//       visible={true}
//       height="80"
//       width="80"
//       ariaLabel="vortex-loading"
//       wrapperStyle={{}}
//       wrapperClass="vortex-wrapper"
//       colors={['blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow']}
//     />
//   );
// }

// if (status === 'rejecktedError') {
//   return <h2>{error.message}</h2>;
// }

// if (status === 'resolved') {
//   return (
//     <ul className={style.ImageGallery}>
//       {images.map(item => (
//         <li key={item.id} className="test">
//           <img src={item.webformatURL} alt="img" />
//         </li>
//       ))}
//     </ul>
//   );
// }

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
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
