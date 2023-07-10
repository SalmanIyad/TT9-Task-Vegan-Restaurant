import React, { Component } from 'react'
import Button from '../Button'
import './style.css'

export default class BlogCard extends Component {
  render() {
    const { imgSrc, alt='image', title='title', subtitle='lorem', flexDir='column' } = this.props;
    return (
      <div class="BlogCard" style={{
          flexDirection: flexDir
      }}>
        <img src={imgSrc} alt={alt}/>
        <div class='textPart'>
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <Button TextAlign='left'/>
        </div>
      </div>
    )
  }
}