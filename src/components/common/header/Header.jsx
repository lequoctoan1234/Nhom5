import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { faMagicWandSparkles, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className="container-paddingSmall">
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Culture</Link>
              </li>
              <li>
                <Link to='/politycs'>politycs</Link>
              </li>
              <li>
                <Link to='/memes'>Memes</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/boxed'>Boxed</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className="Search">
            <input placeholder= "Search" spellCheck={false}>
            </input>
               {/* <button className="clear">
                <FontAwesomeIcon icon={faCircleXmark} />
               </button> */}
               <button className="search-btn">
               <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
        </div>
        </div>
      </header>
    </>
  )
}

export default Header
