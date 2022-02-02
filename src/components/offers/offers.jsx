import React from 'react';
import { destinations } from '../../mock/destinations';
import { Cards, CardWrap, Container, Switch, Title } from './style';

const Offers = () => {
  return(
      <Container>
          <Title>Special Upcoming Offers</Title>
          <Switch>
              <Switch.Choice>Team</Switch.Choice>
              <Switch.Choice>Couple</Switch.Choice>
              <Switch.Choice>Family</Switch.Choice>
          </Switch>
          <CardWrap>
              {
                  destinations.map((value)=>(
                      <Cards key={value.id}>
                          <Cards.Top><Cards.Top.Date>{value.date}</Cards.Top.Date><img src={value.img} alt='amazing view believe me'></img></Cards.Top>
                          <Cards.Bottm>
                              <Cards.Bottm.Time>
                                  <span>{value.highlighted}</span>
                                  {value.time}
                              </Cards.Bottm.Time>
                              <Cards.Bottm.Title>{value.title}</Cards.Bottm.Title>
                              <Cards.Bottm.Price><div>{value.price}$<span>/</span><span>{value.per}</span></div>
                              <Cards.Bottm.Bttn>Book Now</Cards.Bottm.Bttn>
                              </Cards.Bottm.Price>
                          </Cards.Bottm>

                      </Cards>
                  ))
              }
          </CardWrap>         
      </Container>
  )
};

export default Offers;
