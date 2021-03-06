const filter = 'All';

const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.criterion;
    default:
      return state;
  }
};

export default filterReducer;
