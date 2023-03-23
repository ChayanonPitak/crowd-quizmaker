import { FormEvent, useEffect, useState } from 'react'
import Mainnav from '../../../components/main/mainnav'
import { useMutation, gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import QuizQuestionItem from '../../../components/main/quizQuestionListItem'
import { isAuthenticated } from '../../../utils/storage'

const ManageTopic = () => {
  const router = useRouter()
  const { id } = router.query
  const [questions, setQuestions]: any[] = useState([])

  const [add_question, addQuestionData] = useMutation(gql`
    mutation CreateOneQuestion($data: QuestionCreateInput!) {
      createOneQuestion(data: $data) {
        id
      }
    }
  `)

  const [delete_question, deleteQuestionData] = useMutation(gql`
    mutation Mutation($where: QuestionWhereUniqueInput!) {
      deleteOneQuestion(where: $where) {
        id
      }
    }
  `)

  const createQuestion = (e: FormEvent<HTMLFormElement>) => {
    {
      e.preventDefault()
      if (!addQuestionData.loading) {
        add_question({
          variables: {
            data: {
              question: {
                question: document.getElementById('question')!.value,
                A: document.getElementById('choiceA')!.value,
                B: document.getElementById('choiceB')!.value,
                C: document.getElementById('choiceC')!.value,
                D: document.getElementById('choiceD')!.value,
                answer: document.querySelector('input[name="answer"]:checked')!
                  .value,
              },
              topic: {
                connect: {
                  id,
                },
              },
              creator: {
                connect: {
                  id: isAuthenticated()!.id,
                },
              },
              correctRate: 0,
            },
          },
        })
        router.reload()
      }
    }
  }

  const deleteQuestion = (id: string) => {
    if (!deleteQuestionData.loading) {
      delete_question({
        variables: {
          where: {
            id,
          },
        },
      })
      router.reload()
    }
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
                    query Query($where: QuestionWhereInput) {
                        questions(where: $where) {
                          id
                          question
                        }
                      }
              `,
          variables: {
            where: {
              AND: [
                { topicId: { equals: id } },
                { creatorId: { equals: isAuthenticated()!.id } },
              ],
            },
          },
        }),
      })
      const questionData = await data.json()
      console.log(questionData)

      if (questionData.data) {
        console.log(questionData.data.questions)
        const temp: JSX.Element[] = []
        if (questionData.data.questions.length > 0)
          for (const item of questionData.data.questions) {
            const props: any = {}
            props.question = item.question.question
            props.key = item.id
            props.deleteFunction = () => deleteQuestion(item.id)
            temp.push(<QuizQuestionItem {...props} />)
          }
        else
          temp.push(
            <div className="text-black text-bold text-xl lg:text-2xl width-full height-full align-middle text-center">
              {' '}
              None!{' '}
            </div>
          )
        setQuestions(temp)
      }
    }
    fetchQuestions()
  }, [])

  return (
    <>
      <Mainnav />
      <div className={`absolute inset-x-1 md:inset-x-32 lg:inset-x-56 mt-14`}>
        <div className="font-bold text-5xl">Your questions</div>
        {questions}
        <hr className="my-3" />
        <div className="font-bold text-5xl">Create New Question</div>
        <div className="absolute inset-x-5 mt-14 text-3xl">
          <form
            onSubmit={(e) => {
              createQuestion(e)
            }}
          >
            <table className="w-full">
              <tbody>
                <tr className="h-32">
                  <td className="text-right font-semibold">
                    <label htmlFor="question">Question</label>
                  </td>
                  <td>
                    <textarea
                      name="question"
                      id="question"
                      className="ml-2 border-black  border-2 rounded-md w-full h-full"
                      required
                    />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td />
                </tr>
                <tr className="h-6">
                  <td className="text-right font-semibold">
                    <input
                      type="radio"
                      name="answer"
                      id="A"
                      value="A"
                      className="ml-2 border-black border-2"
                      required
                    />{' '}
                    <span className="ml-2 text-base">A</span>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="choiceA"
                      id="choiceA"
                      className="ml-2 border-black w-full  border-2 rounded-md text-base h-6"
                      required
                    />
                  </td>
                </tr>
                <tr className="h-6">
                  <td className="text-right font-semibold">
                    <input
                      type="radio"
                      name="answer"
                      id="B"
                      value="B"
                      className="ml-2 border-black border-2"
                    />{' '}
                    <span className="ml-2 text-base">B</span>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="choiceB"
                      id="choiceB"
                      className="ml-2 border-black w-full border-2 rounded-md text-base h-6"
                      required
                    />
                  </td>
                </tr>
                <tr className="h-6">
                  <td className="text-right font-semibold">
                    <input
                      type="radio"
                      name="answer"
                      id="C"
                      value="C"
                      className="ml-2 border-black border-2"
                    />{' '}
                    <span className="ml-2 text-base">C</span>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="choiceC"
                      id="choiceC"
                      className="ml-2 border-black w-full border-2 rounded-md text-base h-6"
                      required
                    />
                  </td>
                </tr>
                <tr className="h-6">
                  <td className="text-right font-semibold">
                    <input
                      type="radio"
                      name="answer"
                      id="D"
                      value="D"
                      className="ml-2 border-black border-2"
                    />{' '}
                    <span className="ml-2 text-base">D</span>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="choiceD"
                      id="choiceD"
                      className="ml-2 border-black w-full border-2 rounded-md text-base h-6"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              type="submit"
              value="Add"
              className="absolute transition duration-200 w-1/5 h-10 mt-10 right-0 bg-black hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-2xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default ManageTopic
