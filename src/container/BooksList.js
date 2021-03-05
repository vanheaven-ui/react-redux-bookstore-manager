import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { CHANGE_FILTER } from '../actions';

const BooksList = ({ books, changeFilter, filter }) => {
  const handleFilterChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <>
      <h2>List of Books</h2>
      <CategoryFilter handleChange={e => handleFilterChange(e)} />
      <h3>{`${filter} Books`}</h3>
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
              <Book bookObj={book} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

BooksList.defaultProps = {
  filter: 'ALL',
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
