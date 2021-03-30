import React from 'react';
import './Logo.css';
import Pika from '../../pics/Surprised_Pikachu_HD.jpg';

function Logo (){
    return(
        //Created a logo with pika pic
        <div>
            <img src={Pika} className="logo" alt="pic"/>
        </div>
    )
}

export default Logo;