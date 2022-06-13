import * as actionTypes from "../constants/studentConstants";

const initialState = {
  students: [],
  selectStudent: {},
  searchValue: "",
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENT_FULLFILLED: {
      return { ...state, students: action.students };
    }
    case actionTypes.SELECT_STUDENT: {
      console.log(action)
      return { ...state, selectStudent: action.selectStudent };
    }
    case "SEARCH_VALUE": {
      return { ...state, searchValue: action.searchValue };
    }
    default:
      return state;
  }
};

export default studentReducer;
