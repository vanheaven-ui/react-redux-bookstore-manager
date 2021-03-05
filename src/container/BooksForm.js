import { useState } from "react";

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

  return (
  <>
    <h2>Add a Book</h2>
    <form>
      <div className="form-group">
        <input type="text" placeholder="Enter book title" />
      </div>
      <div className="form-group">
        <select>
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
