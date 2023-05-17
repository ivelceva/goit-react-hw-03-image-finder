import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import css from './Gallery.module.css';

export const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className={css.gallery}>
      {hits.map(hit => {
        return <ImageGalleryItem key={hit.id} hit={hit} onClick={onClick} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
