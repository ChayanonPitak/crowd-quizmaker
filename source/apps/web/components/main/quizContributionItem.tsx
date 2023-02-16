import { MouseEventHandler } from 'react'

const QuizTopicItem = (props: {
  name: string
  quizContributionFunction?: MouseEventHandler<HTMLDivElement>
  attemptQuizFunction?: MouseEventHandler<HTMLDivElement>
}) => {
  const { name, quizContributionFunction, attemptQuizFunction } = props
  return (
    <div className="w-full h-20 bg-neutral-200 rounded-lg flex justify-between mb-3">
      <div className="w-1/2 h-full bg-neutral-500 text-white text-center font-semibold text-sm text-md md:text-xl xl:text-4xl overflow-clip whitespace-nowrap rounded-l-lg flex flex-col justify-center items-center">
        {name}
      </div>
      <div className="w-2/5 h-full flex justify-end">
        {quizContributionFunction && (
          <div
            className="transition duration-200 w-2/5 h-full bg-neutral-500 hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl xl:text-4xl overflow-clip rounded-lg flex flex-col justify-center items-center"
            onClick={quizContributionFunction}
          >
            Questions
          </div>
        )}
        {attemptQuizFunction && (
          <div
            className="transition duration-200 w-2/5 h-full bg-neutral-500 hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl xl:text-4xl overflow-clip rounded-lg ml-2 flex flex-col justify-center items-center"
            onClick={attemptQuizFunction}
          >
            Attempt quizzes
          </div>
        )}
        {!quizContributionFunction && !attemptQuizFunction && (
          <div className="w-4/5 h-full bg-neutral-600 text-neutral-300 text-center font-semibold text-md md:text-xl xl:text-4xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center">
            No contribution available
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizTopicItem
