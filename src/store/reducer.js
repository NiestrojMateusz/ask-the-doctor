import * as actionTypes from './actionTypes';
import jsonData from '../assets/data/data.json';
import _ from 'lodash';
import { getData} from '../shared/utilities';


const initialState = {
  questions: jsonData.questions.slice(0,10),
  users: jsonData.users,
  comments: jsonData.comments,
  questionsQuan: 10,
  maxQuan: jsonData.questions.length,
  hasMoreItems: true,
  sortMethod: 'recent',
  searchInputValue: "",
  showModal: false,
  currentUser: jsonData.users[0]
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
        return new Date(question.created_at).getDay() <= date.getDay() - 2*86400000
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

const search = (state, action) => {
  let search = new RegExp(state.searchInputValue.toLowerCase(), "gi");
  let searchedQuestions = _.filter(jsonData.questions, function(question) {
    return question.title.match(search)
  })
  return {
    ...state,
    questions: searchedQuestions,
    hasMoreItems: false
  }
}

const updateInput = (state, action) => {
  return {
    ...state,
    searchInputValue: action.value
  }
}

const handleUsernameClick = (state, action) => {
  let currentUser = getData(state.users, "userID", action.userID);
  console.log(currentUser)
  return {
    ...state,
    showModal: true,
    currentUser: currentUser
  }
}

const handleModalClick = (state, action) => {
  return {
    ...state,
    showModal: false
  }
}

const handleAddVote = (state, action) => {
  if (action.voteFor === "question") {
    let updatedQuestions = [...state.questions];
    updatedQuestions[action.id].votes += 1;

    return {
      ...state,
      questions: updatedQuestions
    }
  }
  if (action.voteFor === "comment") {
    let updatedQuestions = [...state.comments];
    updatedQuestions[action.id].votes += 1;

    return {
      ...state,
      comments: updatedQuestions
    }
  }
}
const handleSubtractVote = (state, action) => {
  if (action.voteFor === "question") {
    let updatedQuestions = [...state.questions];
    updatedQuestions[action.id].votes -= 1;

    return {
      ...state,
      questions: updatedQuestions
    }
  }
  if (action.voteFor === "comment") {
    let updatedQuestions = [...state.comments];
    updatedQuestions[action.id].votes -= 1;

    return {
      ...state,
      comments: updatedQuestions
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MORE: return loadQuestions(state, action);
    case actionTypes.SORT: return sort(state, action);
    case actionTypes.SEARCH_SUBMIT: return search(state, action);
    case actionTypes.UPDATE_INPUT: return updateInput(state,action);
    case actionTypes.USERNAME_CLICK: return handleUsernameClick(state,action);
    case actionTypes.MODAL_CLICK: return handleModalClick(state,action);
    case actionTypes.ADD_VOTE: return handleAddVote(state, action);
    case actionTypes.SUBTRACT_VOTE: return handleSubtractVote(state, action);
    default:
      return state
  }
}

export default reducer;