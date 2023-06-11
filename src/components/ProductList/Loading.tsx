import React from 'react'

import { SpinnerIcon } from '../Icons'

const Loading = () => {
  return (
    <div className="absolute inset-0 z-10 flex min-h-[500px] place-content-center place-items-center bg-white/10 backdrop-blur-sm	">
      <SpinnerIcon className="h-10 w-10 animate-spin text-gray-500" />
    </div>
  )
}

export default Loading
