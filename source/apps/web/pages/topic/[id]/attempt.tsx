import { useEffect, useState } from 'react'
import Mainnav from '../../../components/main/mainnav'
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

type Question = {
  id: number,
  question: {
    A: string,
    B: string,
    C: string,
    D: string,
    answer: string,
    question: string
  }
}

const ManageTopic = () => {
  const router = useRouter()
  const { id } = router.query
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([])
  const [score, setScore] = useState<number>(0)
  const [currentAnswer, setCurrentAnswer] = useState<string>("");

  const fetchQuestionData = useQuery(gql`
  query ExampleQuery($where: QuestionWhereInput) {
    questions(where: $where) {
      id
    }
  }`)

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!id) return
      const data = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
                  query RandomQuestions($topicId: String!) {
                    randomQuestions(topicId: $topicId) {
                      id
                      question
                    }
                  }
                `,
          variables: {
            topicId: id
          },
        }),
      })
      const Json = await data.json()
      const randomQuestions: Question[] = await Json.data.randomQuestions
      setRandomQuestions(randomQuestions)
    }
    fetchQuestions()
  }, [id])

  const selectAnswer = (answer: string) => {
    setCurrentAnswer(answer)
  }

  const AnswerLayout = (answer: string, choice: string) => {
    return <div className="flex flex-row">
      <div className="w-10 text-center px-2"></div>
      <div className="w-auto px-2 space-x-4">
        <input type="radio" className="form-radio" name="answer" value={choice} onClick={(e) => { selectAnswer(e.currentTarget.value) }} />
        <span>{answer}</span>
      </div>
    </div>
  }

  const QuestionLayout = (currentQuestion: number) => {
    if (!randomQuestions[currentQuestion]) return
    const question = randomQuestions[currentQuestion].question
    return <div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-10 text-center px-2">{currentQuestion + 1}</div>
          <div className="w-auto px-2">{question.question}</div>
        </div>
        {AnswerLayout(question.A, "A")}
        {AnswerLayout(question.B, "B")}
        {AnswerLayout(question.C, "C")}
        {AnswerLayout(question.D, "D")}
      </div>
      <input
        type="submit"
        value="Next"
        className="absolute transition duration-200 w-1/5 h-10 mt-10 right-0 bg-black hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-2xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
      />
    </div>
  }

  const ResultLayout = () => {
    return <div>
      <div>{score}</div>
      <input
        type="submit"
        value="Finish"
        className="absolute transition duration-200 w-1/5 h-10 mt-10 right-0 bg-black hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-2xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
      />
    </div>
  }

  console.log(score)

  return (
    <>
      <Mainnav />
      <div className={`absolute inset-x-1 md:inset-x-32 lg:inset-x-56 mt-14`}>
        <div className="absolute inset-x-5 mt-14 text-3xl">
          {currentQuestion >= 0 && <form
            onSubmit={(e) => {
              e.preventDefault()
              if (currentQuestion === randomQuestions.length) {
                router.push("/")
                return
              }
              const correctAnswer = randomQuestions[currentQuestion].question.answer
              if (currentAnswer === correctAnswer) setScore(score + 1)
              setCurrentQuestion(currentQuestion + 1)
            }}>
            {currentQuestion < randomQuestions.length ? QuestionLayout(currentQuestion) : ResultLayout()}
          </form>}
        </div>
      </div>
    </>
  )
}

export default ManageTopic
