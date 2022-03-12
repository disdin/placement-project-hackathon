import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='base'>
      <div>
        WEBSITE NAME
      </div>

      <div>
        <Link to="/about"><p>About Us</p></Link>
        <Link to="/company"><p>Company</p></Link>
        <Link to="/education"><p>Education</p></Link>
        <Link to="/internships"><p>Internships</p></Link>
        <Link to="/vacancies"><p>Current Vacancies</p></Link>
      </div>

      <div>
        <Button >Join Us</Button>
      </div>
    </div>
  )
}

export default Header