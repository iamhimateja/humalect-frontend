import Link from 'next/link'
import React from 'react'

import { ArrowLeftIcon } from './Icons'

const NotFoundMessage = () => {
  return (
    <div className="my-20 flex flex-col items-center">
      <div className="text-5xl font-bold text-indigo-500">404</div>

      <div className="mt-10 text-xl font-bold md:text-2xl lg:text-3xl xl:text-5xl">This product does not exist</div>

      <div className="mt-8 text-sm font-medium text-gray-400 md:text-xl lg:text-2xl">
        The product you are looking for could not be found.
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="flex flex-row place-content-center place-items-center text-indigo-500 hover:text-indigo-400"
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundMessage
