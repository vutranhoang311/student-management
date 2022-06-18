import * as actionTypes from "../constants/studentConstants";

const initialState = {
  students: [],
  selectStudent: {},
  isLoading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENT_PENDING: {
      return { ...state, isLoading: true };
    }
    case actionTypes.GET_STUDENT_FULLFILLED: {
      return {
        ...state,
        students: action.students,
        isLoading: false,
        error: null,
      };
    }
    case actionTypes.GET_STUDENT_REJECTED: {
      return { ...state, error: action.error };
    }
    case actionTypes.SELECT_STUDENT: {
      return { ...state, selectStudent: action.student };
    }
    case actionTypes.SEARCH_VALUE: {
      return { ...state, searchValue: action.searchValue };
    }
    default:
      return state;
  }
};

export default studentReducer;
