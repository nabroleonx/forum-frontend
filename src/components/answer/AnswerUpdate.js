import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Editor from "./Editor";
import { updateAnswer } from "../../redux/actions/answers";
import QuestionDetail from "../question/QuestionDetail";

export default function AnswerUpdate() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { question } = useSelector((state) => state.questions);
  const questionId = question.id;

  const answer = question.answer.filter((answer) => answer.id === parseInt(id));

  const handleFormSubmit = ({ body }) => {
    dispatch(updateAnswer({ id, questionId, body }));
  };

  return (
    <>
      <QuestionDetail answerMode={false} />
      <div className="mt-6 border-t border-gray-200 p-3"></div>
      <Editor
        editMode={true}
        handleFormSubmit={handleFormSubmit}
        answer={answer}
        buttonLabel="Update Answer"
      />
    </>
  );
}
