import React, { useState, useMemo, useEffect } from "react";
import { RichTextEditor } from "@mantine/rte";
import { useDispatch, useSelector } from "react-redux";
import { get_body } from "../../redux/actions/answers";

export default function Editor(props) {
  const [value, onChange] = useState(
    props.editMode ? props.answer[0].body : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_body(value));
  }, [value]);

  const modules = useMemo(
    () => ({
      history: { delay: 2500, userOnly: true },
      syntax: true,
    }),
    []
  );

  const [body, setBody] = useState(null);
  const { answerBody } = useSelector((state) => state.answers);

  useEffect(() => {
    setBody(answerBody);
  }, [answerBody]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    props.handleFormSubmit({ body });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <RichTextEditor
        controls={[
          ["bold", "italic", "underline", "strike"],
          ["h1", "h2", "h3", "h4"],
          ["unorderedList", "orderedList"],
          ["link", "image", "codeBlock", "code", "blockquote"],
          ["sup", "sub"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
        modules={modules}
        value={value}
        onChange={onChange}
      />
      <div className="col-span-2 col-start-2">
        <button
          className="px-3 py-2 mt-5 text-white bg-cyan-600 hover:bg-cyan-800 rounded-md cursor-pointer"
          type="submit"
        >
          {props.buttonLabel}
        </button>
      </div>
    </form>
  );
}
