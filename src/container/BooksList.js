import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
            <Book bookObj={book} />
            <td><button type="button">Remove</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
