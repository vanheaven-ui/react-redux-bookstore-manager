import { CREATE_BOOK } from '../actions';
import BooksForm from '../container/BooksForm';
import BooksList from '../container/BooksList';
import store from '../store';

const initialState = [
  {
    id: 1,
    title: 'Things fall apart',
    category: 'Learning',
  },
  {
    id: 2,
    title: 'The History of the Ancient World',
    category: 'History',
  },
];

initialState.map(book => store.dispatch(CREATE_BOOK(book)));

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
