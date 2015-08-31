import data from '../data/output.js'

const initialState = data;
function directoryReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;
