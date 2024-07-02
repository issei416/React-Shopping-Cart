import React from 'react'

const Header = () => {
  return (
      <div className='contaier my-3 text-light p-5 body-header position-relative'>
          <img src="/assets/header-bg.jpg" alt="header shoe image" className='position-absolute'/>
          <h1 className='mt-5'>Shop In Style</h1>
          <p className='lead mb-5'>When you wear it, you Speak with your steps</p>
      </div>
  )
}

export default Header