import React from 'react'
import './Recommended.css'

function Recommended() {
  return (
    <div >
      <h3 className='recommented-title'>recommended</h3>
      <div className='recommented-flex'>
        <button className='btns' >All products</button>
        <button className='btns' >Nike</button>
        <button className='btns' >Adidas</button>
        <button className='btns' >puma</button>
        <button className='btns' >Vans</button>
      </div>
    </div>
  )
}

export default Recommended
