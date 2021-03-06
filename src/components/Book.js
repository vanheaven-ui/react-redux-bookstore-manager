import PropTypes from 'prop-types';

const Book = ({ bookObj, removeBook }) => (
  <div className="book-info">
    <h5>{bookObj.category}</h5>
    <h2>{bookObj.title}</h2>
    <a href="/author">Author</a>
    <ul className="mini-footer">
      <li><a href="/comments">Comments</a></li>
      <li className="line-1" />
      <li><button type="button" onClick={removeBook}>Remove</button></li>
      <li className="line-1" />
      <li><a href="/edit">Edit</a></li>
    </ul>
  </div>
);

Book.propTypes = {
  bookObj: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
