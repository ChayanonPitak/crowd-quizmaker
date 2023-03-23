const QuizAttemptItem = (props: {
    index: number
    id: string
    question: string
    choice: string[]
}) => {
    const { index, id, question, choice } = props
    return (
        <table className="w-full">
            <tbody>
                <tr className="h-32">
                    <td className="text-right font-semibold">
                        <label htmlFor="question">{index}</label>
                    </td>
                    <td>
                        <div
                            className="ml-2 border-black  border-2 rounded-md w-full h-full"
                        >
                            {question}
                        </div>
                        <br />
                    </td>
                </tr>
                <tr>
                    <td />
                </tr>
                <tr className="h-6">
                    <td className="text-right font-semibold">
                        <input
                            type="radio"
                            name="answer"
                            id={`A${id}`}
                            value={`A${id}`}
                            className="ml-2 border-black border-2"
                            required
                        />{' '}
                        <span className="ml-2 text-base">A</span>
                    </td>
                    <td>
                        <div
                            className="ml-2 border-black w-full  border-2 rounded-md text-base h-6"
                        >{choice[0]}</div>
                    </td>
                </tr>
                <tr className="h-6">
                    <td className="text-right font-semibold">
                        <input
                            type="radio"
                            name="answer"
                            id={`B${id}`}
                            value={`B${id}`}
                            className="ml-2 border-black border-2"
                        />{' '}
                        <span className="ml-2 text-base">B</span>
                    </td>
                    <td>
                        <div
                            className="ml-2 border-black w-full  border-2 rounded-md text-base h-6"
                        >{choice[1]}</div>
                    </td>
                </tr>
                <tr className="h-6">
                    <td className="text-right font-semibold">
                        <input
                            type="radio"
                            name="answer"
                            id={`C${id}`}
                            value={`C${id}`}
                            className="ml-2 border-black border-2"
                        />{' '}
                        <span className="ml-2 text-base">C</span>
                    </td>
                    <td>
                        <div
                            className="ml-2 border-black w-full  border-2 rounded-md text-base h-6"
                        >{choice[2]}</div>
                    </td>
                </tr>
                <tr className="h-6">
                    <td className="text-right font-semibold">
                        <input
                            type="radio"
                            name="answer"
                            id={`D${id}`}
                            value={`D${id}`}
                            className="ml-2 border-black border-2"
                        />{' '}
                        <span className="ml-2 text-base">D</span>
                    </td>
                    <td>
                        <div
                            className="ml-2 border-black w-full  border-2 rounded-md text-base h-6"
                        >{choice[3]}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default QuizAttemptItem
