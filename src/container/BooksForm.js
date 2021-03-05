import { useState } from 'react';

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

const BooksForm = () => {
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
    console.log(state);
  };

  return (
    <>
      <h2>Add a Book</h2>
      <form>
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

export default BooksForm;
