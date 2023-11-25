import React, { useEffect } from 'react'
import Banner from './banner'
import Side from './slider'
import './home.css'
import IMG from '../../assets/banner3.jpg'
import {getProducts} from '../redux/action/action';
import {useDispatch, useSelector} from "react-redux"

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
        <div className="center_img">
          <img src={IMG} alt="" />
        </div>
      <Side title = "Best Seller"  products={products}/>

    </div>
  )
}

export default Main