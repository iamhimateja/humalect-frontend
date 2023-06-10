'use client'

import type { HydrateProps } from '@tanstack/react-query'
import { Hydrate as RQHydrate } from '@tanstack/react-query'

function Hydrate(props: HydrateProps) {
  // this is a wrapper component for the react-query Hydrate component
  // it is used to hydrate the react-query cache on the client
  return <RQHydrate {...props} />
}

export default Hydrate
