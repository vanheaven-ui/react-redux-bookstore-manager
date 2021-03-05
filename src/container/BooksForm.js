import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CREATE_BOOK } from '../actions';

const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const formOpt = category => (
  <option value={category} key={Math.random()}>{category}</option>
);

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({
    id: 0,
    title: '',
    category: '',
  });

  const handleChange = e => {
    setState({
      id: state.id,
      title: e.target.tagName === 'INPUT' ? e.target.value : state.title,
      category: e.target.tagName === 'SELECT' ? e.target.value : state.category,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.title !== '' && state.category !== '') {
      createBook(state);
      setState({
        id: state.id + 1,
        title: '',
        category: '',
      });
    }
  };

  return (
    <>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Enter book title" onChange={e => handleChange(e)} />
        </div>
        <div className="form-group">
          <select onChange={e => handleChange(e)}>
            {bookCategories.map(cat => (
              formOpt(cat)
            ))}
          </select>
        </div>
        <div className="actions">
          <button type="submit">Add Book</button>
        </div>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(CREATE_BOOK(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
