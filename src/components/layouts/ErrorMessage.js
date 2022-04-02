import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { XCircleIcon } from "@heroicons/react/solid";

import { clearErrors } from "../../redux/actions/errors";

export default function ErrorMessage() {
  const [errorKey] = useState({
    student_id: "Student Id",
    dept_choice: "Department",
    name: "Name",
    password: "Password",
    email: "Email",
    title: "Title",
    body: "Body",
    categories: "Tags",
  });

  const dispatch = useDispatch();

  const { msg } = useSelector((state) => state.errors);

  return (
    <div>
      {Object.keys(msg).length > 0 && (
        <div className="rounded-md bg-red-50 p-4 mt-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                onClick={() => dispatch(clearErrors(msg))}
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Please correct the following errors to register.
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <ul className="list-disc pl-5 space-y-1">
                  {Object.keys(msg).map((error, idx) => (
                    <li key={idx}>{errorKey[error] + " : " + msg[error]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
