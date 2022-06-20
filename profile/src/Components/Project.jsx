import React, { Component } from 'react'

import jsimg from '../Components/public/image/javascriptimg2.png'
import node from '../Components/public/image/nod.png'
import htmlimg from '../Components/public/image/html5logo.jpg'
import cssimg from '../Components/public/image/csslogo.png'
import react from '../Components/public/image/rea.png'
import mongoimg from '../Components/public/image/mngodbimg.png'
import java from '../Components/public/image/la.png'





class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={node} width="120" height="90" alt="node"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={react} width="100" height="100" alt="react"/></div>
                    <div><img src={mongoimg} width="100" height="100" alt="mongodb"/></div>  
                    <div><img src={java} width="100" height="100" alt="java"/></div>
                
            </section>
        )
    }
}

export default Project