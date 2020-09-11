import * as actionTypes from '../actions';


const initialState = {
  counter: 0,

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
    
  }
  return state;
};

export default reducer;