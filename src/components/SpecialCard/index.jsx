import React, { Component } from 'react'
import './style.css'
export default class SpecialCard extends Component {
  render() {
    const { imgSrc, alt='image', title='title', subtitle='subtitle' } = this.props
    return (
      <div class='SpecialCard'>
        <img src={imgSrc} alt={alt}/>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    )
  }
}
