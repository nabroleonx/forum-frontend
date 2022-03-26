import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import QuestionForm from "./QuestionForm";
import { updateQuestion } from "../../redux/actions/questions";

export default function QuestionUpdate() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const handleFormSubmit = ({ title, categories, body }) => {
    dispatch(updateQuestion({ id, title, categories, body }));
  };

  // question will be filtered out based on the id
  // i don't have question list now
  const title = "Hello world";
  const question =
    '<h1>This is a sample question</h1><pre class="ql-syntax" spellcheck="false">﻿<span class="hljs-built_in">print</span>(<span class="hljs-string">"hello world"</span>)</pre><p><br></p><p>What is <code>python</code>?</p><p><br></p>';
  const categories = "python";

  return (
    <div>
      {/* {console.log(id)} */}
      <QuestionForm
        editMode={true}
        handleFormSubmit={handleFormSubmit}
        title={title}
        categories={categories}
        questionBody={question}
        buttonLabel="Update Question"
      />
      ;
    </div>
  );
}
