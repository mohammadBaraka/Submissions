import React, {Component} from 'react';
import './App.css';
import Header from './Component/Header';
import Image from './Component/Image';
import Container from './Component/Container';
import Footer from './Component/Footer';
// import Vedios from './Component/vedios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        resultVedio : [],
        upCom : [],
        keyword : "" ,
        isloaded : false     
        }

    }
        
    //handleSubmit
    handleSubmit = name => event => {
            event.preventDefault();
            this.setState({
                keyword: name
                
            });
        }

    //fetch
     myfunction (){
        fetch(`https://api.github.com/`)
        .then(response => response.json())
        .then(answer => {this.setState({isloaded : true,
        resultVedio : answer.items,})

        }); 
    } 

    render() {
        const {isloaded,upCom,resultVedio} = this.state;
        if (isloaded && upCom){
            return <div>..loading</div>
        }
        else{

        
        return (
            <div className="App">
                <Header/>
                <Image/>
                <Container/>
                <Footer/>
                
            </div>
        )
    }}
}

export default  App;


