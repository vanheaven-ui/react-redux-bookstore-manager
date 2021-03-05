const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  book,
});

const REMOVE_BOOK = book => ({
  type: 'REMOVE_BOOK',
  book,
});

const CHANGE_FILTER = criteria => ({
  type: 'CHANGE_FILTER',
  criteria,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
