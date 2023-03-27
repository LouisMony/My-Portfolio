import React from 'react';
//import {Component} from 'react'

//COMPONENTS
import HeaderProject from '../components/headerProject';

//JS & STYLE
import gsap from 'gsap';
import initAnimationCursor from '../js/CursorAnimation';
import '../style/Contact.scss';

export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
      this.InitAnimation() 
      initAnimationCursor()
    }

    InitAnimation(){
        gsap.fromTo(".link", {
            y:100
          }, 
          {
            y:0,
            duration:1, 
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

          <HeaderProject title="Contact"/>

          <div className='Contact__main'>
            <ul className='Contact__main__list'>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        <a rel="noopener noreferrer" href="mailto:Louis.mony2@gmail.com" className='link_cursor_type2' target="_blank">Louis.mony2@gmail.com</a>
                    </p>
                </li>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        <a rel="noopener noreferrer" href='https://fr.linkedin.com/in/louis-mony-2505331a2' className='link_cursor_type2' target="_blank">Linkedin</a>
                    </p>
                </li>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        <a rel="noopener noreferrer" href='https://github.com/LouisMony' className='link_cursor_type2' target="_blank">GitHub</a>
                    </p>
                </li>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        <a rel="noopener noreferrer" href='https://soundcloud.com/user-937117132' className='link_cursor_type2' target="_blank">SoundCloud</a>
                    </p>
                </li>
                <li className='Contact__main__list__item'>
                    <p className='link'>
                        <a rel="noopener noreferrer" href='https://www.instagram.com/louis__mony/' className='link_cursor_type2' target="_blank">Instagram</a>
                    </p>
                </li>
            </ul>
          </div>
        </div>
      ) ;
    }
  }