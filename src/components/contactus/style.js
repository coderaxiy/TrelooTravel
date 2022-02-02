import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 70px;
position: relative;
gap: 8vw;
`

export const Left = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
border-radius: 75px;
.items{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
    height: 80vh;
    position: relative;
    right: 90px;
}
`

Left.Img = styled.img`
`

Left.Destin = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
border-radius: 35px;
width: 180px;
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10px;
position: absolute;
left: 5px;
`
Left.Destin.Count = styled.div`
font-style: normal;
font-weight: 600;
font-size: 36px;
color: #3E86F5;
`

Left.Destin.Text = styled.div`
font-size: 18px;
line-height: 27px;
color: #000000;
text-transform: uppercase;
margin-top: -15px;
`

Left.Tourists = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
border-radius: 35px;
width: 190px;
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
left: 135px;
`
Left.Tourists.Count = styled.div`
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 54px;
color: #3E86F5;
`

Left.Tourists.Text = styled.div`
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 27px;
color: #000000;
text-transform: uppercase;
margin-top: -15px;
`

Left.Hotels = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
border-radius: 35px;
width: 160px;
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 15vh;
position: absolute;
top: 50vh;
left: 20px;
`
Left.Hotels.Count = styled.div`
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 54px;
color: #3E86F5;
`

Left.Hotels.Text = styled.div`
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 27px;
color: #000000;
text-transform: uppercase;
margin-top: -15px;
`


export const Right = styled.div`
display: flex;
padding-top: 12vh;
flex-direction: column;
width: 35vw;
`

Right.Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 72px;
color: #000000;
`
Right.Description = styled.div`
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 200%;
color: rgba(0, 0, 0, 0.5);
div{
    margin-top: 50px;
}
`

Right.Bttn = styled.div`
filter: drop-shadow(4px 8px 25px rgba(62, 134, 245, 0.25));
background: #3E86F5;
border-radius: 10px;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
width: 11vw;
height: 9vh;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
cursor: pointer;
:active{
    transition: all linear 500ms;
    transform: scale(1.1);
}
`