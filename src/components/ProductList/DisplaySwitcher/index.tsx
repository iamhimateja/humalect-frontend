import clsx from 'clsx'
import React from 'react'

import { GridIcon, TableIcon } from '@/components/Icons'

import styles from './DisplaySwitcher.module.css'

type DisplaySwitcherProps = {
  display: 'grid' | 'table'
  handleDisplayChange: (display: 'grid' | 'table') => void
}

const DisplaySwitcher = ({ display, handleDisplayChange }: DisplaySwitcherProps) => {
  return (
    <span className={styles.container}>
      <button
        type="button"
        className={clsx(styles.tableSwitcher, display === 'table' ? styles.activeDisplay : styles.inActiveDisplay)}
        onClick={() => handleDisplayChange('table')}
      >
        <span className="pr-2 text-sm font-semibold">Table</span>
        <TableIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className={clsx(styles.gridSwitcher, display === 'grid' ? styles.activeDisplay : styles.inActiveDisplay)}
        onClick={() => handleDisplayChange('grid')}
      >
        <span className="pr-2 text-sm font-semibold">Grid</span>
        <GridIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </span>
  )
}

export default DisplaySwitcher
