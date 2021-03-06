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
      <section className="books-list">
        { books && renderBooksWithFilter().map(book => (
          <article className="book-details" key={Math.random()}>
            <Book bookObj={book} removeBook={() => handleRemoveBook(book)} />
            <div className="progress">
              <div className="oval-loading" />
              <div className="status">
                <p className="progress-percent">64%</p>
                <p className="progress-status">Completed</p>
              </div>
            </div>
            <div className="update-progress">
              <div className="vertical-line" />
              <p>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
              <button type="button" disabled>UPDATE PROGRESS</button>
            </div>
          </article>
        ))}
      </section>

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
