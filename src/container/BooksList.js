import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Book from '../components/Book';
import { CHANGE_FILTER, REMOVE_BOOK, UPDATE_PROGRESS } from '../actions';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, changeFilter, filter, updateProgress,
}) => {
  // state booleans to toggle filter showing

  const [filterShow, setFilterShow] = useState(false);
  const [filterShowing, setFilterShowing] = useState(false);

  const handleRemoveBook = book => removeBook(book);

  const handleBtnClick = e => {
    changeFilter(e.target.textContent);
  };

  // Handle category button click

  /* eslint-disable */

  const categoryBtnClick = () => {
    filterShowing ? setFilterShow(false) : setFilterShow(true);
    filterShow ? setFilterShowing(false) : setFilterShowing(true);
  };

  /* eslint-enable */

  const renderBooksWithFilter = () => (
    filter === 'All' ? books : books.filter(book => book.category === filter)
  );

  return (
    <>
      <Header clickHandler={categoryBtnClick} />
      <div className="title">
        { filterShow && <CategoryFilter handleChange={e => handleBtnClick(e)} /> }
        <h2 className="title-heading">{`${filter} Books`}</h2>

      </div>
      <section className="books-list">
        { books && renderBooksWithFilter().map(book => (
          <article key={Math.random()}>
            <Book
              bookObj={book}
              removeBook={() => handleRemoveBook(book)}
              updateProgress={updateProgress}
            />
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
  updateProgress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(REMOVE_BOOK(book)),
  changeFilter: criterion => dispatch(CHANGE_FILTER(criterion)),
  updateProgress: progress => dispatch(UPDATE_PROGRESS(progress)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
