const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  book,
});

const REMOVE_BOOK = book => ({
  type: 'REMOVE_BOOK',
  book,
});

const CHANGE_FILTER = criterion => ({
  type: 'CHANGE_FILTER',
  criterion,
});

const UPDATE_PROGRESS = (progress, id) => ({
  type: 'UPDATE_PROGRESS',
  progress,
  id,
});

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, UPDATE_PROGRESS,
};
