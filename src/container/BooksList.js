import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector(state => state.books);
  return (
    <>
      <h2>List of Books</h2>
      <table className="books-list">
        <thead>
          <tr>
            <th>ID.</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          { books.map(book => (
            <tr key={Math.random()}>
              <Book bookObj={book} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
