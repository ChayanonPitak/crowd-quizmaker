import Router from 'next/router'
import { useState } from 'react'
import Mainnav from '../../components/main/mainnav'
import QuizTopicItem from '../../components/main/quizTopicItem'

const MainWorkspace = () => {
  const topics: JSX.Element[] = []

  const [deleteId, setDeleteId] = useState('-1')

  const deleteTopic = (id: string) => {
    console.log(`Deleted topic ${id}`)
    setDeleteId('-1')
  }

  const manageTopic = (id: string) => {
    Router.push(`/topic/${id}/manage`)
  }

  for (let i = 0; i < 10; i++) {
    topics.push(
      <QuizTopicItem
        name={`Topic ${i}`}
        id={`${i}`}
        key={`${i}`}
        manageFunction={() => manageTopic(`${i}`)}
        deleteFunction={() => setDeleteId(`${i}`)}
      />
    )
  }
  return (
    <>
      <Mainnav />
      <div className="absolute transition duration-200 w-1/5 h-10 right-5 bg-neutral-500 hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl xl:text-4xl overflow-clip whitespace-nowrap rounded-lg">
        Create
      </div>
      <div className="absolute inset-x-1 md:inset-x-32 lg:inset-x-64 pt-14">
        {topics}
      </div>
      {deleteId !== '-1' && (
        <div className="fixed w-screen h-screen inset-0 bg-neutral-900 bg-opacity-50 z-10">
          <div className="fixed inset-5 md:inset-32 lg:inset-64 bg-neutral-800 text-white text-bold text-xl lg:text-2xl rounded-lg flex flex-col justify-center items-center text-center">
            Are you sure you want to delete {deleteId}? <br />
            This action is irreversible.
            <div className="w-3/4 h-1/2 flex justify-between content-end flex-wrap">
              <div
                className="w-5/12 h-1/3 bg-red-500 hover:bg-red-600 text-white text-center font-semibold text-md md:text-xl xl:text-4xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
                onClick={() => deleteTopic(deleteId)}
              >
                Delete
              </div>
              <div
                className="w-5/12 h-1/3 bg-neutral-500 hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl xl:text-4xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
                onClick={() => setDeleteId('-1')}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MainWorkspace
