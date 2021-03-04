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

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_BOOK':
      // filter does not mutate the array on which it is called
      return state.filter(book => book.id !== action.book);
    case 'CREATE_BOOK':
      return [...state, action.book];
    default:
      return state;
  }
};

export default booksReducer;
