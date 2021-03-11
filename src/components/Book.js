import PropTypes from 'prop-types';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import UpdateProgress from './UpdateProgress';

const Book = ({ bookObj, removeBook }) => {
  const [updateActive, setUpdateActive] = useState(false);

  const clickUpdateProgress = () => {
    setUpdateActive(true);
  };

  const clickUpdateOrCancel = e => {
    setUpdateActive(false);
    if (e.target.name === 'update') {
      console.log(e.target);
    }
  };

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
          { updateActive && <UpdateProgress clickHandle={e => clickUpdateOrCancel(e)} /> }
          { !updateActive && <button type="button" className="update-btn" onClick={clickUpdateProgress}>UPDATE PROGRESS</button> }
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
