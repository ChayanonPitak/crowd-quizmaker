import Mainnav from '../../components/main/mainnav'
import QuizTopicItem from '../../components/main/quizTopicItem'

const MainWorkspace = () => {
  const topics: JSX.Element[] = []
  for (let i = 0; i < 10; i++) {
    topics.push(<QuizTopicItem name={`Topic ${i}`} id={`${i}`} />)
  }
  return (
    <>
      <Mainnav />
      <div className="absolute inset-x-1 md:inset-x-32 lg:inset-x-64 pt-10">
        {topics}
      </div>
    </>
  )
}

export default MainWorkspace
