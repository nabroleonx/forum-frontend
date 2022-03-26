import { useDispatch } from "react-redux";

import QuestionForm from "./QuestionForm";
import { createQuestion } from "../../redux/actions/questions";

export default function QuestionCreate() {
  const dispatch = useDispatch();

  const handleFormSubmit = ({ title, categories, body }) => {
    dispatch(createQuestion({ title, categories, body }));
  };

  return (
    <div>
      <QuestionForm
        editMode={false}
        handleFormSubmit={handleFormSubmit}
        buttonLabel="Post Question"
      />
    </div>
  );
}
