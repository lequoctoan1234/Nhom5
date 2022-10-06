import React from "react"
import { Link } from "react-router-dom"

const SocialMedia = () => {
  return (
    <>
      <section className='social'>
        <div className='socBox'>
          <a href="https://www.facebook.com/">
          <i className='fab fa-facebook-f'></i>
          <span>12,740 Likes</span>
          </a>
        </div>
        <div className='socBox'>
          <a href="https://www.pinterest.com/">
          <i className='fab fa-pinterest'></i>
          </a>
          <span>5,600 Fans</span>
        </div>
        <div className='socBox'>
          <a href="https://twitter.com/?lang=vi">
          <i className='fab fa-twitter'></i>
          <span>8,700 Followers</span>
          </a>
        </div>
        <div className='socBox'>
          <a href="https://www.instagram.com/">
          <i className='fab fa-instagram'></i>
          <span>22,700 Followers</span>
          </a>
        </div>
        <div className='socBox'>
          <a href="https://www.youtube.com">
          <i className='fab fa-youtube'></i>
          <span>2,700 Subscriber</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default SocialMedia
