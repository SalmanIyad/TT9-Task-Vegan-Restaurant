import React, { Component } from 'react'
import Space from '../../components/Space'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Logo from '../../components/Logo';
import './style.css'

export default class index extends Component {
  render() {
    return (
      <section class='Footer'>
        <div className='Footer-upper-content'>
          <Space height='70'/>
          <Container>
            <div className='Footer-upper-content-left'>
              <div>
                <Logo/>
                <h2>Golden View Dine</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
              <div class='socialLinks'>
                <img src='./assets/icons/instagram.png' alt='instagram'/>
                <img src='./assets/icons/twitter.png' alt='twitter'/>
                <img src='./assets/icons/youtube.png' alt='youtube'/>
              </div>
            </div>
            <div className='Footer-upper-content-mid'>
              <h2>Other Links</h2>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & conditions</li>
                <li>Blogs</li>
                <li>our team</li>
                <li>Our kitchen</li>
              </ul>
            </div>
            <div className='Footer-upper-content-right'>
              <h2>Contact Us</h2>
              <ul>
                <li><img src='./assets/icons/email.png' alt='email'/>Gogreendineservice@gmail.com</li>
                <li><img src='./assets/icons/gps.png' alt='gps'/>AZ complex bylane3 Mandari Rd<br/>Mumbai 1100867 </li>
                <li><img src='./assets/icons/phone.png' alt='phone'/>+1800 287 256</li>
              </ul>
            </div>
          </Container>
          <Space height='70'/>  
        </div>
        <div className='Footer-mid-content'>
          <Space height='20'/>
          <Container>
          <div>
            <img src='./assets/icons/email2.png' alt='email'/>
            <h3>Subscribe to our Newsletter</h3>
          </div>
          <div>
            <input type="email" id="emailInput" name="email" placeholder='Your Email'/>
            <Button Text='Subscribe' Class='subscribeBtn'/>
          </div>
          </Container>
          <Space height='20'/>
        </div>  
        <div className='Footer-lower-content'>
          <Space height='20'/>
            <p>Copyright © 2022 Golden Dine website</p>
            <p>All rights reserved</p>
          <Space height='20'/>
        </div>  
      </section>
    )
  }
}
