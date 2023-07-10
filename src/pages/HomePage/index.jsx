import React, { Component } from 'react'
import Header from '../../sections/Header'
import AboutUs from '../../sections/AboutUs'
import Special from '../../sections/Special'
import JoinUs from '../../sections/JoinUs'
import Menu from '../../sections/Menu'
import Cooking from '../../sections/Cooking'
import Counters from '../../sections/Counters'
import Reviews from '../../sections/Reviews'
import Blogs from '../../sections/Blogs'
import Footer from '../../sections/Footer'

export default class index extends Component {
  render() {
    return (
        <>
            <Header/>
            <AboutUs/>
            <Special/>
            <Menu/> 
            <JoinUs/>
            <Cooking/>
            <Counters/>
            <Reviews/>
            <Blogs/>
            <Footer/>
        </>
    )
  }
}
