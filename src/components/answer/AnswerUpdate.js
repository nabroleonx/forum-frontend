import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Editor from "./Editor";
import { updateQuestion } from "../../redux/actions/answers";

export default function AnswerUpdate() {
  const dispatch = useDispatch();

  const { questionId } = useParams();
  const { answers } = useSelector((state) => state.answers);
  const answer = answers.filter((answer) => answer.id === parseInt(questionId));

  const handleFormSubmit = ({ body }) => {
    dispatch(updateQuestion({ questionId, body }));
  };

  return (
    <Editor
      editMode={true}
      handleFormSubmit={handleFormSubmit}
      answer={answer}
      buttonLabel="Update Answer"
    />
  );
}
