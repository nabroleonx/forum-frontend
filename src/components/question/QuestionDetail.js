import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import QuestionLayout from "./QuestionLayout";
import AnswerCreate from "../answer/AnswerCreate";
import { useEffect } from "react";
import { getQuestion, redirect } from "../../redux/actions/questions";
import AnswerLayout from "../answer/AnswerLayout";

export default function QuestionDetail({ answerMode }) {
  const { question } = useSelector((state) => state.questions);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.answers);

  useEffect(() => {
    if (answerMode) {
      dispatch(getQuestion({ id }));
      if (!isLoading) {
        window.location.reload();
        dispatch(redirect());
      }
    }
  }, [dispatch, isLoading]);

  if (question)
    return (
      <>
        <QuestionLayout isDetailPage={true} questions={[question]} />
        {answerMode && (
          <div className="mt-6 border-t pt-3 border-gray-200">
            <span className="font-light text-gray-900 text-xl">
              {question.answer.length} answers
            </span>
            {<AnswerLayout answers={question.answer} />}
            <div className="mt-6 border-t pt-3 border-gray-200">
              <span className="font-light text-gray-900 text-xl">
                Write your answer
              </span>
              <AnswerCreate questionId={id} />
            </div>
          </div>
        )}
      </>
    );

  return <></>;
}
