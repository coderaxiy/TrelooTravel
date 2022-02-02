import React from 'react';
import { Left, Right, Wrapper } from './style';
import travel from '../../assets/images/trave.png'

const ContactUs = () => {
  return(
      <Wrapper>
          <Left>
              <Left.Img src={travel}/>
                <Left.Tourists>
                    <Left.Tourists.Count>5000 +</Left.Tourists.Count>
                    <Left.Tourists.Text>Tourists</Left.Tourists.Text>
                </Left.Tourists>
              <div className='items'>
                  <Left.Destin>
                    <Left.Destin.Count>300 +</Left.Destin.Count>
                    <Left.Destin.Text>Destinations</Left.Destin.Text>
                  </Left.Destin>
                  <Left.Hotels>
                    <Left.Hotels.Count>150 +</Left.Hotels.Count>
                    <Left.Hotels.Text>Hotels</Left.Hotels.Text>
                  </Left.Hotels>
              </div>
          </Left>
          <Right>
              <Right.Title>Travel Any Corner of The World With Us</Right.Title>
              <Right.Description>
              Would you explore nature paradise in the world, let’s find 
              the best destination in world with us, Would you explore
              nature paradise in the world, let’s find the best destination 
              in world with us. Would you explore nature paradise in the 
              world, let’s find the best destination in world with us.
               <div>Would you explore nature paradise in the world, let’s find 
                the best destination in world with us.
                </div>
              </Right.Description>
              <Right.Bttn>Contact Us</Right.Bttn>
          </Right>
      </Wrapper>
  )
};

export default ContactUs;
