import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import './cart.css'
import { Divider } from '@mui/material'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { LoginContext } from "../context/contextprovider";
import CircularProgress from '@mui/material/CircularProgress';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const BasicAccordion = ({ inddata }) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Week 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {inddata.syllabus.week}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Week 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}



const Cart = () => {

    const { id } = useParams("");
    const history = useNavigate("")

    const { account, setAccount } = useContext(LoginContext)
    console.log(account)

    const [inddata, setInddata] = useState('');
    console.log(inddata);

    const getinddata = async () => {
        const res = await fetch(`/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        // console.log(data);

        if (res.status !== 201) {
            console.log('No data')
        } else {
            console.log('getData');
            setInddata(data);
        }
    }

    useEffect(() => {
        setTimeout(getinddata, 1000);
    }, [id]);


    // add to cart 

    const addtocart = async (id) => {
        const checkres = await fetch(`/addcart/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inddata
            }),
            credentials: "include"
        });

        const data1 = await checkres.json();
        // console.log(data1 + "frontend data")

        if (checkres.status === 401 || !data1) {
            console.log("user invalid");
            alert("data not added in your cart")
            history("/login")

        } else {
            alert("data added in your cart")
            setAccount(data1)
            history("/buynow")
        }
    }


    return (
        <div className='cart_section'>
            {inddata && Object.keys(inddata).length &&
                <div className="cart_container">
                    <div className="left_cart">
                        <img src={inddata.thumbnail} alt="" />
                        <div className="cart_btn">

                            <button className='cart_btn1' onClick={() => addtocart(inddata.id)}>Enroll Now</button>
                            {/* <button className='cart_btn2'>Buy Now</button> */}
                        </div>
                    </div>
                    <div className="right_cart">
                        <h3>{inddata.name}</h3>
                        <h4>Instructor: <span style={{ color: "#565959", fontWeight: 500, letterSpacing: ".4px" }}>{inddata.instructor}</span></h4>
                        <Divider />
                        <p className='mrp'>Enrollment Status : <span style={{ color: "#00FF00", fontWeight: 500, letterSpacing: ".4px" }}>{inddata.enrollmentStatus}</span></p>
                        <p>Course Duration: <span style={{ color: "#812704" }}>{inddata.duration}</span></p>
                        <p>Classes Timing: <span style={{ color: "#812704" }}>{inddata.schedule}</span></p>

                        <div className="discount_box">
                            <h5>Class Mode : <span style={{ color: "#111" }}>{inddata.location}</span></h5>
                            <h4>Prerequisites : <span style={{ color: "#111", fontWeight: 600 }}>{inddata.prerequisites[0]}, {inddata.prerequisites[1]}</span></h4>
                            {/* <p>Fast <span style={{color: "#111", fontWeight:600}} >Tommorow</span></p> */}
                        </div>
                        <p className='description'>Description : <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: ".4px" }}>{inddata.description}</span></p>
                        <h2>Syllabus : </h2>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Week 1</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <h5 style={{ color: "black" }}>Topic : <span style={{ color: "#565959" }}>{inddata.syllabus[0].topic}</span></h5>
                                        <h5 style={{ color: "black" }}>Content : <span style={{ color: "#565959" }}>{inddata.syllabus[0].content}</span></h5>

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Week 2</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <h5 style={{ color: "black" }}>Topic : <span style={{ color: "#565959" }}>{inddata.syllabus[1].topic}</span></h5>
                                        <h5 style={{ color: "black" }}>Content : <span style={{ color: "#565959" }}>{inddata.syllabus[1].content}</span></h5>

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            }

            {!inddata ? <div className='circle'>
                <CircularProgress />
                <h2>Loading...</h2>
            </div> : ""}

        </div>
    )
}

export default Cart