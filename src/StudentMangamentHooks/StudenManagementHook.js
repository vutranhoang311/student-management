import React from "react";
import SearchStudent from "./SearchStudent";
import StudentFormHook from "./StudentFormHook";
import StudentListHook from "./StudentListHook";

const StudenManagementHook = () => {

  return (
    <div className="container mx-auto">
      <div className=" bg-zinc-700 mx-auto rounded-xl">
        {" "}
        <h1 className="text-gray-100 text-3xl text-center font-bold p-4">
          THÔNG TIN SINH VIÊN
        </h1>
      </div>
      <StudentFormHook />

      <SearchStudent />

      <StudentListHook />
    </div>
  );
};

export default StudenManagementHook;
