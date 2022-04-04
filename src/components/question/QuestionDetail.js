import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import QuestionLayout from "./QuestionLayout";
import AnswerCreate from "../answer/AnswerCreate";
import { useEffect } from "react";
import { getQuestion } from "../../redux/actions/questions";

export default function QuestionDetail() {
  const { question } = useSelector((state) => state.questions);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestion({ id }));
  }, [dispatch]);

  if (question)
  return (
    <>
      <QuestionLayout isDetailPage={true} questions={[question]} />
      <div className="mt-6 border-t pt-3 border-gray-200">
        <span className="font-light text-gray-900 text-xl">
          {question.answer.length} answers
        </span>
      {<QuestionLayout isDetailPage={true} questions={question.answer} />}
        <span className="font-light text-gray-900 text-xl">
          Write your answer
        </span>
        <AnswerCreate questionId={id} />
      </div>
    </>
  );
  
  return (
    <>
    
    </>
  )
}
