import React from "react"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <img src='../images/tech-logo-footer.png' alt='' />
            <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
            <i className='fa fa-envelope'></i>
            <span> hello@beautiful.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +91 60521488</span>
          </div>
          <div className='box'>
            <h3>SPORT</h3>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Cespedes play the winning Baseball Game</p>
            </div>
          </div>
          <div className='box'>
            <h3>CRICKET</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Renewable energy dead as industry waits for Policy</p>
            </div>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <Link to = '/culture'>
                <span>Culture</span> 
                </Link>
              </li>
              <li>
              <Link to = '/politycs'>
                <span>politycs</span>
                </Link>
              </li>
              <li>
              <Link to = '/memes'>
                <span>Memes</span>
                </Link>
              </li>
              <li>
              <Link to = '/sports'>
                <span>Sports</span>
                </Link>
              </li>
              <li>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>Nhom5</p>
          <p>
             <i className='fa fa-heart'></i> Lê Quóc Toản - Trịnh Thị Trường - Vũ Minh Quân
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
