import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 10vh;
width: 100%;
padding: 24px 130px 0px 130px ;
`

export const LogoWrap = styled.div`
display: flex;
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
`

export const LinkWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 45vw;
@media screen and (max-width:1200px){
    justify-content: space-between;
    width: 15vw;
}
`

export const Links = styled(NavLink)`
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
text-decoration: none;
@media screen and (max-width:1200px){
    display: none;
}
`

export const Bttn = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #FFFFFF;
border-radius: 10px;
font-style: normal;
font-weight: 500;
font-size: 24px;
/* line-height: 36px; */
color: #3E86F5;
width: 8vw;
height: 65px;

`

export const Menu = styled.div`
display: none;
@media screen and (max-width:1200px){
    display: flex;
}
`

export const TitleWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 310px;

`

export const Title = styled.div`

`