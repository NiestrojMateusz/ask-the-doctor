import * as actionTypes from './actionTypes';
import jsonData from '../assets/data/data.json';



const initialState = {
  questions: jsonData.questions.slice(0,10),
  users: jsonData.users,
  comments: jsonData.comments,
  questionsQuan: 10,
  maxQuan: jsonData.questions.length,
  hasMoreItems: true
}

const loadQuestions = (state, action) => {
  let updatedQuestionsQuan = state.questionsQuan + 10;
  let hasMoreItems = state.hasMoreItems;
    if (updatedQuestionsQuan >= state.maxQuan) {
      hasMoreItems = !state.hasMoreItems
    }
  return {
    ...state,
    questions: jsonData.questions.slice(0, updatedQuestionsQuan),
    questionsQuan: updatedQuestionsQuan,
    hasMoreItems: hasMoreItems
  }
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MORE: return loadQuestions(state, action)
    default:
      return state
  }
}

export default reducer;