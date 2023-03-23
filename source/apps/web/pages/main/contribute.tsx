import Router from 'next/router'
import { useEffect, useState } from 'react'
import Mainnav from '../../components/main/mainnav'
import QuizContributionItem from '../../components/main/quizContributionItem'
import { isAuthenticated } from '../../utils/storage'

const MainContribute = () => {
  const [topics, setTopics]: any[] = useState([])

  const manageQuestions = (id: string) => {
    Router.push(`/topic/${id}/questions`)
  }

  const attemptQuiz = (id: string) => {
    Router.push(`/topic/${id}/attempt`)
  }

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query Query($where: TopicWhereInput) {
              topics(where: $where) {
                id
                name
                distribution
              }
            }
          `,
          variables: {
            where: { NOT: [{ ownerId: { equals: isAuthenticated()!.id } }] },
          },
        }),
      })
      const topicData = await data.json()
      console.log(topicData)

      if (topicData.data) {
        console.log(topicData.data)
        const temp: JSX.Element[] = []
        if (topicData.data.topics.length > 0)
          for (const item of topicData.data.topics) {
            const props: any = {}
            props.name = item.name
            props.key = item.id
            if (item.distribution.question)
              props.quizContributionFunction = () => manageQuestions(item.id)
            if (item.distribution.answer)
              props.attemptQuizFunction = () => attemptQuiz(item.id)
            temp.push(<QuizContributionItem {...props} />)
          }
        else
          temp.push(
            <div className="text-black text-bold text-xl lg:text-2xl width-full height-full align-middle text-center">
              Welcome! {isAuthenticated()!.name} <br /> Do you have a nice day?
            </div>
          )
        setTopics(temp)
      }
    }

    fetchTopics()
  }, [])

  return (
    <>
      <Mainnav />
      <div className="absolute inset-x-1 md:inset-x-32 lg:inset-x-56 mt-14">
        {topics}
      </div>
    </>
  )
}

export default MainContribute
