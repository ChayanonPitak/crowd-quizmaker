const QuizTopicItem = (props: { id: string; name: string }) => {
  const { id, name } = props
  return (
    <div className="w-full h-20 bg-neutral-200 rounded-lg flex justify-between mb-3">
      <div className="w-1/2 h-full bg-neutral-500 text-white text-center font-semibold text-sm text-md md:text-xl xl:text-4xl overflow-clip whitespace-nowrap rounded-l-lg">
        {name}
      </div>
      <div className="w-2/5 h-full flex justify-end">
        <div className="transition duration-200 w-2/5 h-full bg-neutral-500 hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl xl:text-4xl overflow-clip whitespace-nowrap rounded-lg">
          Manage
        </div>
        <div className="transition duration-200 w-2/5 h-full bg-neutral-500 hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl xl:text-4xl overflow-clip whitespace-nowrap rounded-lg ml-2">
          Delete
        </div>
      </div>
    </div>
  )
}

export default QuizTopicItem
