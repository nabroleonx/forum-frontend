import React, { useState, useMemo, useEffect } from "react";
import { RichTextEditor } from "@mantine/rte";
import { useDispatch } from "react-redux";
import { get_body } from "../../redux/actions/questions";

export default function Editor(props) {
  const [value, onChange] = useState(props.editMode && props.questionBody);

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

  return (
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
  );
}
