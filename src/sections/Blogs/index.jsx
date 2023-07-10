import React, { Component } from 'react'
import BlogCard from '../../components/BlogCard'
import SubSectionHeader from '../../components/SubSectionHeader'
import Space from '../../components/Space'
import Container from '../../components/Container'
import './style.css'

export default class index extends Component {
  render() {
    return (
      <section id='Blogs'>
        <Space height='60'/>
        <SubSectionHeader content="Blogs"/>
        <h1 class="main-header">
            words from our food lovers
        </h1>
        <Space height='70'/>
        <Container width='90'>
          <BlogCard imgSrc='./assets/blogs/blog1.png' title='Cooking Dining Experience' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '/>
          <BlogCard imgSrc='./assets/blogs/blog2.png' title='Cooking Dining Experience' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ' flexDir='column-reverse'/>
          <BlogCard imgSrc='./assets/blogs/blog3.png' title='Cooking Dining Experience' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '/>
        </Container>
        <Space height='70'/>
      </section>
    )
  }
}
