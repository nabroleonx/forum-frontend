import { useState } from "react";
import { AuthorDate } from "../layouts/QuestionAnswerLayout/AuthorDate";
import { MoreActions } from "../layouts/QuestionAnswerLayout/MoreActions";
import { Detail } from "../layouts/QuestionAnswerLayout/Detail";
import { Extras } from "../layouts/QuestionAnswerLayout/Extras";

export default function AnswerLayout({ answers }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="mt-4">
        <h1 className="sr-only">Recent questions</h1>
        <ul className="space-y-4 list-none ml-0">
          {answers.map((answer) => (
            <li
              key={answer.id}
              className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
            >
              <article aria-labelledby={"question-title-" + answer.id}>
                <div>
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <AuthorDate content={answer} />
                    <MoreActions editLink={`/answer/${answer.id}/edit`} isDetailPage={true} content={answer} setModal={setModal} />
                  </div>
                </div>
                <Detail content={answer} />
                <Extras content={answer} />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
