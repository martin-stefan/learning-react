import * as actionTypes from './actions';


const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.ADDFIVE:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBFIVE:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: state.counter})
      }
    case actionTypes.DELETE:
      const newArray = state.results.filter(result => result.id !== action.id);
      return {
        ...state,
        results: newArray
      }
  }
  return state;
};

export default reducer;