import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import { ChevronRightIcon } from '../Icons/ChevronRightIcon'
import styles from './Breadcrumbs.module.css'

type BreadcrumbPage = {
  current?: boolean
  name: string
  href: string
}

type BreadcrumbProps = {
  pages?: BreadcrumbPage[]
}

const Breadcrumbs = ({ pages }: BreadcrumbProps) => {
  if (!pages || pages?.length === 0) {
    return null
  }

  return (
    <nav className="my-4 flex" aria-label="Breadcrumb">
      <ol role="list" className={styles.breadcrumb}>
        <li>
          <div>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </div>
        </li>
        {pages?.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className={styles.icon} aria-hidden="true" />
              <Link
                href={page.href}
                className={clsx(styles.link, 'ml-2')}
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
