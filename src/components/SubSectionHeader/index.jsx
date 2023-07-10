import React, { Component } from 'react'

export default class SubSectionHeader extends Component {
  render() {
    const { content, color='#FFCE6D',textAlign='center',fontSize='36px', margin='0', width } = this.props;
    return (
      <div style={
        {
          width: width || 'auto',
        }
      }>
        <h1 class="SubSectionHeader" style={
            {
                color: color,
                textAlign: textAlign,
                fontSize: fontSize,
                margin: margin
            }
        }>{content}</h1>
      </div>
    )
  }
}
