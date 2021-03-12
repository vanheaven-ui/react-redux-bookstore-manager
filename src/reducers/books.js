const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.book.id);
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'UPDATE_PROGRESS':
      return state.map(book => (book.id === action.id
        ? { ...book, progress: action.progress } : book));
    default:
      return state;
  }
};

export default booksReducer;
