import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Editor from "./Editor";

export default function QuestionForm(props) {
  const [title, setTitle] = useState(props.editMode && props.question[0].title);
  const [categories, setCategories] = useState(
    props.editMode && props.question[0].categories
  );
  const [body, setBody] = useState(null);

  const { questionBody } = useSelector((state) => state.questions);

  useEffect(() => {
    setBody(questionBody);
  }, [questionBody]);

  const handleCategory = (value) => {
    const category_list = value.split(" - ").map((cat) => ({ name: cat }));
    setCategories(category_list);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    props.handleFormSubmit({ title, categories, body });
  };

  return (
    <div className=" px-4 sm:px-6 lg:px-20 xl:px-24">
      <div className=" px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="space-y-8 divide-y divide-gray-200">
          <form onSubmit={handleFormSubmit}>
            <div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
                <div className="col-span-1 sm:col-start-2 sm:col-span-10">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <span className="text-xs font-light">
                    Be specific and imagine you’re asking a question to another
                    person
                  </span>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      placeholder="e.g. How can I find the eigenvector for 3x3 matrix?"
                      className="flex-1 border px-3 py-2 focus:outline-none placeholder:text-xs placeholder:font-light focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                      onChange={(e) => setTitle(e.target.value)}
                      defaultValue={
                        props.editMode ? props.question[0].title : null
                      }
                    />
                  </div>
                </div>

                <div className="col-span-1 sm:col-start-2 sm:col-span-10">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Body
                  </label>
                  <span className="text-xs font-light">
                    Include all the information someone would need to answer
                    your question
                  </span>
                  <Editor editMode={props.editMode} question={props.question} />
                </div>

                <div className="col-span-1 sm:col-start-2 sm:col-span-10">
                  <label
                    htmlFor="tags"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tags
                  </label>
                  <span className="text-xs font-light">
                    Add up to 5 tags to describe what your question is about
                  </span>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="tags"
                      id="tags"
                      autoComplete="tags"
                      placeholder="e.g. ( Java - Mechanics - Drawing )"
                      className="flex-1 border px-3 py-2 focus:outline-none placeholder:text-xs placeholder:font-light focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                      onChange={(e) => handleCategory(e.target.value)}
                      defaultValue={
                        props.editMode
                          ? props.question[0].categories
                              .map((cat) => cat.name)
                              .join(" - ")
                          : null
                      }
                    />
                  </div>
                </div>
                <div className="col-span-2 col-start-2">
                  <button
                    className="px-3 py-2 text-white bg-cyan-600 hover:bg-cyan-800 rounded-md cursor-pointer"
                    type="submit"
                  >
                    {props.buttonLabel}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
