const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.book.id);
    case 'CREATE_BOOK':
      return [...state, action.book];
    default:
      return state;
  }
};

export default booksReducer;
