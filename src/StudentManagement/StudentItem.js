import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStudent } from "../actions/studentActions";
import * as actionTypes from "../constants/studentConstants";
class StudentItem extends Component {
  render() {
    const { student } = this.props;
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
          <div className="text-sm text-center text-gray-500">
            {student.email}
          </div>
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
            onClick={() => this.props.selectStudent(student.id,student)}
          >
            Edit
          </button>

          <button
            className="mx-1 px-4 py-1 text-sm text-white bg-red-400 rounded"
            onClick={() => this.props.deleteStudent(student.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (studentId) => {
      dispatch(deleteStudent(studentId));
    },
    selectStudent: (studentId, selectStudent) => {
      dispatch({
        type: actionTypes.SELECT_STUDENT,
        studentId,
        selectStudent,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(StudentItem);
