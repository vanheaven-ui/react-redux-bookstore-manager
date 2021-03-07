import BooksForm from '../container/BooksForm';
import BooksList from '../container/BooksList';

function App() {
  return (
    <div className="App">
      <BooksList />
      <span className="custom-hr" />
      <BooksForm />
    </div>
  );
}

export default App;
