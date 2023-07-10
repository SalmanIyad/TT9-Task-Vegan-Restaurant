import React, { Component } from 'react'
import './style.css'
import TextGroup from '../../components/TextGroup'
import Space from '../../components/Space'
import Container from '../../components/Container'
import SubSectionHeader from '../../components/SubSectionHeader'

export default class index extends Component {
  render() {
    const title = 'Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine'
    const subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.'
    
    return (
        <section id='AboutUs'>
            <Space height='150'/>   
            <Container width='80'>
                <div class='leftPart'>
                    <SubSectionHeader content="About Us" textAlign='left' margin='0 0 10px 0'/>
                    <TextGroup title = {title} subtitle = {subtitle} TextAlign='left'/>
                </div>
                <div class='rightPart'>
                    <img src='./assets/AboutUs-img.png' alt='img' height='400'/>
                </div>
            </Container>
            <Space height='100'/>   
        </section>
    )
  }
}
