import PropTypes from 'prop-types';

const CategoryButton = ({ category, handleChange }) => (
  <button type="button" className="cat-btn" onClick={handleChange}>{category}</button>
);

CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategoryButton;
