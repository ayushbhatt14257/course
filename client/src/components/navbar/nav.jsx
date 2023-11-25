import React, { useContext, useEffect, useState } from 'react'
import './nav.css'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom'
import { LoginContext } from "../context/contextprovider"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { UserContext } from '../../App';
import { useSelector} from "react-redux"


const RenderMenu = () => {
    const { account, setAccount } = useContext(LoginContext)
    // console.log(account);
    // const [isMobile, setIsMobile] = useState(false);
    const { mystate, dispatch } = useContext(UserContext);
    if (!mystate && !account) {
        return (
            <>
                <li><NavLink to="/login">signin</NavLink></li>
                {/* <li><NavLink to="/a">About</NavLink></li> */}
                {/* <li><NavLink to="/logout">Logout</NavLink></li> */}
                {
                    account ? <li><NavLink to='/buynow'><Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar></NavLink></li> : <li><NavLink to='/login'><Avatar></Avatar></NavLink></li>
                }
            </>
        )
    } else {
        return (
            <>
                {/* <li><NavLink to="/login">signin</NavLink></li> */}
                {/* <li><NavLink to="/a">About</NavLink></li> */}
                <li><NavLink to="/logout">Logout</NavLink></li>
                {
                    account ? <li><NavLink to='/buynow'><Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar></NavLink></li> : <li><NavLink to='/login'><Avatar></Avatar></NavLink></li>
                }
            </>
        )
    }
}

const Nav = () => {
    const { account, setAccount } = useContext(LoginContext)
    console.log(account);

    const [isMobile, setIsMobile] = useState(false);

    const [text, setText] = useState("");
    console.log(text);
    const [liopen, setLiopen] = useState(true);

  const {products} = useSelector(state=> state.getproductsdata);




    const getdetailvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });
        const data = await res.json();
        // console.log(data);
        if (res.status !== 201) {
            console.log(Error);
        } else {
            console.log("data valid")
            setAccount(data);
        }
    }

    const getText = (items) => {
        setText(items)
        setLiopen(false)
    }

    useEffect(() => {
        getdetailvaliduser();
    }, []);


    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle
            ('window_scroll', window.scrollY > 0)
    })

    return (
        <nav className='nav'>
            <div className="left">
                <div className="navlogo">
                    <NavLink to='/'>
                        <a>COURSE</a>
                    </NavLink>
                </div>
                <div className="nav_searchbaar">
                    <input type="text" name='' id='' onChange={(e) => getText(e.target.value)} placeholder='Search'/>
                    <SearchIcon id='search' />
                </div>    
                    {/* {
                        text &&
                        <List className='extrasearch' hidden={liopen}>
                            {
                                products.filter(product =>product.title.longTitle.toLowerCase().includes(text.toLocaleLowerCase())).map(product=>(
                                    <ListItem>
                                        {product.title.logTitle}
                                    </ListItem>
                                ))
                            }
                        </List>
                    } */}
                    {
                            text &&
                            <List className="extrasearch" hidden={liopen}>
                                {
                                    products.filter(product => product.name.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem>
                                            <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
                                                {product.name}
                                            </NavLink>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }
                {/* </div> */}
            </div>
            <div>
                <ul className={isMobile ? 'nav_menu-mobile' : 'nav_menu'}
                    onClick={() => setIsMobile(false)}>
                    <RenderMenu />
                </ul>

                <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
                </button>
            </div>
        </nav>
    )
}

export default Nav