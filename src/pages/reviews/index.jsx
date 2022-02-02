import React from 'react';
import ContactUs from '../../components/contactus/contactUs';
import Header from '../../components/header';
import Offers from '../../components/offers/offers';
import TravelNavigation from '../../components/travelnavigation';
import { Wrapper } from './style';

const Reviews = () => {
  
    return(
        <Wrapper>
            <Header />
            <TravelNavigation />
            <Offers />
            <ContactUs />
        </Wrapper>
    )
};

export default Reviews;
