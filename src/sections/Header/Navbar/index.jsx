import React, { Component } from 'react';
import Logo from '../../../components/Logo';
import Container from '../../../components/Container';
import Space from '../../../components/Space';
import './style.css';

export default class Navbar extends Component {
  render() {
      return (
        <>
        <Space name="first-space" height="120"/>
        <div class="Navbar">
          <Container class="container" width="70">
            <Logo class="logo"/>    
            <ul class="nav-links">
                <li><a href="#Home">Home</a></li>
                <li><a href="#AboutUs">About Us</a></li>
                <li><a href="#Special">Special</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Blogs">Blogs</a></li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#A08040" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </li>
            </ul>
            <a class="Nav-Button" href="#bookPage"> {/* Edit href value */}
              <svg width="35" height="2" viewBox="0 0 35 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H35" stroke="white" stroke-width="2"/>
              </svg>

              <span>Book Now</span>

              <svg width="35" height="2" viewBox="0 0 35 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1H35" stroke="white" stroke-width="2"/>
              </svg>
            </a>
          </Container>  
        </div>
      </>
    )
  }
}
