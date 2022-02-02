import styled from "styled-components";
import { ReactComponent as plane } from "../../assets/icons/plane.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as flight } from "../../assets/icons/fromtoplane.svg";
import { ReactComponent as leave } from "../../assets/icons/flight.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as hotel } from "../../assets/icons/hotel.svg";


export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: -50px;
`

export const FlightnHotels = styled.div`
background: #FFFFFF;
border-radius: 25px 25px 0px 0px;
display: flex;
position: absolute;
top: 72.5vh;
left: 14vw;
height: 12vh;
`

export const BttnWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
 
export const BttnL = styled.div`
:hover{
    background: rgba(62, 134, 245, 0.2);
}
border-radius: 25px;
width: 8vw;
height: 66px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px 0 15px;
`

export const BttnR = styled.div`
:hover{
    background: rgba(62, 134, 245, 0.2);
}
border-radius: 25px;
width: 8vw;
height: 66px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 15px 0 0;
`

export const PlaneICon = styled(plane)``
export const HotelIcon = styled(hotel)``

export const Destincard = styled.div`
background: #FFFFFF;
box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
border-radius: 0px 50px 50px 50px;
display: flex;
align-items: center;
width: 72vw;
padding: 60px 40px 60px 60px;
justify-content: space-between;
position: relative;
`

export const Destination = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
border: 2px solid rgba(172, 172, 172, 0.5);
box-sizing: border-box;
border-radius: 25px;
width: 28vw;
height: 17vh;
margin-right: 15px;
`

export const SearchBttn = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: rgba(62, 134, 245, 0.8);
border-radius: 65px;
padding: 50px 52px 50px 52px;
margin-left: 15px;
`
export const SearchIcon = styled(search)``


export const From = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
`
export const Title = styled.div`
display: flex;
align-items: center;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: rgba(0, 0, 0, 0.5);
`

export const Country = styled.div`
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #000000;
`

export const FlightIcon = styled(flight)`
`

export const Schedule = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
border: 2px solid rgba(172, 172, 172, 0.5);
box-sizing: border-box;
border-radius: 25px;
height: 17vh;
width: 35vw;
margin-left: 15px;
margin-right: 15px;
`
export const LeaveIcon = styled(leave)`
margin-left: 10px;
`
export const ReturnIcon = styled(leave)`
transform: rotate(180deg);
margin-left: 10px;
`
export const CalendarIcon = styled(calendar)``