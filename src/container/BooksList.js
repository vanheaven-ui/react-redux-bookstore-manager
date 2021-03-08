import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { CHANGE_FILTER, REMOVE_BOOK } from '../actions';
import Header from '../components/Header';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handleRemoveBook = book => removeBook(book);

  const handleBtnClick = e => {
    console.log(e.target.textContent);
    changeFilter(e.target.textContent);
  };

  const renderBooksWithFilter = () => (
    filter === 'All' ? books : books.filter(book => book.category === filter)
  );

  return (
    <>
      <Header handleChange={e => handleBtnClick(e)} />
      <h2 className="title">{`${filter} Books`}</h2>
      <section className="books-list">
        { books && renderBooksWithFilter().map(book => (
          <article key={Math.random()}>
            <Book bookObj={book} removeBook={() => handleRemoveBook(book)} />
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
