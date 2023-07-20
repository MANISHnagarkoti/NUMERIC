import React from "react";
import { styled } from "styled-components";
import Button from "../assets/Button"

const Herosec = () => {
    return (
        <Container className="mt-5">
            <div className="text-center text-dark fs-1">
                Marketing without borders
            </div>
            <div className="position-relative text-muted text-center h5 mt-3">

                Amplify your business with our data-centric, performance-driven digital
                marketing solutions.

                <img src="img/Line-arrow.svg" className="position-absolute" style={{ bottom: "-90px", zIndex: "88", left: "30%" }} alt="" />

            </div>




            <div className=" hero-img-con  column-gap-md-3" style={{ marginTop: "140px", minHeight: "400px" }}>





                <div className=" rounded-5 position-relative  hero-col-one" style={{ background: "#b0b1ff" }}>
                    {/* <img src="img/intro-shape-1-1.svg" className="position-relative" width="100%" alt="" /> */}

                    <img src="img/GettyImages-1387685447-shadow.png" className="mb-5  position-absolute speaker-img" width="350" style={{ top: "-30px" }} alt="" />
                </div>






                {/* {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}





                <div className=" row-gap-5" style={{}}>

                    <div className=" w-100 position-relative hero-col-two-one rounded-5" style={{ height: "200px" }}>
                        <img src="img/GettyImages-1341057712.webp" className=" rounded-5  w-100 h-100 object-fit-cover" alt="" />


                        <div className="position-absolute " style={{ top: "-30px", left: "30px" }}>

                            <img src="img/GettyImages-1404633864-Converted.webp" className="img-fluid" width="150px" alt="" />


                            <h6 className="ms-4 mt-3 fw-bold">AWARD WINNING AGENCY</h6>

                        </div>

                    </div>



                    <div className=" w-100 px-5 d-flex align-items-center rounded-5 mt-3 hero-col-two-two" style={{



 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


                         height: "200px"
                    }}>

                        <h6 className="me-4">Get Your Free Audit Today</h6>


                        <Button words="LETS'S TALK" />

                    </div>


                </div>


            </div>








        </Container >
    );
};

export default Herosec;

const Container = styled.div`
    




.hero-img-con{

display: grid;
grid-template-columns: 500px 1fr;


.speaker-img{
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
    @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }   
}

}




@media (max-width:900px){

    grid-template-columns:  1fr;




}






.hero-col-one{

    
height: 100%;
transition: 0.4s;

@media (max-width:900px){

height: 200px;
margin-bottom: 50px;


}


img{
    @media (max-width:900px){

width:180px;
left:50px



}



}








&:hover  {

transform: scale(1.02);
transition: 0.4s;

}

}


/* {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */


.hero-col-two-one{
img{

    transition: 0.4s;

}

&:hover  img{

    transform: scale(1.02);
    transition: 0.4s;

}}




.hero-col-two-two{

    

transition: 0.4s;
background-color: #fbb034;
background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);

&:hover  {

transform: scale(1.02);
transition: 0.4s;

}

}















}





`;
