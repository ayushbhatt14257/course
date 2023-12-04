import React, { useEffect }  from 'react'
import Course from './course';
import {getProducts} from '../redux/action/action';
import {useDispatch, useSelector} from "react-redux"

const Mainc = () => {
  const {products} = useSelector(state=> state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  },[dispatch]);
  
  return (
    <>
    <Course products={products}/>
    </>
  )
}

export default Mainc