import React, { Component } from 'react'
import Space from '../../components/Space'
import Container from '../../components/Container'
import Counter from '../../components/Counter'
import './style.css'

export default class Counters extends Component {
  render() {
    return (
      <section class='Counters'>
        <Space height='56'/>
          <Container width='70'>
            <Counter imgSrc='./assets/Numbers/dish.png' alt='dish' mainContent='250+' subContent='Delicacy'/>
            <Counter imgSrc='./assets/Numbers/chef.png' alt='chef' mainContent='10+' subContent='Renewed chefs'/>
            <Counter imgSrc='./assets/Numbers/team.png' alt='team' mainContent='30+' subContent='Members'/>
          </Container>
        <Space height='56'/>
      </section>
    )
  }
}
