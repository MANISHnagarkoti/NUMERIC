import React from 'react'
import { styled } from 'styled-components'
import Button from "../assets/Button"



const Navbar = () => {





  return (

    <Container >

      <div className='nav b'>

        <div className=''><img src="img/logo.svg" alt="" /></div>




        <div className=' ul-con' >

          <li className='pr'><a href="">H.</a>

            <div className='pa'>

              <div>HOME 1</div>
              <div className='mt-3' >HOME 2</div>

            </div>



          </li>





          <li className='pr'  ><a href="">MARKETING SOLUTIONS</a>


            <div className='pa'>






              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>

            </div>










          </li>


          <li className='pr'><a href="">WHO WE ARE</a>


            <div className='pa'>


              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>


            </div>



          </li>


          <li className='pr' ><a href="">WORK</a>


            <div className='pa'>

              <div className='mt-3' >HOME 2</div>
              <div className='mt-3' >HOME 2</div>

            </div>



          </li>


          <li><a href="">CONTACT</a></li>
        </div>





        <Button words={"FREE AUDIT"} />


        <ion-icon id="ham-icon" style={{ fontSize: "40px" }} name="reorder-two-outline"></ion-icon>

      </div>


    </Container>
  )
}

export default Navbar











const Container = styled.div`
  height: 70px;

/* border: 1px solid red; */


.nav{
  display: grid;
grid-template-columns: 200px 550px 180px ;
justify-content: space-between;
align-items: center;
width: 95%;
margin: auto;



.pr{

position: relative;
height: 100%;
display: flex;
align-items: center;
cursor: pointer;
/* width: 30px; */
padding: 0px 20px;


&:hover .pa{

  animation: fadeInUp 0.3s;
pointer-events: all;
  opacity:1

}


.pa{

  position: absolute;
  /* display:none; */
 
  transition: 0.4s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  min-width:180px;
  min-height:100px;
  border-radius: 20px;
  background-color: white;
top:60px;
  /* left:5px; */
  padding: 20px;
  padding-left: 40px;
opacity: 0;
pointer-events: none;
font-size: 14px;
z-index: 999;


}


}




.ul-con{
display: flex;
/* justify-content: space-between; */
align-items: center;
height: 100%;


}

#ham-icon{
  display:none;
}



@media (max-width:1000px){




  &{
    grid-template-columns: 200px 180px auto;


  }

  .ul-con{

  display: none;


  }


  
  #ham-icon{
 display:block
}



}



}


`