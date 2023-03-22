import React from 'react';
import {Component} from 'react'

//COMPONENTS
import Menu from '../components/Menu';
import Menu_icon from '../components/Menu_icon';
import HeaderProject from '../components/headerProject';

//JS & STYLE
import gsap from 'gsap';

import MenuJs from '../js/MenuAnimation';
import '../style/Contact.scss';

export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){this.InitAnimation()}

    InitAnimation(){
        gsap.fromTo(".link", {
            y:100
          }, 
          {
            y:0,
            duration:0.5, 
            delay: 1.5,
            stagger:{
              each: 0.1,
              yoyo: false, 
            }
          });
    }

    render() {
      return(
        <div className='Contact'> 
          <Menu/>
          <div onClick={MenuJs}>
            <Menu_icon />
          </div>

          <HeaderProject title="Contact"/>

          <div className='Contact__main'>
            <ul className='Contact__main__list'>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        
                        <a href='#' target="_blank">Louis.mony2@gmail.com</a>
                    </p>
                </li>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        <a href='https://fr.linkedin.com/in/louis-mony-2505331a2' target="_blank">Linkedin</a>
                    </p>
                </li>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        <a href='https://github.com/LouisMony' target="_blank">GitHub</a>
                    </p>
                </li>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        <a href='https://soundcloud.com/user-937117132' target="_blank">SoundCloud</a>
                    </p>
                </li>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        <a href='https://www.instagram.com/louis__mony/' target="_blank">Instagram</a>
                    </p>
                </li>
            </ul>
          </div>
        </div>
      ) ;
    }
  }