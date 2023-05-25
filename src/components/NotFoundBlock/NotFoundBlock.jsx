import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span >😕</span>
        <br />
        Nothing is found :(
      </h1>
      <p className={styles.description}>Unfortunately current page can not be reached</p>
    </div>
  )
}

export default NotFoundBlock
