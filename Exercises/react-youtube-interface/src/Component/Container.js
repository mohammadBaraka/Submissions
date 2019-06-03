import React from 'react';
import '../App.css';

class Container extends React.Component{
    render(){
        return(
            <div className = "ifr">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/o9sMJo0f5Us"
             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
             picture-in-picture" allowfullscreen></iframe>
             
             </div>
             
        )
    }
}
export default Container;