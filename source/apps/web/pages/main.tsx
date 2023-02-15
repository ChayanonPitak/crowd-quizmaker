const Main = () => {
  return (
    <>
      <div className="flex flex-row space-x-2 w-1/4">
        <button
          type="button"
          className="transition duration-200 bg-neutral-500 hover:bg-neutral-600 focus:bg-neutral-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          <span className="inline-block mr-2">Contribute</span>
        </button>
        <button
          type="button"
          className="transition duration-200 bg-neutral-500 hover:bg-neutral-600 focus:bg-neutral-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          <span className="inline-block mr-2">My workspace</span>
        </button>
      </div>
    </>
  )
}

export default Main
