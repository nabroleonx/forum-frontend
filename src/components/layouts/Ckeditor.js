import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

let config = {};

export default function Ckeditor() {
  const [questionBody, setQuestionBody] = useState("");

  return (
    <CKEditor
      editor={Editor}
      config={config}
      data={questionBody}
      onChange={(event, editor) => {
        const data = editor.getData();
        setQuestionBody(data);
      }}
    />
  );
}
