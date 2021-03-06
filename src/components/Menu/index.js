import React from 'react'
import { Header, Container} from './styled'
import insta2 from './../../assest/images/insta2.png'
import logo from './../../assest/images/logo.png'
import face2 from './../../assest/images/face2.png'


export default function Menu(){

    return(
        
        <Header>
            <Container>
            <div className= "logo">
                <img src = {logo}  width="65" height="40" alt="logo" />

            </div>
            <div className="redes-sociais">
                <ul>
                    <li><a href ="https://www.facebook.com/Sheila-%C3%93tica-353869965392529">
                        <img src = {face2} width="25" height="25" alt="perfil-facebook" /></a></li>
                    <li><a href ="https://www.instagram.com/sheilaoticas/"><img src = {insta2} width="25" height="25" alt="perfil-instagram"/></a></li>
                </ul>
            </div>
            </Container>
        </Header>
         
    )
}