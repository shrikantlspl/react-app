import React from 'react'
import "../Styles/header.scss"

const Header = ({heading}) => {
  return (
    <div className='header-contaier'>
    <h1>{heading}</h1>
    </div>
  )
}

export default Header