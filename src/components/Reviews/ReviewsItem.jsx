import { PropTypes } from 'prop-types';

export const ReviewsItem = ({ name, text }) => {
  return (
    <>
      <li>
        <h4>Author: {name}</h4>
        <p>{text}</p>
      </li>
    </>
  );
};

ReviewsItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
