import * as actionTypes from "../constants/studentConstants";

const initialState = {
  students: [],
  selectStudent: {},
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENT_FULLFILLED: {
      return { ...state, students: action.students };
    }
    case actionTypes.SELECT_STUDENT: {
      return { ...state, selectStudent: action.selectStudent };
    }
    case actionTypes.UPDATE_STUDENT: {
      return { ...state, selectStudent: {} };
    }
    default:
      return state;
  }
};

export default studentReducer;
