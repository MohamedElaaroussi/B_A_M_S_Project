import React from "react";
// Icons
import { BiChevronLeft } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import { BiComment } from "react-icons/bi"
import { BiHomeAlt } from "react-icons/bi"
import { BiBell } from "react-icons/bi"
import { BiHeart } from "react-icons/bi"
import { BiPlus } from "react-icons/bi"
import { BiUser } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"
import { BiMoon } from "react-icons/bi"
import { BiSun } from "react-icons/bi"




//CSS
import "./Menu.css"

//State
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
//Redux

export default function Menu() {
    const dispatch = useDispatch()


    const GroupValue = useSelector(state => state.groupCreate)
    console.log("GroupValue"+GroupValue)
    const [theme, setTheme] = useState("Light");

    const groupRef = useRef(null) ;


    return (
        <div className="Menu fst-italic">
            <nav className="sidebar">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={require("./MenuLogo.png")} alt="" style={{ height: '40px' }} />
                        </span>

                        <div className="textMenu logo-text">
                            <span className="name"><span className="colorB">B</span>AMS</span>
                        </div>
                    </div>

                    <BiChevronLeft className='bx bx-chevron-right toggle' onClick={() => {
                        document.body.querySelector('nav').classList.toggle("close");
                    }} />
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        <li className="search-box" onClick={() => {
                            dispatch({type:"RECHERCHE"})
                        }} >
                            <a>
                            <BiSearch className='bx bx-searchs icon' />
                            <span className="textMenu" > Recherche </span>
                            </a>
                        </li>

                        <ul className="menu-links">
                            <li  onClick={() => {dispatch({ type: 'AFFICHER_PROFIL_ET' , payload : {} })}}>
                                <Link to="/Accueil">
                                    <BiHomeAlt className='bx bx-home-alt icon' />

                                    <span className="textMenu">Accueil</span>
                                </Link>

                            </li>
                            <li>

                                <a href="#" onClick={() => {
                                    dispatch({ type: 'createVisibility' })
                                    let posts = document.querySelectorAll('Post');
                                    for (let post of posts) {
                                        // set the font size to 20px
                                        post.classList.toggle('PointerState')
                                    }
                                }}>
                                    <BiPlus className='bx bx-plus cercle icon' />
                                    <span className="textMenu">Groupe</span>
                                </a>
                                {/* <Link to="/addPost">
                                    <BiPlus className='bx bx-plus cercle icon' />
                                    <span className="textMenu">Post</span>
                                </Link> */}
                            </li>
                            <li>
                                <a href="#" onClick={() => {
                                    dispatch({ type: 'CHAT' })
                                }}>
                                    <BiComment className='bx bx-chat icon' />
                                    <span className="textMenu">Conversation</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" onClick={() => {
                                    dispatch({type : 'NOTIFICATION'})
                                }}>
                                    <BiBell className='bx bx-bell icon' />
                                    <span className="textMenu">Notifications</span>
                                </a>
                            </li>


                           

                            <li>

                                <a href="#" onClick={() => {
                                    dispatch({ type: 'visibile' })
                                    let posts = document.querySelectorAll('Post');
                                    for (let post of posts) {
                                        // set the font size to 20px
                                        post.classList.toggle('PointerState')
                                    }
                                }}>
                                    <BiPlus className='bx bx-plus cercle icon' />
                                    <span className="textMenu">Publication</span>
                                </a>
                                {/* <Link to="/addPost">
                                    <BiPlus className='bx bx-plus cercle icon' />
                                    <span className="textMenu">Post</span>
                                </Link> */}
                            </li>

                            <li>
                                <a href="#" onClick={() => {
                                    dispatch({type : "PROFIL"})
                                }}>
                                    <BiUser className='bx bx-user icon' />
                                    <span className="textMenu">Profil</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content ">
                        <li className="">
                            <Link to="/" onClick={() => {
                                dispatch({ type: 'logOut' })
                                dispatch({ type: 'quit' })
                            }}>
                                <BiLogOut className='bx bx-log-out icon' />
                                <span className="textMenu">Logout</span>
                            </Link>
                            {/* <a href="#">
                                <BiLogOut className='bx bx-log-out icon' />
                                <span className="textMenu">Logout</span>
                            </a> */}
                        </li>

                        <li className="mode">
                            <div className="sun-moon">
                                {theme === "Light" && <BiMoon className='bx bx-moon icon moon' />}
                                {theme === "Dark" && <BiSun className='bx bx-sun icon sun' />}
                            </div>
                            <span className="mode-text textMenu "> Mode sombre </span>

                            <div className="toggle-switch " onClick={() => {
                                document.body.classList.toggle("dark");

                                if (document.body.classList.contains("dark")) {
                                    document.body.querySelector(".mode-text").innerText = "Mode claire";
                                    setTheme('Dark');
                                } else {
                                    document.body.querySelector(".mode-text").innerText = "Mode sombre";
                                    setTheme("Light");

                                }
                            }}>
                                <span className="switch"></span>
                            </div>
                        </li>

                    </div>
                </div>
            </nav>
        </div>
    )
}