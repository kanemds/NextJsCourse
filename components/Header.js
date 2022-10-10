import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>NextJS</span> Course
      </h1>
      <p className={headerStyles.description}>
        Course Update
      </p>
    </div>
  )
}

export default Header