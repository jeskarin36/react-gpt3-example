import React,{useState} from "react";
import "./navbar.css";
import {RipMenu3Line,RiCloseLine, RiMenu3Line} from "react-icons/ri";
import logo from "../../assets/logo.svg";


 const Navbar=()=>{
    const [ToggleMenu,setToggleMenu]= useState(false);

    const Menu=()=>(
        <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open IA</a></p>
        <p><a href="#features">Case studies</a></p>
        <p><a href="#blog">Library</a></p>
        </>
    )

    return(
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                  <Menu></Menu>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sing in</p>
                <button type="button">Sing Up</button>
            </div>
            <div className="gpt3__navbar-menu">
            {ToggleMenu ? <RiCloseLine color="#fff" size={27} onClick={()=>{setToggleMenu(false)}}/>
            : <RiMenu3Line color="#fff" size={27} onClick={()=>{setToggleMenu(true)}}/>
            }

            {ToggleMenu && ( <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                   <Menu></Menu>
                    <div className="gpt3__navbar-menu_container-links-sign">
                        <p>Sing in</p>
                        <button type="button">Sing Up</button>
                    </div>
                </div>
            </div>)}

            </div>
        </div>)
 }

 export default Navbar;