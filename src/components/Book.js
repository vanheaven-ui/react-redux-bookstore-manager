import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ bookObj, removeBook }) => {
  const percent = 64;
  return (
    <>
      <div className="book-details">
        <h5 className="category">{bookObj.category}</h5>
        <h2>{bookObj.title}</h2>
        <a href="/author" className="author text-blue-sm">Author</a>
        <ul className="extra">
          <li><a href="/comments" className=" comments text-blue-sm">Comments</a></li>
          <li><span className="vertical-line-sm" /></li>
          <button type="button" onClick={removeBook} className="remove-btn text-blue-sm">Remove</button>
          <li><span className="vertical-line-sm" /></li>
          <li><a href="/edit" className="edit text-blue-sm">Edit</a></li>
        </ul>
      </div>
      <div className="progress-stats">
        <div className="oval">
          <CircularProgressbar value={percent} />
        </div>
        <div className="text-stats">
          <p className="percent">64%</p>
          <p className="progress-status">Completed</p>
        </div>
      </div>
      <div className="progress-update">
        <span className="vertical-line-big" />
        <div className="update-text">
          <p className="curr-chapter">CURRENT CHAPTER</p>
          <p className="chapter-num">Chapter 17</p>
          <button type="button" className="update-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  bookObj: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
