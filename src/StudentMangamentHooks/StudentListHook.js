import React, { useEffect } from "react";
import StudentItemHook from "./StudenItemHook";

import { useSelector, useDispatch } from "react-redux";
import { getStudents } from "../actions/studentActions";

const StudentListHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  const { students, isLoading, error } = useSelector((state) => ({
    students: state.studentManagement.students,
    isLoading: state.studentManagement.isLoading,
    error: state.studentManagement.error,
  }));
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="w-full flex justify-center mx-auto ">
      <table className="table-auto w-full">
        <thead className="bg-gray-300">
          <tr>
            <th className="py-2 px-2 text-xs text-gray-500 w-1	">ID</th>
            <th className="py-2 text-xs text-gray-500">Name</th>
            <th className="py-2 text-xs text-gray-500">Email</th>
            <th className="py-2 text-xs text-gray-500">Phone</th>
            <th className="py-2 text-xs text-gray-500">Date of Birth</th>
            <th className="py-2 text-xs text-gray-500">Edit/Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {students.map((student) => (
            <StudentItemHook key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentListHook;
