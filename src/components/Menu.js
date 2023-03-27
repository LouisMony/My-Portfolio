import React from 'react';
//import {Component} from 'react'
import { Link } from 'react-router-dom';
import '../style/Menu.scss';
import MenuJs from '../js/MenuAnimation';
import ToggleIcon from "../js/ToggleIcon.js"
import initAnimationCursor from '../js/CursorAnimation';

export default class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
        initAnimationCursor()
        const titlemenu = Array.from(document.querySelectorAll('.Menu__item'))
        titlemenu.forEach(item => {
            let title = item.querySelector('.Menu__item__left__title')
            item.addEventListener('mouseleave', function(){
                title.classList.remove('MonicaFont')
            })
            item.addEventListener('mouseenter', function(){
                title.classList.add('MonicaFont')
            })
            
        })
    }

    MenuJsToggleIcon(){
        MenuJs()
        ToggleIcon()
    }
    
    render() {
      return(
        <div className='Menu'>
            <Link to='/' className='Menu__item' onClick={this.MenuJsToggleIcon} >
                <div className='Menu__item__left link_cursor'>
                    <span className='Menu__item__left__number'>01</span>
                    <span className='Menu__item__left__title'>HOME</span>
                </div>
                <div className='Menu__item__right'>
                    <span className='Menu__item__left__link'>Go here</span>
                    <svg width="76" height="8" viewBox="0 0 76 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.3536 4.35355C75.5488 4.15829 75.5488 3.84171 75.3536 3.64645L72.1716 0.464466C71.9763 0.269204 71.6597 0.269204 71.4645 0.464466C71.2692 0.659728 71.2692 0.976311 71.4645 1.17157L74.2929 4L71.4645 6.82843C71.2692 7.02369 71.2692 7.34027 71.4645 7.53553C71.6597 7.7308 71.9763 7.7308 72.1716 7.53553L75.3536 4.35355ZM0 4.5L75 4.5V3.5L0 3.5L0 4.5Z" fill="#C72222"/>
                    </svg>
                </div>
            </Link>
            <Link to="/about-me" className='Menu__item' onClick={this.MenuJsToggleIcon}>
                <div className='Menu__item__left link_cursor'>
                    <span className='Menu__item__left__number'>02</span>
                    <span className='Menu__item__left__title'>ABOUT ME</span>
                </div>
                <div className='Menu__item__right'>
                    <span className='Menu__item__left__link'>Go here</span>
                    <svg width="76" height="8" viewBox="0 0 76 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.3536 4.35355C75.5488 4.15829 75.5488 3.84171 75.3536 3.64645L72.1716 0.464466C71.9763 0.269204 71.6597 0.269204 71.4645 0.464466C71.2692 0.659728 71.2692 0.976311 71.4645 1.17157L74.2929 4L71.4645 6.82843C71.2692 7.02369 71.2692 7.34027 71.4645 7.53553C71.6597 7.7308 71.9763 7.7308 72.1716 7.53553L75.3536 4.35355ZM0 4.5L75 4.5V3.5L0 3.5L0 4.5Z" fill="#C72222"/>
                    </svg>
                </div>
            </Link>
            <Link to="/contact" className='Menu__item' onClick={this.MenuJsToggleIcon}>
                <div className='Menu__item__left link_cursor'>
                    <span className='Menu__item__left__number'>03</span>
                    <span className='Menu__item__left__title'>CONTACT</span>
                </div>
                <div className='Menu__item__right'>
                    <span className='Menu__item__left__link'>Go here</span>
                    <svg width="76" height="8" viewBox="0 0 76 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.3536 4.35355C75.5488 4.15829 75.5488 3.84171 75.3536 3.64645L72.1716 0.464466C71.9763 0.269204 71.6597 0.269204 71.4645 0.464466C71.2692 0.659728 71.2692 0.976311 71.4645 1.17157L74.2929 4L71.4645 6.82843C71.2692 7.02369 71.2692 7.34027 71.4645 7.53553C71.6597 7.7308 71.9763 7.7308 72.1716 7.53553L75.3536 4.35355ZM0 4.5L75 4.5V3.5L0 3.5L0 4.5Z" fill="#C72222"/>
                    </svg>
                </div>
            </Link>
        </div>
      ) ;
    }
  }