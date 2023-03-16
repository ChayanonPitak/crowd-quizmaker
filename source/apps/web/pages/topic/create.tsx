import { FormEvent, useEffect, useState } from 'react'
import Mainnav from '../../components/main/mainnav'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { isAuthenticated } from '../../utils/storage'

const CreateTopic = () => {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const [addTopic, { data, loading, error }] = useMutation(gql`
    mutation CreateOneTopic($data: TopicCreateInput!) {
      createOneTopic(data: $data) {
        id
      }
    }
  `)

  const page0 = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(1)
  }

  const page1 = (e: FormEvent<HTMLFormElement>) => {
    {
      e.preventDefault()
      if (!loading)
        addTopic({
          variables: {
            data: {
              name: document.getElementById('topicName')!.value,
              isPublic: document.getElementById('isPublic')!.value == 'on',
              distribution: {
                question:
                  document.getElementById('allowance')!.value ==
                    'QUESTION_ONLY' ||
                  document.getElementById('allowance')!.value == 'TRUE',
                answer:
                  document.getElementById('allowance')!.value ==
                    'ANSWER_ONLY' ||
                  document.getElementById('allowance')!.value == 'TRUE',
              },
              format: { type: 'MCHOICE' },
              owner: { connect: { id: isAuthenticated()!.id } },
            },
          },
        })
    }
  }

  useEffect(() => {
    if (loading) console.log('adding')
    if (error) console.log(error)
    if (data) router.push('/main/workspace')
  })

  return (
    <>
      <Mainnav />
      <div
        className={`absolute inset-x-1 md:inset-x-32 lg:inset-x-56 mt-14 ${
          page == 0 ? 'visible' : 'invisible'
        }`}
      >
        <div className="font-bold text-5xl">Create Topic</div>
        <div className="absolute inset-x-5 mt-14 text-3xl">
          <form onSubmit={(e) => page0(e)}>
            <table className="w-full">
              <tbody>
                <tr className="h-14">
                  <td className="text-right font-semibold">
                    <label htmlFor="topicName">Topic Name</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="topicName"
                      id="topicName"
                      className="ml-2 border-black  border-2 rounded-md"
                      required
                    />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td />
                </tr>
                <tr className="h-14">
                  <td className="text-right font-semibold">
                    <label htmlFor="isPublic">This topic is public</label>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="isPublic"
                      id="isPublic"
                      className="ml-2 border-black  border-2 rounded-md"
                    />
                  </td>
                </tr>
                <tr className="h-14">
                  <td className="text-right">
                    <select
                      name="Allowance"
                      id="allowance"
                      className="ml-2 bg-black text-white hover:bg-neutral-600 border-0 rounded-md p-3 transition duration-100"
                      defaultValue={'TRUE'}
                    >
                      <option value="FALSE">No contribution allowed</option>
                      <option value="QUESTION_ONLY">
                        Only question allowed
                      </option>
                      <option value="ANSWER_ONLY">Only answer allowed</option>
                      <option value="TRUE">All contribution allowed</option>
                    </select>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <input
              type="submit"
              value="Next"
              className="absolute transition duration-200 w-1/5 h-10 mt-10 right-0 bg-black hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-2xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
            />
          </form>
        </div>
      </div>
      <div
        className={`absolute inset-x-1 md:inset-x-32 lg:inset-x-56 mt-14 ${
          page == 1 ? 'visible' : 'invisible'
        }`}
      >
        <div className="font-bold text-5xl">Assign Quiz Contributor</div>
        <div className="absolute inset-x-5 mt-14 text-3xl">
          <form onSubmit={(e) => page1(e)}>
            <button
              type="button"
              className="absolute transition duration-200 w-1/5 h-10 mt-10 left-0 bg-black hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-2xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
              onClick={() => setPage(0)}
            >
              Back
            </button>
            <input
              type="submit"
              value="Create"
              className="absolute transition duration-200 w-1/5 h-10 mt-10 right-0 bg-black hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-2xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateTopic
