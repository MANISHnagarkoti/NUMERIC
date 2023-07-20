import React from 'react'
import Herosec from '../Home components/Herosec'
import Experts from '../Home components/Experts'
import styled from 'styled-components'
import CardOne from '../Home components/CardOne'
import BigBanner from '../Home components/BigBanner'
import Topchoice from '../Home components/Topchoice'
import Sucess from '../Home components/Sucess'

const Home = () => {
  return (
    <div>

      <Wrapper>

        <Herosec />
        <Experts />
        <CardOne />
        <BigBanner />
        <Topchoice />
        <Sucess/>

      </Wrapper>

    </div>


  )
}

export default Home


const Wrapper = styled.div`

width: 90%;
margin: auto;
max-width: 1440px;

`