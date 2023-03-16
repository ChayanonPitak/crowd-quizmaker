import { FormEvent, useEffect, useState } from 'react'
import Mainnav from '../../../components/main/mainnav'
import { useMutation, gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const ManageTopic = () => {
  const router = useRouter()
  const { id } = router.query

  const topicData = useQuery(
    gql`
      query Query($where: TopicWhereUniqueInput!) {
        topic(where: $where) {
          name
          isPublic
          format
          distribution
        }
      }
    `,
    { variables: { where: { id } } }
  )
  const [editTopicquery, editTopicData] = useMutation(gql`
    mutation Mutation(
      $data: TopicUpdateInput!
      $where: TopicWhereUniqueInput!
    ) {
      updateOneTopic(data: $data, where: $where) {
        id
      }
    }
  `)

  const editTopic = (e: FormEvent<HTMLFormElement>) => {
    {
      e.preventDefault()
      if (!editTopicData.loading && !topicData.loading)
        editTopicquery({
          variables: {
            data: {
              name: { set: document.getElementById('topicName')!.value },
              isPublic: {
                set: document.getElementById('isPublic')!.value == 'on',
              },
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
            },
            where: { id },
          },
        })
    }
  }

  useEffect(() => {
    if (topicData.data) {
      document.getElementById('topicName')!.value = topicData.data
        ? topicData.data!.topic.name
        : ''
      document.getElementById('isPublic')!.value = topicData.data
        ? topicData.data!.topic.isPublic == 'on'
          ? 'on'
          : 'off'
        : 'off'
      document.getElementById('allowance')!.value = topicData.data
        ? topicData.data!.topic.distribution.question
          ? topicData.data!.topic.distribution.answer
            ? 'TRUE'
            : 'QUESTION_ONLY'
          : topicData.data!.topic.distribution.answer
          ? 'ANSWER_ONLY'
          : 'FALSE'
        : 'FALSE'
    }
    if (editTopicData.loading) console.log('editing')
    if (editTopicData.error) console.log(editTopicData.error)
    if (editTopicData.data) router.reload()
  })

  return (
    <>
      <Mainnav />
      <div className={`absolute inset-x-1 md:inset-x-32 lg:inset-x-56 mt-14`}>
        <div className="font-bold text-5xl">Manage Topic</div>
        <div className="absolute inset-x-5 mt-14 text-3xl">
          <form onSubmit={(e) => editTopic(e)}>
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
            <div className="font-bold text-5xl my-5">
              Assign Quiz Contributor
            </div>
            <button
              type="button"
              className="absolute transition duration-200 w-1/5 h-10 mt-10 left-0 bg-black hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-2xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
              onClick={() => router.back()}
            >
              Back
            </button>
            <input
              type="submit"
              value="Save"
              className="absolute transition duration-200 w-1/5 h-10 mt-10 right-0 bg-black hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-2xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default ManageTopic
