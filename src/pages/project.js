import React from "react";
//import {Component} from 'react'
import { motion } from "framer-motion";
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
    this.state = {
      scaleban: parseFloat(this.props.scalebanner),
      transformban: this.props.transformbannner+"%",
      video_is_playing: false
    }
  }
  
  componentDidMount(){
    this.initAnimation()
    initAnimationCursor()
    this.LoadVideo()
  }

  LoadVideo(){
    const video = document.getElementById('js_video')
    let _this = this
    video.addEventListener('click', function(){
      if(_this.state.video_is_playing === false){
        video.play()
        video.parentNode.classList.add('playing')
        _this.setState({video_is_playing: true})
      }
      else if(_this.state.video_is_playing === true){
        video.pause()
        video.parentNode.classList.remove('playing')
        _this.setState({video_is_playing: false})
      }
    })
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

    gsap.fromTo(".Project__next__img",{opacity: 0},{
      scrollTrigger:{
          trigger: '.Project__next__img',
          start: 'top 80%',
      },
      opacity: 1,
      duration: 1
    })
  }
 
  
  render() {
    return (
      <motion.div className='Project' initial='initial' animate='animate' exit='exit' id="js_main">
        <div className='Project__container' >
          <div className='Project__container__top'>
            <HeaderProject title={this.props.title}/>
            <motion.div className="Project__container__top__info Founders" 
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
                      animate={{scale: this.state.scaleban, y: this.state.transformban, transition: { delay: 0.2, ...transition }}}/>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className='Project__next' >
            <p className="Project__next__p">
              {this.props.introText}
            </p>
            {this.props.firstVisual  && <img className="Project__next__img" src={this.props.firstVisual} alt='Visual' />}
            {this.props.video  && <div className="video_container"><video loop className="link_cursor" id="js_video" src='/media/video/music_for_hyundai.mp4' /></div>}
            {this.props.secondText 
              ? <p className="Project__next__p">{this.props.secondText}</p> 
              : <div className="empty"></div>
            }
        </div>
        <div className='Project__footer link_cursor_type2' >
          <a rel="noopener noreferrer" target="_blank" href={this.props.endLink}>
            <span>{this.props.endCTA}</span>
          </a>
        </div>
      </motion.div>
    );
  }
}


