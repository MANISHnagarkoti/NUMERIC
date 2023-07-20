import React from 'react'
import { styled } from 'styled-components'
import Button from "../assets/Button"

const BigBanner = () => {
    return (
        <>

            <Container>




            </Container>

{/* {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}

            <div className='mt-5'>

                <div className='h6' >OUR CAPABILITIES</div>

                <div className='h1'>Data-driven, customer- <br /> centric digital services </div>


                <Button mt="20px" words={"VIEW ALL SOLUTIONS"} />
            </div>




{/* {{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}} */}


            <div style={{marginTop:"110px"}} className='row  row-gap-md-0  row-gap-4'>

                <div className='col-md-3'>
                    <ion-icon style={{ fontSize: "22px", marginLeft: "20px" }} name="arrow-forward-outline"></ion-icon>

                    <div className='h2 mt-3'>Paid search <br /> marketing</div>

                    <div className='text-muted mt-3'>
                        Craft campaigns — built just for your business — to ensure real and quantifiable ROI.
                    </div>

                    <Button mt="20px" w="170px" words={"LERN MORE"} />
                </div>



                <div className='col-md-3'>
                    <ion-icon style={{ fontSize: "22px", marginLeft: "20px" }} name="arrow-forward-outline"></ion-icon>

                    <div className='h2 mt-3'>Paid search <br /> marketing</div>

                    <div className='text-muted mt-3'>
                        Craft campaigns — built just for your business — to ensure real and quantifiable ROI.
                    </div>

                    <Button mt="20px" w="170px" words={"LERN MORE"} />
                </div>


                <div className='col-md-3'>
                    <ion-icon style={{ fontSize: "22px", marginLeft: "20px" }} name="arrow-forward-outline"></ion-icon>

                    <div className='h2 mt-3'>Paid search <br /> marketing</div>

                    <div className='text-muted mt-3'>
                        Craft campaigns — built just for your business — to ensure real and quantifiable ROI.
                    </div>

                    <Button mt="20px" w="170px" words={"LERN MORE"} />
                </div>


                <div className='col-md-3'>
                    <ion-icon style={{ fontSize: "22px", marginLeft: "20px" }} name="arrow-forward-outline"></ion-icon>

                    <div className='h2 mt-3'>Paid search <br /> marketing</div>

                    <div className='text-muted mt-3'>
                        Craft campaigns — built just for your business — to ensure real and quantifiable ROI.
                    </div>

                    <Button mt="20px" w="170px" words={"LERN MORE"} />
                </div>


            </div>

        </>

    )
}

export default BigBanner



const Container = styled.div`
    
background: url("img/GettyImages-1193505273-1024x417.webp");
width: 100%;
height:500px;
margin-top: 70px;
border-radius: 50px;
background-position: center;
background-size: cover;
`