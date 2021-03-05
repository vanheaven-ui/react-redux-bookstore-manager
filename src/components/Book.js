import PropTypes from 'prop-types';

const Book = ({ bookObj, removeBook }) => (
  <>
    <td>{`${bookObj.id}.`}</td>
    <td>{bookObj.title}</td>
    <td>{bookObj.category}</td>
    <td><button type="button" onClick={removeBook}>Remove</button></td>
  </>
);

Book.propTypes = {
  bookObj: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
