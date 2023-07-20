import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Rating from '@mui/material/Rating';
import Button from "../assets/Button"


const Experts = () => {



    return (
        <>


            {/* // {{{{{{{{{{{{{expert}}}}}}}}}}}}} */}

            <div className='row  row-gap-lg-0   row-gap-5 mt-5'>


                <div className='col-lg-3 '>

                    <AvatarGroup max={5} className='d-flex justify-content-end' >
                        <Avatar alt="Remy Sharp" src="img/pexels-andrea-piacquadio-3799837-300x300.webp" />
                        <Avatar alt="Travis Howard" src="img/pexels-moose-photos-1036622-300x300.webp" />
                        <Avatar alt="Cindy Baker" src="/img/pexels-wendy-wei-1656684-300x300.webp" />

                    </AvatarGroup>

                    <div>Connect our experts</div>

                    <ion-icon name="arrow-forward-outline"></ion-icon>


                </div>





                <div className='col-lg-6 d-flex align-items-center justify-content-lg-center '>

                    <strong className='fw-bold h1 '> 2,120,240,368 </strong>

                    <div className='ms-4'>
                        Revenue driven <br />
                        for our clients
                    </div>

                </div>






                <div className='col-lg-3 d-flex flex-column align-items-lg-end'>


                    <Rating defaultValue={5} precision={5} readOnly />
                    <div className='fw-bold'>5000+ Client reviews</div>

                </div>

            </div>


            {/* // {{{{{{{{{{{{{{{{{{ What we do}}}}}}}}}}}}}}}}}} */}



            <div style={{marginTop:"150px"}} className='row '>

                <div className='col-md-6'>

                    <div className='h6'>WHAT WE DO</div>

                    <div className='h1'>We solve digital

                        challenges

                    </div>

                </div>



                <div className='col-md-6'>
                    <div className='text-muted mb-4'>Together, we help our clients achieve tangible, measurable results. Focused on business outcomes — we bring a unique set of expertise and skills to the party.</div>

                    <Button words={"More About Us"} />

                </div>



            </div>


        </>

    )
}

export default Experts