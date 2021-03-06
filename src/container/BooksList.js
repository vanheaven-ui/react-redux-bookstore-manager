import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { CHANGE_FILTER, REMOVE_BOOK } from '../actions';
import Header from '../components/Header';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handleRemoveBook = book => removeBook(book);

  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };

  const renderBooksWithFilter = () => (
    filter === 'All' ? books : books.filter(book => book.category === filter)
  );

  return (
    <>
      <Header handleChange={e => handleFilterChange(e)} />
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
              <Book bookObj={book} removeBook={() => handleRemoveBook(book)} />
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
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(REMOVE_BOOK(book)),
  changeFilter: criterion => dispatch(CHANGE_FILTER(criterion)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
