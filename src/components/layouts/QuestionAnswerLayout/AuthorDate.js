import { Link } from "react-router-dom";

export const AuthorDate = ({ content }) => {
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  return (
    <div className="min-w-0 flex-1">
      <p className="text-sm font-medium text-gray-900">
        <Link to="/" className="hover:underline capitalize">
          {content.name}
        </Link>
      </p>
      <p className="text-sm text-gray-500">
        <Link to="/" className="hover:underline">
          <time dateTime={content.updated_at}>
            {formatDate(content.updated_at)}
          </time>
        </Link>
      </p>
    </div>
  );
};
