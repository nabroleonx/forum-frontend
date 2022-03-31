import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import QuestionLayout from "./QuestionLayout";
import { getQuestions } from "../../redux/actions/questions";

export default function QuestionList() {
  const { questions } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions({}));
  }, [dispatch]);

  return <QuestionLayout isDetailPage={false} questions={questions} />;
}
