import PropTypes from 'prop-types';

const Book = ({ bookObj }) => (
  <>
    <td>{`${bookObj.id}.`}</td>
    <td>{bookObj.title}</td>
    <td>{bookObj.category}</td>
  </>
);

Book.propTypes = {
  bookObj: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
