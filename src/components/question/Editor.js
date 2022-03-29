import React, { useState, useMemo, useEffect } from "react";
import { RichTextEditor } from "@mantine/rte";
import { useDispatch } from "react-redux";
import { get_body } from "../../redux/actions/questions";

export default function Editor(props) {
  const [value, onChange] = useState(props.editMode && props.question[0].body);

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

  const handleImageUpload = (file) =>
    new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("image", file);

      fetch(
        "https://api.imgbb.com/1/upload?key=7fe333bafed6f7fc10c51c34bf795700",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((result) => resolve(result.data.url))
        .catch(() => reject(new Error("Upload failed")));
    });

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
      onImageUpload={handleImageUpload}
    />
  );
}
