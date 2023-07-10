import React, { Component } from 'react'
import './style.css'

export default class Counter extends Component {
  render() {
    const { imgSrc , alt , mainContent , subContent } = this.props
    return (
      <div class='Counter'>
        <img src={imgSrc} alt={alt}/>
        <div class='textGroup'>
            <h3> {mainContent} </h3>
            <h5> {subContent} </h5>
        </div>
      </div>
    )
  }
}
