import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStudent, updateStudent } from "../actions/studentActions";
const useForm = (initialState, initialError) => {
  const [input, setInput] = useState(initialState);
  const [errors, setError] = useState(initialError);
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
    let isValid = true;
    isValid &= patternValidation(
      input.fullName,
      `* Không nhập số và ký tự đặt biệt.`,
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g,
      `fullName`
    );
    isValid &= lengthValidation(8, 40, input.fullName, `fullName`);
    isValid &= required(input.fullName, `fullName`);

    isValid &= required(input.phone, `phone`);
    isValid &= lengthValidation(8, 20, input.phone, `phone`);

    isValid &= required(input.email, `email`);
    isValid &= patternValidation(
      input.email,
      `* Không nhập đúng định dạng email. Địa chỉ email phải bắt đầu bằng 1 ký tự + địa chỉ email là tập hợp của các ký tự a-z, 0-9 và có thể có các ký tự như dấu chấm, dấu gạch dưới + độ dài tối thiểu của email là 5, độ dài tối đa là 32`,
      /^[a-z][A-Za-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/g,
      `email`
    );
    if (!isValid) {
      setError({ ...errors, hidden: false });
      return;
    }

    if (input?.id) {
      dispatch(updateStudent(input.id, input, onSubmitSuccess));
    } else {
      dispatch(createStudent(input, onSubmitSuccess));
    }
  };

  const required = (value, errorType) => {
    let error = `*Trường này không được để trống.`;
    const errorsTmp = { ...errors };

    if (value.length === 0) {
      errorsTmp[errorType].messages = errorsTmp[errorType].messages.filter(
        (item) => item !== error
      );

      errorsTmp[errorType].messages.push(error);

      setError({ ...errorsTmp });
      return false;
    }

    errorsTmp[errorType].messages = errorsTmp[errorType].messages.filter(
      (item) => item !== error
    );

    setError({ ...errorsTmp });
    return true;
  };

  const lengthValidation = (minLength, maxLength, value, errorType) => {
    let error = `* Độ dài từ ${minLength} - ${maxLength} ký tự`;
    const errorsTmp = { ...errors };

    if (value.length > maxLength || value.length < minLength) {
      errorsTmp[errorType].messages = errorsTmp[errorType].messages.filter(
        (item) => item !== error
      );

      errorsTmp[errorType].messages.push(error);

      setError({ ...errorsTmp });
      return false;
    }

    errorsTmp[errorType].messages = errorsTmp[errorType].messages.filter(
      (item) => item !== error
    );
    setError({ ...errorsTmp });
    return true;
  };

  const patternValidation = (value, error, regex, errorType) => {
    const valid = regex.test(value);
    const errorsTmp = { ...errors };
    if (!valid) {
      errorsTmp[errorType].messages = errorsTmp[errorType].messages.filter(
        (item) => item !== error
      );
      errorsTmp[errorType].messages.push(error);
      setError({ ...errorsTmp });
      return false;
    }

    errorsTmp[errorType].messages = errorsTmp[errorType].messages.filter(
      (item) => item !== error
    );
    setError({ ...errorsTmp });
    return true;
  };

  return {
    errors,
    input,
    handleOnChange,
    handleOnSubmit,
    setInput,
    setInput,
    selectStudent,
    patternValidation,
  };
};

export default useForm;
