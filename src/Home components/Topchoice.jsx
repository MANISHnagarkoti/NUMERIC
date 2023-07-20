import React from 'react'
import { useState } from 'react'
import Button from "../assets/Button"



const Topchoice = () => {




    const [currentState, ccurentState] = useState("transparency")




    return (




        <div style={{marginTop:"100px"}} className='row '>


            <div className='col-md-6'>

                <div className='d-flex justify-content-between mt-5 mb-5 pe-5 ' >

                    <div style={{ cursor: "pointer" }} onClick={() => ccurentState("transparency")}>TRANSPARENCY</div>
                    <div style={{ cursor: "pointer" }} onClick={() => ccurentState("team of experts")}>TEAM OF EXPERTS</div>
                    <div style={{ cursor: "pointer" }} onClick={() => ccurentState("results")}>RESULTS</div>

                </div>






                {


                    currentState === "transparency" ? (<div >

                        <div className='h2'> 100% Campaign~~
                            transparency

                        </div>

                        <div className='text-muted'>
                            Our experts and professionals are never more than an email or a phone call away. Or, if you prefer to talk face to face, drop by our office to discuss your plans and goals over a cup of coffee. We are here for you.
                        </div>


                        <img src="img/Stats.svg" className='mt-2 img-fluid' alt="" />

                    </div>) : null}











                {currentState === "team of experts" ? (<div >

                    <div className='h2'> Choose a partner that understands you
                    </div>

                    <div className='text-muted'>
                        All our decisions are based on your goals and concerns. Whether it’s website design, SEO, PPC, or anything else, we want to understand what keep you up at night so we can deliver the business results you seek.
                    </div>


                    <img src="img/Stats2.svg" className='mt-2 img-fluid' alt="" />

                </div>) : null


                }




                {

                    currentState === "results" ? (<div >

                        <div className='h2'> 100% Campaign
                            transparency

                        </div>

                        <div className='text-muted'>
                            We cultivate an environment of transparency and communication in all we do. You don’t have to wonder what is going on with your campaign – we will keep you in the loop and in control.
                        </div>


                        <img src="img/pexels-kindel-media-7688169-copy.png" className='img-fluid mt-4' alt="" />

                    </div>) : null






                }




            </div>






            <div className='col-md-6 d-flex align-items-center  ' style={{ height: "500px" }}>
                <div>
                    <div className='h1'>Why Numerique is your top-choice</div>


                    <p className='text-muted'>We are a five-star rated holistic full-service digital marketing agencies, serving thousands of clients. Our digital agency covers all aspects of internet marketing: SEO, social media, and PPC management, all the way to email marketing, website design, and web development.</p>


                    <Button words={"GET PERPOSAL"} />

                </div>
            </div>













        </div>





















    )
}

export default Topchoice