import axios from "axios";
import * as actionTypes from "../constants/studentConstants";

export const getStudents = (searchValue) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.GET_STUDENT_PENDING });
      // const searchValue = getState().studentManagement.searchValue;
      const response = await axios({
        url: "https://6271e15e25fed8fcb5ec0b3d.mockapi.io/employee/studentManagement",
        method: "GET",
        params: {
          fullName: searchValue,
        },
      });
      dispatch({
        type: actionTypes.GET_STUDENT_FULLFILLED,
        students: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_STUDENT_REJECTED,
        error: error.response.data,
      });
    }
  };
};

export const createStudent = (student, onSuccess) => {
  return async (dispatch, getState) => {
    try {
      await axios.post(
        "https://6271e15e25fed8fcb5ec0b3d.mockapi.io/employee/studentManagement",
        student
      );
      dispatch(getStudents());
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteStudent = (studentId) => {
  return async (dispatch, getState) => {
    try {
      await axios.delete(
        `https://6271e15e25fed8fcb5ec0b3d.mockapi.io/employee/studentManagement/${studentId}`
      );
      dispatch(getStudents());
    } catch (error) {}
  };
};

export const updateStudent = (studentId, student, onSuccess) => {
  return async (dispatch, getState) => {
    try {
      await axios.put(
        `https://6271e15e25fed8fcb5ec0b3d.mockapi.io/employee/studentManagement/${studentId}`,
        student
      );
      dispatch(getStudents());
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };
};
