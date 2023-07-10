import React, { Component } from 'react'
import Space from '../../components/Space'
import ReviewCard from '../../components/ReviewCard'
import SubSectionHeader from '../../components/SubSectionHeader'
import './style.css'

export default class Reviews extends Component {
  render() {
    return (
      <section class='Reviews'>
        <Space height='100'/>
        <SubSectionHeader content='Reviews'/>
        <h1 class="main-header">
          words from our food lovers
        </h1>
        <Space height='60'/>
        <div class='cards'>
          <ReviewCard imgSrc='./assets/avatars/avatar1.png' alt='image' title='Alex andrina' comment='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
          <ReviewCard imgSrc='./assets/avatars/avatar1.png' alt='image' title='Alex andrina' comment='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
          <ReviewCard imgSrc='./assets/avatars/avatar2.png' alt='image' title='Alex andrina' comment='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
        </div>
        <Space height='60'/>
      </section>
    )
  }
}
