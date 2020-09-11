import * as actionTypes from '../actions';


const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result})
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