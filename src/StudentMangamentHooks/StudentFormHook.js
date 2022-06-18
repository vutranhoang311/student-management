import React, { useEffect } from "react";
import useForm from "./useForm";
const StudentFormHook = () => {
  const { input, handleOnChange, handleOnSubmit, setInput, selectStudent } =
    useForm({
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
    });

  useEffect(() => {
    if (selectStudent?.id) {
      setInput({ ...selectStudent });
    }
    return () => {
      // cleanup effect
    };
  }, [selectStudent]);

  return (
    <form onSubmit={handleOnSubmit} className="container mt-4">
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
              onChange={handleOnChange}
              value={input.fullName}
              type="text"
              name="fullName"
              placeholder="Vu Tran Hoang"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Email Address
            </label>
            <input
              onChange={handleOnChange}
              value={input.email}
              type="text"
              name="email"
              placeholder="you@email.com"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
        </div>
        <div className="form-group mx-5 w-1/2">
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              onChange={handleOnChange}
              value={input.phone}
              type="number"
              name="phone"
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
              onChange={handleOnChange}
              value={input.dateOfBirth}
              type="date"
              name="dateOfBirth"
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
};

export default StudentFormHook;
