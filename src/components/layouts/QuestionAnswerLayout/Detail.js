import DOMPurify from "dompurify";
export const Detail = ({content}) => {
  return (
    <div
      id="question"
      className="mt-2 text-sm text-gray-700 space-y-4"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content.body, {
          USE_PROFILES: { html: true },
        }),
      }}
    />
  )
}