import {React,  useState } from 'react'
import  { useContext } from 'react'
import './signin_siginup.css'
import IMG from '../../assets/banner1.jpg'
import {NavLink} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"
import { LoginContext } from "../context/contextprovider";
import {UserContext} from "../../App"



const Sigin = () => {
  const {mystate, dispatch} = useContext(UserContext);

 
    const {account, setAccount} = useContext(LoginContext)
    // console.log(account)

    const history = useNavigate("")

    const [logdata, setData] = useState({
        email:"",
        password:""
    });

    console.log(logdata);

    const adddata = (e) => {
        const {name,value} = e.target ;
        
        setData(() => {
            return{
                ...logdata,
                [name]:value
            }
        })
    }

    const senddata = async (e) => {
        e.preventDefault();

        const {email, password} = logdata

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify({
                 email, password,
                })
        });

        const data = await res.json();
        console.log(data);
        if (res.status === 400  || !data) {
            // window.alert('Invalid Registration');
            toast.warn("Invalid Details")
            console.log("Invalid Login Detail")
      
          } else {
            toast.success("Login Succesfully",{position:"top-center"});
            setData({...logdata, email:"", password:""});
            history('/');
            toast.success("Login Succesfully",{position:"top-center"})
            setAccount(data)
            dispatch({type:'USER', payload:true})


          }
    }

  return (
    <>
        <section>
            <div className='sign_container'>
                <div className="sign_header">
                    <img src={IMG} alt="" />
                </div>
                <div className="sign_form">
                    <form method='POST'>
                        <h1>sign-In</h1>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text" onChange={adddata} value={logdata.email} name='email' id='email'/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={adddata} value={logdata.password} name='password' id='password'/>
                        </div>
                        <button className='signin_btn' onClick={senddata}>Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>New to Website</p>
                    <NavLink to='/register'>
                        <button >Register Now </button>
                    </NavLink>
                </div>
                <ToastContainer/>
            </div>
        </section>
    </>
  )
}

export default Sigin