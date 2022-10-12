import React from "react"
import "./memes.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { memes } from "../../dummyData"
import Heading from "../common/heading/Heading"
import Side from "../home/sideContent/side/Side"
import { Link } from "react-router-dom"

const Memes = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 8,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 8,
        },
      },
    ],
  }
  return (
    <>
    <main>
     <div className="Memes">
     <section className='memes'>
        <Heading title='Memes' />
        <div className='content'>
          <Slider {...settings}>
            {memes.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div className='category category1'>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className='text row'>
                      <Link to={`/NewsPage/${val.id}`}>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      </Link>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i>
                        <label>{val.date}</label>
                      </div>
                      <div className='comment'>
                        <i className='fas fa-comments'></i>
                        <label>{val.comments}</label>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
      <section className='sideContent'>
            <Side />
      </section>
     </div>
     </main>
    </>
  )
}

export default Memes
