const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + action.value
      }
    case 'DECREMENT':
      return {
        counter: state.counter - action.value
      }
    case 'ADDFIVE':
      return {
        counter: state.counter + action.value
      }
    case 'SUBFIVE':
      return {
        counter: state.counter - action.value
      }
  }
  return state;
};

export default reducer;