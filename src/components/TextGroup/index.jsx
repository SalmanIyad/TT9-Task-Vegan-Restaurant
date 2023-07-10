import React, { Component } from 'react'
import Button from '../Button'
import './style.css'

export default class index extends Component {
  render() {
    const { title = 'Title', subtitle = 'Subtitle', buttonText = 'Read More', TextAlign = 'center' } = this.props;
    const marginValue = TextAlign === "center" ? "0 auto" : "0";
    const widthValue = TextAlign === "center" ? "80%" : "100%";

    return (
      <div class="TextGroup" style={{ textAlign: TextAlign }}>
        <h1 dangerouslySetInnerHTML={{ __html: title }} style={{ textAlign: TextAlign, margin: marginValue }}></h1>
        <h3 dangerouslySetInnerHTML={{ __html: subtitle }} style={{ textAlign: TextAlign, margin: marginValue ,width: widthValue}}></h3>
        <Button Text={buttonText} textAlign={TextAlign} />
      </div>
    );
  }
}