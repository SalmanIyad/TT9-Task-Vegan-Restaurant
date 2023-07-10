import React, { Component } from 'react'
import SubSectionHeader from '../../components/SubSectionHeader'
import Container from '../../components/Container'
import Space from '../../components/Space'
import Button from '../../components/Button'
import './style.css'

export default class index extends Component {
  render() {
    return (
      <section class='JoinUs'>
        <Container width='80'>
            <img src="./assets/Component 5.png" alt=""/>
            <div class='mid-content'>
                <Space height='40'/>
                <SubSectionHeader color='#FFFFFC' fontSize='36px' content="Come join us for a lunch this weekend and enjoy"/>
                <Space height='40'/>
                <h1 class="sub-title">
                    FLAT 10% OFF
                </h1>
                <Space height='20'/>
                <Button Text='Book Table'/>
                <Space height='40'/>
            </div>
            <img src="./assets/Component 5.png" alt="join us"/>
        </Container>
      </section>
    )
  }
}
