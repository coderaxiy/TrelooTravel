import React from 'react';
import { LinkWrap, LogoWrap, Wrapper, Links, Bttn, Menu, } from './style';
import {navbar} from '../../utils/navbar'



const Navbar = () => {
  
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

export default Navbar;
