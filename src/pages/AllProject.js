import React from 'react';
import {Component} from 'react'

//COMPONENTS
import Menu from '../components/Menu';
import Menu_icon from '../components/Menu_icon';
import HeaderProject from '../components/headerProject';

//JS & STYLE
import gsap from 'gsap';
import SplitType from 'split-type';

import MenuJs from '../js/MenuAnimation';
import ProjectSliderItem from '../components/ProjectSliderItem';
import Marquee from 'react-fast-marquee';
import '../style/AllProjects.scss';

export default class AllProjects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){this.InitAnimation()}

    InitAnimation(){
        
    }

    render() {
      return(
        <div className='Projects'> 
          <Menu/>
          <div onClick={MenuJs}>
            <Menu_icon />
          </div>

          <HeaderProject title="Projects"/>

          <div className='Projects__main'>
            <Marquee className='Marquee' pauseOnHover={true} speed={75} gradient={false}>
                <div className='Projects__main__slider'>
                    <ProjectSliderItem idt="js_word_Events" text="Events" />
                    <ProjectSliderItem idt="js_word_Aides" text="Aides" />
                    <ProjectSliderItem idt="js_word_Music" text="Music" />
                    <ProjectSliderItem idt="js_word_Sneakers" text="Sneakers" />
                    <ProjectSliderItem idt="js_word_Events1" text="Events" />
                    <ProjectSliderItem idt="js_word_Aides2" text="Aides" />
                    <ProjectSliderItem idt="js_word_Music3" text="Music" />
                    <ProjectSliderItem idt="js_word_Sneakers4" text="Sneakers" />
                </div>
            </Marquee>
                
          </div>
        </div>
      ) ;
    }
  }