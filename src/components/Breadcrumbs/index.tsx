import Link from 'next/link'
import React from 'react'

import { ChevronRightIcon } from '../Icons/ChevronRightIcon'

type BreadcrumbPage = {
  current?: boolean
  name: string
  href: string
}

type BreadcrumbProps = {
  pages?: BreadcrumbPage[]
}

const Breadcrumbs = ({ pages }: BreadcrumbProps) => {
  return (
    <nav className="my-4 flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1">
        <li>
          <div>
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Home
            </Link>
          </div>
        </li>
        {pages?.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
              <Link
                href={page.href}
                className="ml-2 text-sm font-medium capitalize text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
