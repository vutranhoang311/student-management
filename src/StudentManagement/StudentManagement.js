import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { connect } from "react-redux";
import { getStudents } from "../actions/studentActions";

class StudentManagement extends Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    return (
      <div className="container mx-auto">
        <div className=" bg-zinc-700 mx-auto rounded-xl">
          {" "}
          <h1 className="text-gray-100 text-3xl text-center font-bold p-4">
            THÔNG TIN SINH VIÊN
          </h1>
        </div>

        <StudentForm />
        <StudentList students={this.props.students} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    students: state.studentManagement.students,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: () => {
      dispatch(getStudents());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentManagement);
