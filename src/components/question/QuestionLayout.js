import { Link } from "react-router-dom";
import { useState } from "react";
import QuestionDelete from "./QuestionDelete";
import { AuthorDate } from "../layouts/QuestionAnswerLayout/AuthorDate";
import { MoreActions } from "../layouts/QuestionAnswerLayout/MoreActions";
import { Detail } from "../layouts/QuestionAnswerLayout/Detail";
import { Extras } from "../layouts/QuestionAnswerLayout/Extras";

export default function QuestionLayout({ isDetailPage, questions }) {
  const [modal, setModal] = useState(false);
  
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
                    <AuthorDate content={question} />
                    <MoreActions editLink={`/question/${question.id}/edit`} isDetailPage = {isDetailPage} content = {question} setModal = {setModal}/>
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
                  <Detail content={question} />
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
                <Extras content = {question} />
              </article>
            </li>
          ))}
        </ul>
      </div>
      {modal && <QuestionDelete modal={modal} setModal={setModal} />}
    </>
  );
}
