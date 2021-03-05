import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { CHANGE_FILTER } from '../actions';

const BooksList = ({ books, changeFilter, filter }) => {
  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };

  const renderBooksWithFilter = () => (
    filter === 'All' ? books : books.filter(book => book.category === filter)
  );

  return (
    <>
      <h1>Magic Books</h1>
      <CategoryFilter handleChange={e => handleFilterChange(e)} />
      <h2>{`${filter} Books`}</h2>
      <table className="books-list">
        <thead>
          <tr>
            <th>ID.</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          { books && renderBooksWithFilter().map(book => (
            <tr key={Math.random()}>
              <Book bookObj={book} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

BooksList.defaultProps = {
  filter: '',
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: criterion => dispatch(CHANGE_FILTER(criterion)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
