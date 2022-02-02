import React from 'react';
import { BttnL, BttnR, BttnWrap, CalendarIcon, Country, Destination, Destincard, 
         FlightIcon, 
         FlightnHotels, From, HotelIcon, LeaveIcon, PlaneICon, ReturnIcon, Schedule, SearchBttn, 
         SearchIcon, 
         Title,
         Wrapper} 
         from './style';

const TravelNavigation = () => {
    return(
        <Wrapper>
            <FlightnHotels>
                <BttnWrap>
                <BttnL><PlaneICon/> Flight</BttnL>
                <BttnR><HotelIcon/> Flight</BttnR>
                </BttnWrap>
            </FlightnHotels>
            <Destincard>
                <Destination>

                    <From>
                        <Title>Living From</Title>
                        <Country>Dubai</Country>
                    </From>
                    <FlightIcon />
                    <From>
                        <Title>Going to</Title>
                        <Country>New York</Country>
                    </From>
                </Destination >
                <Schedule>
                    <From>
                        <Title>Leave <LeaveIcon/></Title>
                        <Country>23 Jan, Sat</Country>
                    </From>
                    <CalendarIcon/>
                    <From>
                        <Title>Return <ReturnIcon/></Title>
                        <Country>14 Jan, Thur</Country>
                    </From>
                </Schedule>
                <SearchBttn><SearchIcon/></SearchBttn>
            </Destincard>
        </Wrapper>
    )
};

export default TravelNavigation;
