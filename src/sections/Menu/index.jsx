import React, { Component } from 'react'
import './style.css'
import TextGroup from '../../components/TextGroup'
import Space from '../../components/Space'
import Container from '../../components/Container'
import SubSectionHeader from '../../components/SubSectionHeader'
import MenuItem from '../../components/MenuItem'

export default class index extends Component {
  render() {
    return (
      <section id='Menu'>
        <Container width='90'>
            <Space height='50'/>  
            <SubSectionHeader content='Straight From Kitchen'/>
             <h1 class="main-header">
                Our Menu
            </h1>
            <div class='menu-items'>
              <MenuItem imgSrc='./assets/StraightFromKitchen/card1.png' alt='card1' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
              <MenuItem imgSrc='./assets/StraightFromKitchen/card2.png' alt='card2' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
              <MenuItem imgSrc='./assets/StraightFromKitchen/card3.png' alt='card3' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
              <MenuItem imgSrc='./assets/StraightFromKitchen/card4.png' alt='card4' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
              <MenuItem imgSrc='./assets/StraightFromKitchen/card5.png' alt='card5' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
              <MenuItem imgSrc='./assets/StraightFromKitchen/card6.png' alt='card6' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
              <MenuItem imgSrc='./assets/StraightFromKitchen/card7.png' alt='card7' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
              <MenuItem imgSrc='./assets/StraightFromKitchen/card8.png' alt='card8' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
              <MenuItem imgSrc='./assets/StraightFromKitchen/card9.png' alt='card9' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
             <MenuItem imgSrc='./assets/StraightFromKitchen/card10.png' alt='card10' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
             <MenuItem imgSrc='./assets/StraightFromKitchen/card11.png' alt='card11' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
             <MenuItem imgSrc='./assets/StraightFromKitchen/card12.png' alt='card12' title='Lorem ipsum dolor sit amet' subtitle='Lorem ipsum dolor sit amet' number='Rs 451'/>
            
            </div>
        </Container>
        <Space height='100'/>
      </section>
    )
  }
}
