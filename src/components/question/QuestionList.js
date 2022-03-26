import { useEffect} from "react"
import { useSelector,useDispatch} from "react-redux";
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
    
  </>)
}