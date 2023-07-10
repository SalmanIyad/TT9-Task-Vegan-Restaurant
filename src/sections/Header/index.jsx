import React, { Component } from 'react'
import Space from '../../components/Space'
// import Container from '../../components/Container'
import Navbar from './Navbar'
import Hero from './Hero'
import './style.css'

export default class Header extends Component {
  render() {
    return (
      <section id="Home">
        <div class="Home-BG-img">
          <div class="Home-BG-img-gradient">
              <Navbar/>
              <Space height="200"/>
              <Hero/>
              <Space height="200"/>
              <Space height="80" backgroundColor="#101418"/>
          </div>
        </div>
      </section>
    )
  }
}
