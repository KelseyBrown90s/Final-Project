import React from "react";
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

//4.Badge Component and 5. Image Component 

export default function NewHome() {
    return(
    <>
    <h1>
            Welcome to the T-Rex of Coffee! <Badge bg="secondary"></Badge>
        </h1><Image src='./NewerCoffee.jpg' className='coffee' alt='Photo by Nathan Dumalo on Unsplash'></Image>  
          
          </>
    );
}

