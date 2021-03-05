const defaultFilter = 'ALL'

const filterReducer = (state = defaultFilter, action) => {
  switch(action.type) {
    case 'CHANGE_FILTER':
      return 'This requires some logic here!'
    default:
      return state;
  }
};

export default filterReducer;
