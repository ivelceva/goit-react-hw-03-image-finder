import React from 'react';
import css from './Gallery.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ hit, onClick }) => {
  const { webformatURL, largeImageURL } = hit;
  return (
    <li className={css.item}>
      <img
        className={css.image}
        src={webformatURL}
        alt=""
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  hit: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
