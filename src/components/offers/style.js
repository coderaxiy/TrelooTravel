import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin-top: 15vh;
`

export const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 72px;
text-align: center;
color: #000000;
`
export const Switch = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
background: #FFFFFF;
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
border-radius: 10px;
width: 21vw;
height: 8vh;
margin-top: 6vh;
`

Switch.Choice = styled.div`
width: 6vw;
padding: 10px 0 10px 0;
text-align: center;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: rgba(0, 0, 0, 0.5);
cursor: pointer;
:hover{
    background: #3E86F5;
    border-radius: 10px;
    color: white;
}
`

export const CardWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;
gap: 3vw;
`

export const Cards = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.05);
border-radius: 50px;
padding: 10px 25px 35px 50px;
display: flex;
flex-direction: column;
`

Cards.Top = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
align-items: center;
justify-content: space-between;
position: relative;
transform: rotate(90deg);
img{
    transform: rotate(270deg);
}
`

Cards.Top.Date = styled.div`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 27px;
letter-spacing: 0.5em;
color: rgba(0, 0, 0, 0.5);
text-align:center;
`

Cards.Bottm = styled.div`
display: flex;
flex-direction: column;
/* padding-left: 10px; */
`

Cards.Bottm.Time = styled.div`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: rgba(0, 0, 0, 0.5);
margin-top: 20px;
span{
    color: #F178B6;
    background: #FCDDEC;
    border-radius: 100px;
    margin-right: 10px;
    padding: 2px 15px;
}
`

Cards.Bottm.Title = styled.div`
font-style: bold;
font-weight: bold;
font-size: 24px;
line-height: 36px;
color: #000000;
margin: 10px 0 10px 0;
`

Cards.Bottm.Price = styled.div`
display: flex;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #000000;
span{
    color: rgba(0, 0, 0, 0.5);
    font-style: unset;
    font-weight: lighter;
    font-size: 18px;
}
align-items: center;
justify-content: space-between;
`

Cards.Bottm.Bttn = styled.div`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #3E86F5;
background: #F2F6FF;
border-radius: 10px;
width: 6vw;
height: 5vh;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
:active{
    transition: all linear 1s;
transform: scale(1.3);
}
`
