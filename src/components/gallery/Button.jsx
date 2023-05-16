import PropTypes from 'prop-types';
//import css from './Button.module.css';

export const LoadMore = ({ onClick }) => {
  return (
    <button type="button" className="" onClick={onClick}>
      Load more
    </button>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
