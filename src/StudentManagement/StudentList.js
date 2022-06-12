import React, { Component } from "react";
import StudentItem from "./StudentItem";
export default class StudentList extends Component {

  render() {
    const { students } = this.props;

    return (
      <div className="container flex justify-center mx-auto">
        <div className="border-b border-gray-500 shadow">
          <table className="table-auto container">
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
              {students.map((item) => (
                <StudentItem key={item.id} student={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

