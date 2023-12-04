import React, { useEffect } from 'react'
import Banner from './banner'
import Side from './slider'
import './home.css'
import IMG from '../../assets/banner.jpg'
import {getProducts} from '../redux/action/action';
import {useDispatch, useSelector} from "react-redux"
import IMG1 from '../../assets/volkswagen.svg'
import IMG2 from '../../assets/samsung.svg'
import IMG3 from '../../assets/cisco.svg'
import IMG4 from '../../assets/att.svg'
import IMG5 from '../../assets/procter_gamble.svg'
import IMG6 from '../../assets/hewlett_packard_enterprise.svg'
import IMG7 from '../../assets/citi.svg'
import IMG8 from '../../assets/ericsson.svg'

const Main = () => {

  const {products} = useSelector(state=> state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  },[dispatch]);

  return (
    <div className='home_section'>
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Side title = "Our Course" products={products}/>
        </div>
        <div className="right_slide">
          <h4>New Launches Course</h4>
          <img src={IMG} alt="" />
          <a href="">see More</a>
        </div>
      </div>

      <Side title = "Explore Now" products={products} />
        <div className="testimonail">
          {/* <img src={IMG} alt="" /> */}
          <p className='testimonail_text'>Trusted by over 15,000 companies and millions of learners around the world</p>
          <div className="imageContainer">
            <div className="imgCart">
              <img src={IMG1} alt="" />
            </div>
            <div className="imgCart">
              <img src={IMG2} alt="" />
            </div>
            <div className="imgCart">
              <img src={IMG3} alt="" />
            </div>
            <div className="imgCart">
              <img src={IMG4} alt="" />
            </div>
            <div className="imgCart">
              <img src={IMG5} alt="" />
            </div>
            <div className="imgCart">
              <img src={IMG6} alt="" />
            </div>
            <div className="imgCart">
              <img src={IMG7} alt="" />
            </div>
            <div className="imgCart">
              <img src={IMG8} alt="" />
            </div>
          </div>
        </div>
      <Side title = "Best Seller"  products={products}/>

    </div>
  )
}

export default Main