import { useDispatch } from "react-redux";

import Editor from "./Editor";
import { createAnswer } from "../../redux/actions/answers";

export default function AnswerCreate({ questionId }) {
  const dispatch = useDispatch();

  const handleFormSubmit = ({ body }) => {
    dispatch(createAnswer({ questionId, body }));
  };

  return (
    <div className="mt-3">
      <Editor
        editMode={true}
        handleFormSubmit={handleFormSubmit}
        buttonLabel="Post Answer"
      />
    </div>
  );
}
