import styled from "styled-components";
import bg from '../../assets/images/bg.png'

export const Container = styled.div`
background: url(${bg});
background-size: cover;
height: 90vh;
`

export const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 89%;
`

export const TitleWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 55vw;
.Big{
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 96px;
}
.Small{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 200%;
    width: 50vw;
}
`
export const Title = styled.div`
text-align: center;
color: #FFFFFF;
`