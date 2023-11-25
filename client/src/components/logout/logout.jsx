import React,  { useContext }  from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router'
import { LoginContext } from "../context/contextprovider";
import { UserContext } from '../../App';


// import {UserContext} from "../../App"

const Logout = () => {

    const {mystate, dispatch} = useContext(UserContext);
    const {account, setAccount} = useContext(LoginContext)

    const navigate = useNavigate(); 

    useEffect(() => {

    
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type: "USER", payload:false})
            navigate('/login');
            console.log("logout")
            setAccount();

            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    })

  return (
    <div>Logout</div>
  )
}

export default Logout