import React, { Component } from 'react'
import biologo from './public/image/abo.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="200" height="250" alt="abtimg"/>
                    <p>Hello and Namstey everyone.</p>
                    <p>
                        I am Anik Karki and i am a Computer Engineer . My hobbies are observing people, acting, traveling, watching movies/series and i love to spend my time with my family and friends. If you have any query or you want to know more about me you can reach me through the email which you can find at contact section i will ne happy to hear you out.
                    </p>
                
            </section>
        )
    }
}

export default About