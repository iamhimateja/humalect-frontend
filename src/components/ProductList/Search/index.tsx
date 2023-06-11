import React from 'react'

import { SearchIcon } from '@/components/Icons'

import styles from './Search.module.css'

type SearchProps = {
  searchTerm: string
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search = ({ searchTerm, handleSearchChange }: SearchProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <SearchIcon className={styles.svg} aria-hidden="true" />
      </div>
      <input
        type="search"
        className={styles.input}
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Search
