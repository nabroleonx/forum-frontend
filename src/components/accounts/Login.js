import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../redux/actions/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate("/main");
    }
  }, [token]);

  const handleLoginClick = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email: email,
        password: password,
      })
    );
  };

  return (
    <div className="flex bg-white">
      <div className="flex-1 flex flex-col justify-center px-4 pt-6 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex items-center justify-center">
            <a href="/">
              <img
                className="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </a>
            <h2 className="ml-2 text-3xl font-extrabold text-teal-700">
              Sign in
            </h2>
          </div>
          {/* {Object.keys(msg).length > 0 && (
              <div className="rounded-md bg-red-50 p-4 mt-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <XCircleIcon
                      onClick={() => dispatch(clearMessage(msg))}
                      className="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Please correct the following errors to register.
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <ul role="list" className="list-disc pl-5 space-y-1">
                        {Object.keys(msg).map((error, idx) => (
                          <li key={idx}>{msg[error]}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          <div className="mt-8">
            <div className="mt-1 grid grid-cols-1">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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
                  Sign in using Google
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
              <form onSubmit={handleLoginClick} className="space-y-6">
                <div>
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
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
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

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Sign in
                  </button>
                </div>

                <p className="text-center  justify-center flex text-sm mt-2 text-gray-600 col-span-12">
                  Don&apos;t have an account yet?
                  <Link to="/register" className="ml-1 font-bold text-teal-500">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1  pt-6 pb-12">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
