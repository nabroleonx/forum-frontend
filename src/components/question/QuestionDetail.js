import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import QuestionLayout from "./QuestionLayout";
import AnswerCreate from "../answer/AnswerCreate";

export default function QuestionDetail() {
  const { questions } = useSelector((state) => state.questions);
  const { id } = useParams();

  const newQuestion = questions.filter(
    (question) => question.id === parseInt(id)
  );

  return (
    <>
      <QuestionLayout isDetailPage={true} questions={newQuestion} />
      <div className="mt-6 border-t pt-3 border-gray-200">
        <span className="font-light text-gray-900 text-xl">
          Write your answer
        </span>
        <AnswerCreate questionId={id} />
      </div>
    </>
  );
}
