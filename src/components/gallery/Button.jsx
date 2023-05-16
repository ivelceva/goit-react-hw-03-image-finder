import PropTypes from 'prop-types';
import css from './Gallery.module.css';

export const LoadMore = ({ onClick }) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
