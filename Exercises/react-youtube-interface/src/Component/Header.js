import React from "react";
import "../App.css";
import img from '../assets/serach.png';
class Header extends React.Component{
    render(){
        return (<div className ="div1"> 
        <img className = "search" src ={img}alt = " search" />
        <button></button>
        <input type ="text"></input>
        </div>  
        
        
        )
        
    }
}


export default Header;