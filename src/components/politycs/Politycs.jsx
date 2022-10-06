import React from "react"
import "./politycs.css"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { politycs } from "../../dummyData"
import Heading from "../common/heading/Heading"
import { Link } from "react-router-dom"
import Side from "../home/sideContent/side/Side"

const Politycs = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 16,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 16,
        },
      },
    ],
  }
  return (
    <>
    <main>
     <div className="Politycs">
     <section className='politycs'>
        <Heading title='Politycs' />
        <div className='content'>
          <Slider {...settings}>
            {politycs.map((val) => {
              return (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div class='category category1'>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className='text row'>
                    <Link to={`/NewsPage/${val.id}`}>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      </Link>
                      <div className='date'>
                        <i class='fas fa-calendar-days'></i>
                        <label>{val.date}</label>
                      </div>
                      <div className='comment'>
                        <i class='fas fa-comments'></i>
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

export default Politycs
