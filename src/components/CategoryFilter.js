import PropTypes from 'prop-types';
import { bookCategories } from '../container/BooksForm';
import CategoryButton from './CategoryButton';

const CategoryFilter = ({ handleChange }) => {
  const renderCategoryButton = cat => (
    <CategoryButton category={cat} key={cat} handleChange={handleChange} />
  );

  return (
    <section className="cat-btns">
      <span className="filter-title">Filter by Categories:-</span>
      <button type="button" className="default" onClick={handleChange}>All</button>
      { bookCategories && bookCategories.map(cat => (
        renderCategoryButton(cat)
      ))}
    </section>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
