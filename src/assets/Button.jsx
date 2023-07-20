import React from 'react'
import { styled } from 'styled-components'




const Navbar = ({ words , mt  , w }) => {
    return (

        <Container mt={ mt } w={w} >

            <div className='word'>  {words} </div> <ion-icon style={{ marginLeft: "10px" }} name="arrow-forward-outline"></ion-icon>

        </Container>
    )
}

export default Navbar



const Container = styled.div`
height: 45px;
display: flex;
align-items: center;
background-color: black;
color: white;
border-radius: 20px;
padding: 10px 30px;
transition: 0.6s;
cursor: pointer;
font-size: 12px;
min-width: 150px;
max-width: 230px;
width:${({w }) => w  };
margin-top: ${({mt }) => mt  };
&:hover{

background-color: #6666e6;


}



.word{
position:relative;

&::after{
content:"";
position: absolute;
width:0%;
height: 2px;
background-color: grey;
bottom: -2px;
left: 0px;
transition: 0.4s;



}






}



&:hover .word:after {

width: 100%;
transition: 0.4s;
}

`