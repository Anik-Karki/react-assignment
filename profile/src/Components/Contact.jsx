import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.png';
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Anik Karki</strong></h3>
                <h4>Nakhudhobato, Lalitpur-4</h4>
                <h4>Email Id: theanik20@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=theanik20@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Contant Info: 9860484245</h4>

                
                
                        <a href="https://www.facebook.com/anik.karki.9">
                        <span className="fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.instagram.com/" >
                                <span className="icon fa fa-instagram"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://github.com/Anik-Karki">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/anik-karki-640185238/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                
            </section>
        )
    }
}

export default Contact