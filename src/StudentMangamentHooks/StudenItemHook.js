import React from "react";
import { deleteStudent } from "../actions/studentActions";
import useStudentItem from "./useStudentItem";
const StudentItemHook = (props) => {
  const { student } = props;
  const { dispatch, getSelectStudent } = useStudentItem();
  return (
    <tr className="whitespace-nowrap">
      <td className="py-2 text-sm text-center text-gray-500 w-1	px-2	">
        {student.id}
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-center text-gray-900">
          {student.fullName}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-center text-gray-500">{student.email}</div>
      </td>
      <td className="px-6 py-4 text-center text-sm text-gray-500">
        {student.phone}
      </td>
      <td className="px-6 py-4 text-center text-sm text-gray-500">
        {student.dateOfBirth}
      </td>
      <td className="px-6 py-4 text-center">
        <button
          className="mx-1 px-4 py-1 text-sm text-white bg-blue-400 rounded"
          onClick={() => getSelectStudent(student.id, student)}
        >
          Edit
        </button>

        <button
          className="mx-1 px-4 py-1 text-sm text-white bg-red-400 rounded"
          onClick={() => dispatch(deleteStudent(student.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default StudentItemHook;
