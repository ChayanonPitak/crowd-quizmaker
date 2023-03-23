import Router from 'next/router'
import Mainnav from '../../components/main/mainnav'
import QuizContributionItem from '../../components/main/quizContributionItem'

const MainContribute = () => {
  const topics: JSX.Element[] = []

  const manageQuestions = (id: string) => {
    Router.push(`/topic/${id}/questions`)
  }

  const attemptQuiz = (id: string) => {
    Router.push(`/topic/${id}/attempt`)
  }

  for (let i = 0; i < 3; i++) {
    topics.push(
      <QuizContributionItem
        name={`Topic ${i}`}
        key={`${i}`}
        quizContributionFunction={() => manageQuestions(`${i}`)}
        attemptQuizFunction={() => attemptQuiz(`${i}`)}
      />
    )
  }

  for (let i = 3; i < 6; i++) {
    topics.push(
      <QuizContributionItem
        name={`Topic ${i}`}
        key={`${i}`}
        attemptQuizFunction={() => attemptQuiz(`${i}`)}
      />
    )
  }

  for (let i = 6; i < 9; i++) {
    topics.push(
      <QuizContributionItem
        name={`Topic ${i}`}
        key={`${i}`}
        quizContributionFunction={() => manageQuestions(`${i}`)}
      />
    )
  }

  for (let i = 9; i < 12; i++) {
    topics.push(<QuizContributionItem name={`Topic ${i}`} key={`${i}`} />)
  }

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
