import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <>
      <h2>List of Books</h2>
      <table className="books-list">
        <thead>
          <tr>
            <th>ID.</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          { books && books.map(book => (
            <tr key={Math.random()}>
              <Book bookObj={book} removeBook={() => handleRemoveBook(book)} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => (
  {
    removeBook: book => dispatch(REMOVE_BOOK(book)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
