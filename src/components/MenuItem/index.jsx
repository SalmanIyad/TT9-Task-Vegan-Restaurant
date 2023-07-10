import React, { Component } from 'react'
import './style.css'

export default class index extends Component {
  render() {
    const { imgSrc, alt='image', title, subtitle, number} = this.props
    return (
      <div class="MenuItem">
        <img src={imgSrc} alt={alt}/>
        <div>
            <h5>{title}</h5>
            <h6>{subtitle}</h6>
        </div>
        <svg width="123" height="2" viewBox="0 0 123 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H123" stroke="#FFCE6D"/>
        </svg>
        <h2>{number}</h2>
      </div>
    )
  }
}
