import React from 'react'
import './banner.css'
import Carousel from 'react-material-ui-carousel'
import IMG1 from '../../assets/banner1.jpg'
import IMG2 from '../../assets/banner2.jpg'
import IMG3 from '../../assets/banner3.jpg'

const data = [
   IMG1,
   IMG2,
   IMG3
]

const Banner = () => {
  return (
    <>
        <Carousel className='carousel'
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
        </Carousel>
    </>
  )
}

export default Banner