import * as actionTypes from './actionTypes';
import jsonData from '../assets/data/data.json';
import _ from 'lodash';



const initialState = {
  questions: jsonData.questions.slice(0,10),
  users: jsonData.users,
  comments: jsonData.comments,
  questionsQuan: 10,
  maxQuan: jsonData.questions.length,
  hasMoreItems: true,
  sortMethod: 'recent'
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

const sort = (state, action) => {
  let sortedQuestion;
  let sortMethod= state.sortMethod;
  let date = new Date();
  switch(action.method) {
    case "recent": {
      sortedQuestion = _.sortBy(jsonData.questions,[question => {
        return new Date(question.created_at) <= date - 2*86400000
      }]);
      sortMethod = 'recent';
      break;
    }
    case "oldest": {
      sortedQuestion = _.sortBy(jsonData.questions, [question => {
        return question.created_at
      }]);
      sortMethod = 'oldest';
      break;
    }
    case "newest":
      sortedQuestion = _.orderBy(jsonData.questions, ['created_at'], ['desc']);
      sortMethod = 'newest';
    break;
    default:
      return
  }
  return {
    ...state,
    questions: sortedQuestion.slice(0, 10),
    sortMethod: sortMethod
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MORE: return loadQuestions(state, action);
    case actionTypes.SORT: return sort(state, action);
    default:
      return state
  }
}

export default reducer;