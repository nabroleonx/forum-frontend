import React, {useState, useMemo } from "react";
import { RichTextEditor } from '@mantine/rte';
export default function QuestionCreate() {
  const [value, onChange] = useState('');
  const modules = useMemo(
    () => ({
      history: { delay: 2500, userOnly: true },
      syntax: true,
    }),
    []
  );
  return (
    <div className=" px-4 sm:px-6 lg:px-20 xl:px-24">
      <div className="space-y-8 divide-y divide-gray-200">
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
                Include all the information someone would need to answer your
                question
              </span>
              <RichTextEditor
              controls={[
                ['bold', 'italic', 'underline', 'strike'],
                ['h1', 'h2', 'h3','h4'],
                ['unorderedList', 'orderedList'],
                ['link','image','codeBlock'],
                ['sup', 'sub'],
                ['alignLeft', 'alignCenter', 'alignRight'],
              ]}
                modules={modules}
                value={value}
                onChange={onChange} />
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
