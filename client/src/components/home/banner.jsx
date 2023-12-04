import React from 'react'
import './banner.css'
// import Carousel from 'react-material-ui-carousel'
import IMG1 from '../../assets/banner1.jpg'
// import IMG2 from '../../assets/banner2.jpg'
// import IMG3 from '../../assets/banner3.jpg'

const data = [
   IMG1,
//    IMG2,
//    IMG3
]

const Banner = () => {
  return (
    <>
        {/* <Carousel className='carousel'
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                backgroundColor: "white",
                color:"black"
            }
        }}
        >
            {
                data.map((imag , i) => {
                    return(
                        <>
                            <img src={imag} alt="new" className='bannerImg'/>
                        </>
                    )
                })
            }
        </Carousel> */}

<header>
      <div className="container header_container">
        <div className="header_left">
          <h1>Transforming learning.</h1>
          <p>We are revolutionising the way skills, experiences, and learning outcomes are delivered online. Join the largest tech community and fast forward your career.</p>
          <a href="/course" className='btn btn-primary'>All Course</a>
        </div>

        <div className="header_right">
          <div className="header_right-img">
            <img src={IMG1} alt="Img"/>
          </div>
        </div>
      </div>
    </header>


    </>
  )
}

export default Banner