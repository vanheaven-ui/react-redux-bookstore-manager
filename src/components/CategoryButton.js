import PropTypes from 'prop-types';

const CategoryButton = ({ category, handleChange }) => {
  console.log(category);
  return (
    <button type="button" onClick={handleChange}>{category}</button>
  );
};

CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategoryButton;
