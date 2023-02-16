import Link from 'next/link'

const Mainnav = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      <div className="flex flex-row space-x-2 w-1/4 justify-start">
        <Link
          href="/main/contribute"
          className="transition duration-200 bg-neutral-500 hover:bg-neutral-600 focus:bg-neutral-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mr-2"
        >
          <span className="inline-block mr-2">Contribute</span>
        </Link>
        <Link
          href="/main/workspace"
          className="transition duration-200 bg-neutral-500 hover:bg-neutral-600 focus:bg-neutral-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mr-2"
        >
          <span className="inline-block mr-2">My workspace</span>
        </Link>
      </div>
    </div>
  )
}

export default Mainnav
