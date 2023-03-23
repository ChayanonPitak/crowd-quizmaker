import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Mainnav from '../../components/main/mainnav'
import QuizTopicItem from '../../components/main/quizTopicItem'
import { useMutation, gql, ApolloClient } from '@apollo/client'
import { isAuthenticated } from '../../utils/storage'

const MainWorkspace = () => {
  const router = useRouter()
  const [topics, setTopics]: any[] = useState([])

  const [deleteId, setDeleteId] = useState('-1')
  const [deleteName, setDeleteName] = useState('')

  const [deleteTopicQuery, deleteTopicData] = useMutation(gql`
    mutation Mutation($where: TopicWhereUniqueInput!) {
      deleteOneTopic(where: $where) {
        id
      }
    }
  `)

  const gotoCreate = () => {
    router.push('/topic/create')
  }

  const deleteTopic = (id: string) => {
    deleteTopicQuery({ variables: { where: { id } } })
    router.reload()
    setDeleteId('-1')
  }

  const manageTopic = (id: string) => {
    router.push(`/topic/${id}/manage`)
  }

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query User($where: UserWhereUniqueInput!) {
              user(where: $where) {
                ownedTopics {
                  id
                  name
                }
              }
            }
          `,
          variables: { where: { id: isAuthenticated()!.id } },
        }),
      })
      const topicData = await data.json()

      if (topicData.data) {
        console.log(topicData.data)
        const temp: JSX.Element[] = []
        if (topicData.data.user.ownedTopics.length > 0)
          for (const item of topicData.data.user.ownedTopics) {
            temp.push(
              <QuizTopicItem
                name={item.name}
                key={item.id}
                manageFunction={() => manageTopic(item.id)}
                deleteFunction={() => {
                  setDeleteId(item.id)
                  setDeleteName(item.name)
                }}
              />
            )
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
      <div
        className="absolute transition duration-200 -z-20 w-1/5 h-10 right-5 bg-neutral-500 hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-4xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
        onClick={gotoCreate}
      >
        Create
      </div>
      <div className="absolute inset-x-1 md:inset-x-32 lg:inset-x-56 mt-14">
        {topics}
      </div>
      {deleteId !== '-1' && (
        <div className="fixed w-screen h-screen inset-0 bg-neutral-900 bg-opacity-50">
          <div className="fixed inset-5 md:inset-32 lg:inset-64 bg-neutral-800 text-white text-bold text-xl lg:text-2xl rounded-lg flex flex-col justify-center items-center text-center">
            Are you sure you want to delete {deleteName}? <br />
            This action is irreversible.
            <div className="w-3/4 h-1/2 flex justify-between content-end flex-wrap">
              <div
                className="w-5/12 h-1/3 bg-red-500 hover:bg-red-600 text-white text-center font-semibold text-md md:text-xl lg:text-4xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
                onClick={() => deleteTopic(deleteId)}
              >
                Delete
              </div>
              <div
                className="w-5/12 h-1/3 bg-neutral-500 hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-4xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
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
