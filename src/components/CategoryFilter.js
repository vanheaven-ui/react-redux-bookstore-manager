import PropTypes from 'prop-types';
import { bookCategories } from '../container/BooksForm';
import CategoryButton from './CategoryButton';

console.log(bookCategories);

const CategoryFilter = ({ handleChange }) => {
  const renderCategoryButton = cat => (
    <CategoryButton category={cat} key={cat} handleChange={handleChange} />
  );

  return (
    <section className="cat-btns">
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
