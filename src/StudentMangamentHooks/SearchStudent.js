import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getStudents } from "../actions/studentActions";
import { TextField } from "@mui/material";
const SearchStudent = () => {
  const dispatch = useDispatch();
  let timeRef = useRef();

  const handleChangeSearch = (event) => {
    clearTimeout(timeRef);
    timeRef = setTimeout(() => {
      dispatch(getStudents(event.target.value));
    }, 1000);
  };

  return (
    <div className="my-4">
      <TextField
        fullWidth
        label="Search by Name"
        id="fullWidth"
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default SearchStudent;
