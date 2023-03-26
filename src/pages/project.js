import React, { useEffect, useState } from "react";
import {Component} from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderProject from '../components/headerProject'
import '../style/ProjectPage.scss';
import initAnimationCursor from '../js/CursorAnimation';


//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  componentDidMount(){
    //document.querySelector('body').style.overflowY = 'hidden'
    this.initAnimation()
    initAnimationCursor()
  }

  initAnimation(){
    const MyTitle = new SplitType('#js_big_title', { charClass: 'charTitle' })
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo('.charTitle', {y: "30vh",
    },{y:0,stagger: 0.05,delay: 1,duration: 0.3})

    gsap.fromTo(".Project__next__p",{opacity: 0},{
      scrollTrigger:{
          trigger: '.Project__next__p',
          start: 'top 80%',
      },
      opacity: 1,
    })

    gsap.fromTo(".Project__next__img",{scale: 0},{
      scrollTrigger:{
          trigger: '.Project__next__img',
          start: 'top 80%',
      },
      scale: 1,
      duration: 1
    })
  }
 
  
  render() {
    return (
      <motion.div className='Project' initial='initial' animate='animate' exit='exit' id="js_main">
        <div className='Project__container' >
          <div className='Project__container__top'>
            <HeaderProject title={this.props.title}/>
            <motion.div className="Project__container__top__info" 
            initial={{opacity:0}}
            animate={{opacity:1, transition: { delay: 1, ...transition },}}>
              <p>{this.props.job}<br/>
              {this.props.stack}<br/>
              {this.props.time}<br/>
              {this.props.type}
              
              </p>
            </motion.div>
          </div>
          <div className='Project__container__bottom'>
            <div className='bottom'>
              <motion.div className='image-container-single'>
                <motion.div
                  initial={{y: "-25vh", width: this.props.dimension.width, height: this.props.dimension.height}}
                  animate={{y: '0%', width: "100%", height: "50vh", transition: { delay: 0.2, ...transition },}}
                  className='thumbnail-single'>
                  <motion.div className='frame-single' whileHover='hover' transition={transition}>
                    <motion.img src={this.props.banner} alt='an image' initial={{ scale: 1.1 }}
                      animate={{scale: 2.3, y: '40%', transition: { delay: 0.2, ...transition }}}/>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='Project__next' >
            <p className="Project__next__p">
              Welcome to the "Event" application designed to simplify the planning of events in board and card game stores, you can say goodbye to paper lists and disorganization.  Event allows store managers to manage and plan their events with ease while allowing their customers to register directly via their cell phone, to register in the queue, to cancel etc...
            </p>
            <img className="Project__next__img" src={require("../media/event_visual.png")} alt='Visual' />
        </div>
        <div className='Project__footer' >
          <span>Visit Events</span>
        </div>
      </motion.div>
    );
  }
}


