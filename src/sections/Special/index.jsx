import React, { Component } from 'react'
import SpecialCard from '../../components/SpecialCard'
import SubSectionHeader from '../../components/SubSectionHeader'
import Container from '../../components/Container'
import Space from '../../components/Space'
import './style.css'


export default class Special extends Component {
  render() {
    return (
        <section id='Special'>
          <Container width='90'>
              <Space height='30'/>
              <SubSectionHeader content="Special"/>
              <h1 class="main-header">
                  What makes us special
              </h1>
              <div class='cards'>
                  <SpecialCard imgSrc='./assets/special/orange-juice.png' alt='restaurant' title='Exotic dishes' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
                  <SpecialCard imgSrc='./assets/special/chef.png' alt='restaurant' title='Exotic dishes' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
                  <SpecialCard imgSrc='./assets/special/restaurant.png' alt='restaurant' title='Exotic dishes' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
              </div>  
              <Space height='100'/>
            </Container>
        </section>
    )
  }
}
