import { useDispatch, useSelector } from "react-redux";

import QuestionForm from "./QuestionForm";
import { createQuestion, redirect } from "../../redux/actions/questions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = ({ title, categories, body }) => {
    dispatch(createQuestion({ title, categories, body }));
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
        editMode={false}
        handleFormSubmit={handleFormSubmit}
        buttonLabel="Post Question"
      />
    </div>
  );
}
