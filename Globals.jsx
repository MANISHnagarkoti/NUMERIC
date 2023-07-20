
 
import { createGlobalStyle } from 'styled-components'
 
const GlobalStyles = createGlobalStyle`
 * {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        text-decoration: none;
        list-style: none;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        font-size: 98%;
    }
 
    body {
        overflow-x: hidden;
   
    }

    a{
        color: black;
        text-decoration: none;
    }


    :root {

--swiper-pagination-color: #000000;
--swiper-pagination-bullet-size: 50px;
--swiper-pagination-bullet-width: 10px;
--swiper-pagination-bullet-height: 10px;
--swiper-pagination-bullet-inactive-color: #bdbdbd;
--swiper-pagination-bullet-inactive-opacity: 50;
--swiper-pagination-bullet-opacity: 1;
--swiper-pagination-bullet-horizontal-gap: 4px;
--swiper-pagination-bullet-vertical-gap: 6px;

}


 
`

export default GlobalStyles