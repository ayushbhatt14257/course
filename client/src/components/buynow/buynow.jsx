import React, { useEffect, useState, useContext } from 'react'
import './buynow.css'
import{LoginContext} from "../context/contextprovider" 
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Empty from './empty';



const BuyNow = () => {

  const {account, setAccount} = useContext(LoginContext)
    console.log(account);


  // const {id} = useParams("");
  const [cartdata, setCartdata] = useState([]);
    console.log(cartdata);

  const getdatabuy = async () => {
    const res = await fetch("/cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    const data = await res.json();

    if (res.status !== 201) {
      console.log("error")

    } else {
      setCartdata(data.carts);
    }
  }

  useEffect(() => {
    getdatabuy();
  }, []);

  const removedata = async(id) => {
    try {
      const res = await fetch(`/remove/${id}`, {
        method:"DELETE",
        headers:{
            Accept: "application/json",
            "Content-Type" : "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
        console.log("error")

      }else {
        console.log("user delete")
        toast.success("Item Removed",{position:"top-center"})
        getdatabuy();
      }
      
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    removedata();

  }, []);


  return (
    <>
    {cartdata.length ?
      <div>
      <div className="heading">
        <h1>Your Enrolled Course's</h1>
      </div>
      {/* <div className="courseCartContainer">
      
      {
        cartdata.map((e, k) => {
          return(
            
              <div className="courseCart">
                <img src={e.thumbnail} alt="" />
                <div className="shortTitle">
                  <h3>{e.name}</h3>
                </div>
                <div className="longTitle">
                  <h3>{e.instructor}</h3>
                </div>
                <div className="remove">
                  <button onClick={() => removedata(e.id)}>Unenroll</button>
                </div>
              </div>
            
            )
          })
        }
       
      </div> */}
      <div className="products_itemss container">
            {
              cartdata.map((e) => {
                return (

                    <div className="row">

                    <div className="col-lg-3 col-md-2 col-sm-1 detailsContainer">
                    <div className="details">
                      <h1>{e.name}</h1>
                      <div className="image">
                        <img src={e.thumbnail} alt="" />
                      </div>
                      <div className="discreption">
                        <p>{e.description}</p>
                      </div>
                      <div className="instructor_time">
                        <p>{e.instructor}</p>
                        <p>{e.duration}</p>
                      </div>
                      {/* <div className="btn"> */}
                        <button className='btn' onClick={() => removedata(e.id)}>Unenroll</button>
                      {/* </div> */}
                    </div>

          </div>
          </div>
          
                )
              })
            }
      </div>
    </div> 
     :  <Empty/>
    }
    <ToastContainer/>
      
    </>
  )
}

export default BuyNow