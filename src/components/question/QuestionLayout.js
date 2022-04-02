import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { Menu, Transition } from "@headlessui/react";
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
  PencilIcon,
} from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";

import QuestionDelete from "./QuestionDelete";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function QuestionLayout({ isDetailPage, questions }) {
  const [modal, setModal] = useState(false);
  const { user } = useSelector((state) => state.auth);

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <>
      <div className="mt-4">
        <h1 className="sr-only">Recent questions</h1>
        <ul className="space-y-4 list-none ml-0">
          {questions.map((question) => (
            <li
              key={question.id}
              className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
            >
              <article aria-labelledby={"question-title-" + question.id}>
                <div>
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        <Link to="/" className="hover:underline capitalize">
                          {question.name}
                        </Link>
                      </p>
                      <p className="text-sm text-gray-500">
                        <Link to="/" className="hover:underline">
                          <time dateTime={question.updated_at}>
                            {formatDate(question.updated_at)}
                          </time>
                        </Link>
                      </p>
                    </div>
                    <div className="flex-shrink-0 self-center flex">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                            <span className="sr-only">Open options</span>
                            <DotsVerticalIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {isDetailPage &&
                                user &&
                                user.id === question.author && (
                                  <>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <Link
                                          to={`/question/${question.id}/edit`}
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "flex px-4 py-2 text-sm"
                                          )}
                                        >
                                          <PencilIcon
                                            className="mr-3 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                          />
                                          <span>Edit</span>
                                        </Link>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <span
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "flex px-4 py-2 text-sm cursor-pointer"
                                          )}
                                          onClick={() => setModal(true)}
                                        >
                                          <TrashIcon
                                            className="mr-3 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                          />
                                          <span>Delete</span>
                                        </span>
                                      )}
                                    </Menu.Item>
                                  </>
                                )}
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "flex px-4 py-2 text-sm"
                                    )}
                                  >
                                    <StarIcon
                                      className="mr-3 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span>Add to favorites</span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "flex px-4 py-2 text-sm"
                                    )}
                                  >
                                    <CodeIcon
                                      className="mr-3 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span>Embed</span>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="/"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "flex px-4 py-2 text-sm"
                                    )}
                                  >
                                    <FlagIcon
                                      className="mr-3 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span>Report content</span>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <Link to={`/question/${question.id}/detail`}>
                    <h2
                      id={"question-title-" + question.id}
                      className="mt-4 text-xl capitalize font-base text-sky-700"
                    >
                      {question.title}
                    </h2>
                  </Link>
                </div>
                {isDetailPage && (
                  <div
                    id="question"
                    className="mt-2 text-sm text-gray-700 space-y-4"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(question.body, {
                        USE_PROFILES: { html: true },
                      }),
                    }}
                  />
                )}
                <div>
                  {question.categories.map((category) => (
                    <button
                      key={question.id}
                      type="button"
                      className="inline-flex items-center px-2 py-px mr-2 mt-4 border border-transparent text-xs font-light rounded text-blue-800 bg-sky-100 hover:bg-sky-200"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex justify-between space-x-8">
                  <div className="flex space-x-6">
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="font-medium text-gray-900">
                          {question.likes}
                        </span>
                        <span className="sr-only">likes</span>
                      </button>
                    </span>
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="font-medium text-gray-900">
                          {question.replies}
                        </span>
                        <span className="sr-only">replies</span>
                      </button>
                    </span>
                    <span className="inline-flex items-center text-sm">
                      <button
                        key={question.id}
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <EyeIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="font-medium text-gray-900">
                          {question.views}
                        </span>
                        <span className="sr-only">views</span>
                      </button>
                    </span>
                  </div>
                  <div className="flex text-sm">
                    <span className="inline-flex items-center text-sm">
                      <button
                        type="button"
                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                      >
                        <ShareIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="font-medium text-gray-900">Share</span>
                      </button>
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
      {modal && <QuestionDelete modal={modal} setModal={setModal} />}
    </>
  );
}
