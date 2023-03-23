import { FormEvent, useState } from 'react'
import Mainnav from '../../components/main/mainnav'

const Main = () => {
  const [nameWarning, setNameWarning] = useState('')

  const createTopic = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Creating topic')
    const name = document.getElementById('topicName')!.value

    if (!name) {
      setNameWarning('Please enter a topic name')
    }
  }

  return (
    <>
      <Mainnav />
      <div className="absolute inset-x-1 md:inset-x-32 lg:inset-x-56 mt-14">
        <div className="font-bold text-5xl">Create Topic</div>
        <div className="absolute inset-x-5 mt-14 text-3xl">
          <form onSubmit={(e) => createTopic(e)} method="post">
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
                      onChange={() => setNameWarning('')}
                    />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td className="text-red-500">{nameWarning}</td>
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
                  <td className="text-right font-semibold">
                    <label htmlFor="allowance">Allowance</label>
                  </td>
                  <td>
                    <select
                      name="Allowance"
                      id="allowance"
                      className="ml-2 border-black  border-2 rounded-md"
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
                </tr>
              </tbody>
            </table>
            <input
              type="submit"
              value="Create"
              className="absolute transition duration-200 w-1/5 h-10 mt-10 right-0 bg-neutral-500 hover:bg-neutral-600 text-white text-center font-semibold text-md md:text-xl lg:text-2xl overflow-clip whitespace-nowrap rounded-lg flex flex-col justify-center items-center"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Main
