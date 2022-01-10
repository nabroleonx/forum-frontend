import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../redux/actions/auth";

const faculties = [
  {
    faculity: "Faculty of Computing",
    departments: [
      ["SE", "Software Engineering"],
      ["CS", "Computer Science"],
      ["IT", "Information Technology"],
      ["IS", "Information Science"],
    ],
  },
  {
    faculity: "Faculty of Mechanical and Industrial Engineering",
    departments: [
      ["ME", "Mechanical Engineering"],
      ["IE", "Industrial Engineering"],
      ["AE", "Automotive Engineering"],
      ["EME", "Electro-Mechanical Engineering"],
    ],
  },
  {
    faculity: "Faculty of Electrical and Computer Engineering",
    departments: [
      ["EE", "Electrical Engineering"],
      ["COE", "Computer Engineering"],
    ],
  },
  {
    faculity: "Faculty of Civil and Water Resource Engineering",
    departments: [
      ["WRE", "Water Resoures Engineering"],
      ["CIE", "Civil Engineering"],
    ],
  },
  {
    faculity: "Faculty of Chemical and Food Engineering",
    departments: [
      ["CE", "Chemical Engineering"],
      ["FE", "Food Engineering"],
      ["AHN", "Applied Human Nutrition"],
    ],
  },
];

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/main");
    }
  }, [token]);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const student = {
      name: fullname,
      email: email,
      password: password,
      role: "S",
    };
    dispatch(
      register({
        student,
        dept_choice: department,
        student_ID: id,
        confirmPassword: confirmPassword,
      })
    );
  };

  return (
    <>
      <div className="flex bg-white">
        <div className="flex-1 flex flex-col pt-6 justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full">
            <div className="flex items-center justify-center">
              <a href="/">
                <img
                  className="block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </a>
              <h2 className="ml-2 text-3xl font-extrabold text-teal-700">
                Create an account
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-1 grid grid-cols-1">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center text-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign up with Google</span>
                    <svg
                      aria-hidden="true"
                      className="mr-2 native svg-icon iconGoogle"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path
                        d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z"
                        fill="#4285F4"
                      />
                      <path
                        d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z"
                        fill="#34A853"
                      />
                      <path
                        d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z"
                        fill="#EA4335"
                      />
                    </svg>{" "}
                    Sign up using Google
                  </a>
                </div>

                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form
                  onSubmit={handleRegisterClick}
                  className="grid grid-cols-12 gap-3"
                >
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="fullName"
                        required
                        onChange={(e) => setFullname(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Department
                    </label>
                    <div className="mt-1">
                      <select
                        onChange={(e) => setDepartment(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        defaultValue=""
                      >
                        <option
                          className="text-xs font-bold tracking-wide text-gray-200"
                          disabled
                          value
                        >
                          Select Your Department
                        </option>

                        {faculties.map((faculity) => {
                          return (
                            <optgroup
                              label={faculity.faculity}
                              key={faculity.faculity}
                            >
                              {faculity.departments.map((department) => {
                                return (
                                  <option
                                    value={department[0]}
                                    key={department[0]}
                                  >
                                    {department[1]}
                                  </option>
                                );
                              })}
                            </optgroup>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ID
                    </label>
                    <div className="mt-1">
                      <input
                        id="id"
                        name="id"
                        type="number"
                        autoComplete="id"
                        required
                        onChange={(e) => setId(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 col-span-12 sm:col-span-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="current-password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between col-span-12">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-teal-600 hover:text-teal-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div className="col-span-12 mt-6">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Register
                    </button>
                  </div>

                  <p className="text-center  justify-center flex text-sm mt-2 text-gray-600 col-span-12">
                    Already have an account?
                    <Link to="/login" className="ml-1 font-bold text-teal-500">
                      Sign in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
