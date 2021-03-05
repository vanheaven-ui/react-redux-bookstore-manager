import PropTypes from 'prop-types';
import { bookCategories } from '../container/BooksForm';

const CategoryFilter = ({ handleChange }) => (
  <select defaultValue="ALL" onChange={handleChange}>
    <option value="ALL">ALL</option>
    { bookCategories && bookCategories.map(cat => (
      <option value={cat} key={cat}>{cat}</option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
