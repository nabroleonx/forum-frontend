import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import QuestionForm from "./QuestionForm";
import { updateQuestion, redirect } from "../../redux/actions/questions";

export default function QuestionUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { questions } = useSelector((state) => state.questions);
  const question = questions.filter((question) => question.id === parseInt(id));

  const handleFormSubmit = ({ title, categories, body }) => {
    dispatch(updateQuestion({ id, title, categories, body }));
  };

  const { isLoading } = useSelector((state) => state.questions);

  useEffect(() => {
    if (!isLoading) {
      navigate("/main");
      dispatch(redirect());
    }
  }, [isLoading]);

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
