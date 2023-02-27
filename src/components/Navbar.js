import React from 'react'
import { Link } from 'react-router-dom'

// TODO: wire up button
function Navbar({ title = 'Weather App' }) {
  return (
    <nav className='navbar bg-neutral text-neutral-content'>
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to='/' className='text-lg font-bold' style={{ color: '#FFF' }}>
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'></Link>
            <form action="">
              <input placeholder='Enter a city' type="text" />
            </form>
            <button>Click</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
