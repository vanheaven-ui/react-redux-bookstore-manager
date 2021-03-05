const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      console.log(action.criterion);
      return action.criterion;
    default:
      return state;
  }
};

export default filterReducer;
