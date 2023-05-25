import React, { useContext } from 'react'

import styles from './Search.module.scss'
import { SearchContext } from '../../App'

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        fill='none'
        height='24'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        viewBox='0 0 24 24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='11' cy='11' r='8' />
        <line x1='21' x2='16.65' y1='21' y2='16.65' />
      </svg>
      {searchValue && (
        <svg
          className={styles.clearIcon}
          enableBackground='new 0 0 32 32'
          height='32px'
          viewBox='0 0 32 32'
          onClick={() => setSearchValue('')}>
          <path
            d='M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z'
            fill='#121313'
            id='Close'
          />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      )}
      <input
        className={styles.input}
        value={searchValue}
        placeholder='Поиск пиццы...'
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default Search
