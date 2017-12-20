// import * as actionTypes from '../actionTypes';
import jsonData from '../assets/data/data.json';


const initialState = {
  questions: jsonData.questions,
  users: jsonData.users,
  comments: jsonData.comments
}

const reducer = (state = initialState, action) => {
  return state
}

export default reducer;