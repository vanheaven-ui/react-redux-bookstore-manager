import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CREATE_BOOK } from '../actions';

export const bookCategories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({
    title: '',
    category: 'default',
  });

  const handleChange = e => {
    e.preventDefault();
    setState({
      id: state.id,
      title: e.target.tagName === 'INPUT' ? e.target.value : state.title,
      category: e.target.tagName === 'SELECT' ? e.target.options[e.target.selectedIndex].value : state.category,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.title !== '' && state.category !== '') {
      createBook({ ...state, id: Math.ceil(Math.random() * 100) });
      setState({
        id: 0,
        title: '',
        category: 'default',
      });
    }
  };

  return (
    <section className="add-book">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Book title"
            onChange={e => handleChange(e)}
            value={state.title}
          />
        </div>
        <div className="form-group">
          <select onChange={e => handleChange(e)} value={state.category}>
            <option value="default" disabled>Select Category:</option>
            { bookCategories.map(cat => (
              <option value={cat} key={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="actions">
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </section>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(CREATE_BOOK(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
