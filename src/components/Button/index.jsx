import React, { Component } from 'react'
import './style.css'

export default class Button extends Component {
  render() {
    const { Text = 'Read More', TextAlign = 'center', Class='readmorebtn' } = this.props;
    return (
      <button class={Class+" btn"} style={{ textAlign: TextAlign, margin: 0 }}>{Text}</button>
    )
  }
}
