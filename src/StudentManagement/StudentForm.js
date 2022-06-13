import React, { Component } from "react";
import { connect } from "react-redux";
import { createStudent, updateStudent } from "../actions/studentActions";

class StudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValues: {
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
      },
    };
  }
  handleInput = (event) => {
    const { id, value } = event.target;
    this.setState({ inputValues: { ...this.state.inputValues, [id]: value } });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputValues.id) {
      this.props.updateStudent(
        this.state.inputValues.id,
        this.state.inputValues,
        this.handleSubmitSuccess
      );
    } else {
      this.props.createStudent(
        this.state.inputValues,
        this.handleSubmitSuccess
      );
    }
  };
  handleSubmitSuccess = () => {
    this.setState({
      inputValues: {
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
      },
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectStudent !== this.props.selectStudent) {
      this.setState({
        inputValues: { ...this.props.selectStudent },
      });
    }
  }
  render() {
    const { fullName, email, phone, dateOfBirth } = this.state.inputValues;
    return (
      <form onSubmit={this.handleSubmit} className="container mt-4">
        <div className="w-full flex justify-center">
          <div className="form-group mx-5 w-1/2">
            <div className="mb-6">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                value={fullName}
                onChange={this.handleInput}
                type="text"
                id="fullName"
                placeholder="Vu Tran Hoang"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600"
              >
                Email Address
              </label>
              <input
                value={email}
                onChange={this.handleInput}
                type="email"
                id="email"
                placeholder="you@email.com"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
          </div>
          <div className="form-group mx-5 w-1/2">
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm text-gray-600"
              >
                Phone Number
              </label>
              <input
                value={phone}
                onChange={this.handleInput}
                type="text"
                id="phone"
                placeholder="84 123-456-789"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="dateOfBirth"
                className="block mb-2 text-sm text-gray-600"
              >
                Date of birth
              </label>
              <input
                value={dateOfBirth}
                onChange={this.handleInput}
                type="date"
                id="dateOfBirth"
                placeholder="91 1234-567"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
            </div>
          </div>
        </div>
        <div className="mb-6 text-center ">
          <button
            type="submit"
            className="w-1/2 px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectStudent: state.studentManagement.selectStudent,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (student, onSuccess) => {
      dispatch(createStudent(student, onSuccess));
    },
    updateStudent: (studentId, student, onSuccess) => {
      dispatch(updateStudent(studentId, student, onSuccess));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
