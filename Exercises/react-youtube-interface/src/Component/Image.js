import React from "react";
import "../App.css";
import img from "../assets/youtube.png";

class Image extends React.Component{
    render(){
        return <div className = "image1">
            
        <img className = "image" src = {img} alt={'Hello'}/>

        </div>
    }
}

export default Image;