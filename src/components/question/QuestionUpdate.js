import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import QuestionForm from "./QuestionForm";
import { updateQuestion } from "../../redux/actions/questions";

export default function QuestionUpdate() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { questions } = useSelector((state) => state.questions);
  const question = questions.filter((question) => question.id === parseInt(id));

  const handleFormSubmit = ({ title, categories, body }) => {
    dispatch(updateQuestion({ id, title, categories, body }));
  };

  return (
    <div>
      <QuestionForm
        editMode={true}
        handleFormSubmit={handleFormSubmit}
        question={question}
        buttonLabel="Update Question"
      />
      ;
    </div>
  );
}
