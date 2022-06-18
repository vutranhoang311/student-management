import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStudent, updateStudent } from "../actions/studentActions";
const useForm = (initialState) => {
  const [input, setInput] = useState(initialState);

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };


  const { selectStudent } = useSelector((state) => ({
    selectStudent: state.studentManagement.selectStudent,
  }));

  const onSubmitSuccess = () => {
    setInput({ ...initialState });
  };

  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (input?.id) {
      dispatch(updateStudent(input.id, input, onSubmitSuccess));
    } else {
      dispatch(createStudent(input, onSubmitSuccess));
    }
  };

  return {
    input,
    handleOnChange,
    handleOnSubmit,
    setInput,
    setInput,
    selectStudent,
    
  };
};

export default useForm;
