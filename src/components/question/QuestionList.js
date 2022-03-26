import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../../redux/actions/questions";
export default function QuestionList() {

  const { questions } = useSelector((state) => state.questions);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuestions({}))
  }, [dispatch])

  console.log(questions)
  return (
    <>
      <ul className="space-y-4 list-none">
        {questions.map((question) => (
          <li
            key={question.id}
            className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
            <div>
              <div className="flex space-x-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {question.author.name}
                  </p>
                </div>
              </div>
              <h2
                id={"question-title-" + question.id}
                className="mt-4 text-base font-medium text-gray-900"
              >
                {question.title}
              </h2>
            </div>
            <div
              className="mt-2 text-sm text-gray-700 space-y-4"
              dangerouslySetInnerHTML={{ __html: question.body }}
            />
          </li>
        ))}
      </ul>
    </>)
}