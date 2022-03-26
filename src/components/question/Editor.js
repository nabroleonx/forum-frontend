import React, { useState, useMemo } from "react";
import { RichTextEditor } from '@mantine/rte';
export default function Editor () {
  const [value, onChange] = useState('');
  const modules = useMemo(
    () => ({
      history: { delay: 2500, userOnly: true },
      syntax: true,
    }),
    []
  );

  return <RichTextEditor
    controls={[
      ['bold', 'italic', 'underline', 'strike'],
      ['h1', 'h2', 'h3', 'h4'],
      ['unorderedList', 'orderedList'],
      ['link', 'image', 'codeBlock', 'code', 'blockquote'],
      ['sup', 'sub'],
      ['alignLeft', 'alignCenter', 'alignRight'],
    ]}
    modules={modules}
    value={value}
    onChange={onChange} />
}