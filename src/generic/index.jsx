import React from 'react';
import { navbar } from '../utils/navbar';
import { Bttn, Links, LinkWrap, LogoWrap, Menu, Wrapper } from './style';

const Test = () => {
  return(
    <Wrapper>
    <LogoWrap>Treloo</LogoWrap>
    <LinkWrap >
    {
        navbar.map((value)=>(
        
            <Links key={value.id}
             to={value.path}>
                 {value.title}</Links>
        
        )) 
    }
    <Menu>Menu</Menu>
    <Bttn>Blog</Bttn>
    </LinkWrap>
</Wrapper>
  )
};

export default Test;
