import React from 'react';
import Navbar from '../navbar';
import { Container, Title, TitleWrap, Wrap } from './style';

const Header = () => {
  
    return(
        <Container>
            <Navbar/>
            <Wrap>
                <TitleWrap>
                    <Title className='Big'>Discover Your Life, Travel Where You Want</Title>
                    <Title className='Small'>Would you explore natur paradise in the world, let’s find the best destination in world with us.</Title>
                </TitleWrap>
            </Wrap>
        </Container> 
    )
};

export default Header;
