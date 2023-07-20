import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { styled } from 'styled-components';


const Sucess = () => {
    return (

        <Container style={{ marginTop: "100px" }} className='row '>

            <div style={{ height: "200px" }} className='col-md-4'>



                <div>SUCCESS STORIES</div>

                <div className='h1 mt-5'>
                    Our work drives businesses forward

                </div>

                <div style={{ marginTop: "150px" }}>VIEW ALL</div>


            </div>
            <div className='col-md-8'>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}


                    breakpoints={{
                     
                        1000: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                    
                      }}

                    modules={[Pagination]}
                    className="mySwiper"





                >
                    <SwiperSlide>
                        <div className='slide h-100 rounded-4 d-flex position-relative'>


                            <img src="img/GettyImages-1146893850.webp" height="100%" width="100%"  className=' rounded-5' alt="" />


                            <div className='img-cover position-absolute rounded-5 d-flex flex-column justify-content-between'>

                                <div className='text-white'>ZARA</div>

                                <div>

                                    <div style={{borderBottom:"1px solid white"}} className='text-white py-3 mb-1'>

                                        <h1>+40%</h1>
                                        <div>ECOMMERCE GROWTH</div>


                                    </div>

                                    <div className='d-flex column-gap-1 flex-wrap mt-4'>

                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>
                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>
                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>



                                    </div>


                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide h-100 rounded-4 d-flex position-relative'>


                            <img src="img/GettyImages-1472335476.webp" className='img-fluid rounded-5' alt="" />


                            <div className='img-cover position-absolute rounded-5 d-flex flex-column justify-content-between'>

                                <div className='text-white'>ZARA</div>

                                <div>

                                    <div style={{borderBottom:"1px solid white"}} className='text-white py-3 mb-1'>

                                        <h1>+40%</h1>
                                        <div>ECOMMERCE GROWTH</div>


                                    </div>

                                    <div className='d-flex column-gap-1 flex-wrap mt-4'>

                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>
                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>
                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>



                                    </div>


                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slide h-100 rounded-4 d-flex position-relative'>


                            <img src="img/pexels-vanessa-loring-5965948.webp" className='img-fluid rounded-5' alt="" />


                            <div className='img-cover position-absolute rounded-5 d-flex flex-column justify-content-between'>

                                <div className='text-white'>ZARA</div>

                                <div>

                                    <div style={{borderBottom:"1px solid white"}} className='text-white py-3 mb-1'>

                                        <h1>+40%</h1>
                                        <div>ECOMMERCE GROWTH</div>


                                    </div>

                                    <div className='d-flex column-gap-1 flex-wrap mt-4'>

                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>
                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>
                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>



                                    </div>


                                </div>

                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slide h-100 rounded-4 d-flex position-relative'>


                            <img src="img/pexels-amelie-chen-12352170.webp" className='img-fluid rounded-5' alt="" />


                            <div className='img-cover position-absolute rounded-5 d-flex flex-column justify-content-between'>

                                <div className='text-white'>ZARA</div>

                                <div>

                                    <div style={{borderBottom:"1px solid white"}} className='text-white py-3 mb-1'>

                                        <h1>+40%</h1>
                                        <div>ECOMMERCE GROWTH</div>


                                    </div>

                                    <div className='d-flex column-gap-1 flex-wrap mt-4'>

                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>
                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>
                                        <div style={{fontSize:"12px"}} className='d-flex rounded-4 py-2 px-2 bg-white text-dark'>Paid Search</div>



                                    </div>


                                </div>

                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>


            </div>


        </Container>




    )
}

export default Sucess



const Container = styled.div`


.mySwiper{
    width: 100%;
height: 100%;




}


.slide{
    width: 100%;
height: 100%;

img{
    width: 100%;
height: 100%;
object-fit: cover;
}

}

.img-cover{

width: 100%;
height: 100%;
background-color: #0000008d;
z-index: 999;
padding: 25px;

}


 



`