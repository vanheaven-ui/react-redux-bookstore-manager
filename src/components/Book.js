import PropTypes from 'prop-types';

const Book = ({ bookObj, removeBook }) => (
  <>
    <div className="book-details">
      <h5 className="category">{bookObj.category}</h5>
      <h2>{bookObj.title}</h2>
      <a href="/author" className="author">Author</a>
      <ul className="extra">
        <li><a href="/comments">Comments</a></li>
        <li><span className="line-1" /></li>
        <button type="button" onClick={removeBook}>Remove</button>
        <li><span className="line-1" /></li>
        <li><a href="/edit">Edit</a></li>
      </ul>
    </div>
    <div className="progress-stats">
      <span className="oval" />
      <div className="text-stats">
        <p className="percent">64%</p>
        <p className="progress-status">Completed</p>
      </div>
    </div>
    <div className="progress-update">
      <p className="curr-chapter">CURRENT CHAPTER</p>
      <p className="Chapter-num">Chapter 17</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </>
);

Book.propTypes = {
  bookObj: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
