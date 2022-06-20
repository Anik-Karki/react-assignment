import React, { Component } from 'react'
import logo from '../Components/public/image/pho.jpg';
import cse from '../Components/public/image/ep.jpeg';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="180" height="250" alt="profilepic"/></a>
                    <h1> <b>Anik Karki </b></h1>
                    <p id="paragarph1"> Computer Enigineer <br/>
                    Eb Pearls || Webservice Traninee</p>
                    <a id="logo" href="https://www.contentstack.com/" ><img src={cse} width="80" height="50" alt="cselogo"/></a> 
                    
            </section>
        )
    }
}

export default Banner
