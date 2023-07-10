import React, { Component } from 'react'
import TextGroup from '../../components/TextGroup'
import Space from '../../components/Space'
import Container from '../../components/Container'
import SubSectionHeader from '../../components/SubSectionHeader'
import './style.css'

export default class Cooking extends Component {
  render() {
    const title = 'What goes in'
    const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.'
    
    return (
        <section class='Cooking'>
            <Space height='150'/>   
            <Container width='80'>
                <div class='leftPart'>
                    <SubSectionHeader content="Cooking ingredients" textAlign='left' margin='0 0 10px 0'/>
                    <TextGroup title = {title} subtitle = {subtitle} TextAlign='left'/>
                </div>
                <div class='rightPart'>
                    <img src='./assets/Rectangle-34.png' alt='img' height='400'/>
                </div>
            </Container>
            <Space height='100'/>   
        </section>
    )
  }
}
