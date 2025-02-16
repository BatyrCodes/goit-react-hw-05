import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import s from './Navigation.module.css'
const  buildLinkClass = ( { isActive } ) => {
  return  clsx (s.link , isActive && s.active );
};

function Navigation() {
  return (
    <div>
    <nav className={s.nav}>
    <NavLink to='/' className={buildLinkClass}>
      Home
    </NavLink>
    <NavLink to='/movies' className={buildLinkClass}>
      Movies
    </NavLink>
    </nav>
  </div>
  )
}

export default Navigation
