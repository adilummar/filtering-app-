import React from 'react'
import './Navigation.css'
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className='search-input' placeholder='search your shoes here' />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}

export default Navigation
