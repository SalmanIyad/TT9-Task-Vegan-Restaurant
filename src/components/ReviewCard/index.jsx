import React, { Component } from 'react'
import './style.css'

export default class ReviewCard extends Component {
  render() {
    const { imgSrc, alt='image', title='title', comment='lorem'} = this.props;
    return (
      <div class="ReviewCard">
        <div class='upperPart'>
          <img class='profileImg' src={imgSrc} alt={alt}/>
          <div>
              <h4>{title}</h4>
              <img src='./assets/stars.png' alt='rank'/>
          </div>
        </div>
        <p class='comment'>{comment}</p>
      </div>
    )
  }
}
