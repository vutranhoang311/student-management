import { useDispatch } from "react-redux";
import * as actionTypes from "../constants/studentConstants";
const useStudentItem = () => {
  const dispatch = useDispatch();

  const getSelectStudent = (studentId, student) => {
    const action = {
      type: actionTypes.SELECT_STUDENT,
      studentId,
      student,
    };
    dispatch(action);
  };

  return { dispatch, getSelectStudent };
};

export default useStudentItem;
