import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import QuestionLayout from "./QuestionLayout";

export default function QuestionDetail() {
  const { questions } = useSelector((state) => state.questions);
  const { id } = useParams();

  const newQuestion = questions.filter(
    (question) => question.id === parseInt(id)
  );

  return <QuestionLayout isDetailPage={true} questions={newQuestion} />;
}
