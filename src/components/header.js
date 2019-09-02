import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <div className="HeaderBrand">
        <Link to="/"><img src={require('../images/logo-bauhaus-black.png')} width="30"/></Link>
      </div>
      <div className="HeaderNav">
        <Link to="/works" className="menu-item">Works</Link>
        <Link to="/playground" className="menu-item">Playground</Link>
        <Link to="/contact"><button>Contact</button></Link>
      </div>
    </div>
  </div>
)

export default Header
