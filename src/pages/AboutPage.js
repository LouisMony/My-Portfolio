import React from 'react';
import {Component} from 'react'

//COMPONENTS
import Menu from '../components/Menu';
import Menu_icon from '../components/Menu_icon';
import HeaderProject from '../components/headerProject';

//JS & STYLE
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
import MenuJs from '../js/MenuAnimation';
import initAnimationCursor from '../js/CursorAnimation';
import '../style/About.scss';

export default class About extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
        this.InitAnimation()
        initAnimationCursor()
    }

    InitAnimation(){
        //PARALLAX PHOTO & TEXT
        gsap.registerPlugin(ScrollTrigger)
        var trigger_height = (window.innerHeight*0.95)+'px'

        gsap.to(".About__main__photo__visual",{
            scrollTrigger:{
                trigger: '.About__main__p',
                start: 'bottom center',
                end: '1000px',
                scrub: 0.5,
            },
            y: -200,
        })

        gsap.to(".js_p_1",{
            scrollTrigger:{
                trigger: '.About__main__p',
                start: 'bottom center',
                end: '1000px',
                scrub: 0.5,
            },
            x: 500,
        })

        gsap.fromTo(".js_p_2", {
            x: 500
        }, {
            scrollTrigger:{
                trigger: '.About__main__p',
                start: 'bottom center',
                end: '1000px',
                scrub: 0.5,
            },
            x: -300,
        });

        //SLIDE SKILSS
        gsap.fromTo(".About__main__skills__list", {
            x: 0
        }, {
            scrollTrigger:{
                trigger: '.About__main__skills__list',
                start: 'top '+trigger_height,
                end: '500px',
                scrub: 0.5,
            },
            x: -500,
        });

        //POP SKILLS
        const MYtext = new SplitType('#js_gsap_skills')
        gsap.to('.char', {
            scrollTrigger:{
                trigger: '.About__main__skills__h1',
                start: 'top '+trigger_height,
                end:'bottom bottom',
                scrub: 0.3,
            },
            y:0,
            stagger: 0.05,
            duration: 0.1,
        })

        //POP P
        

        gsap.fromTo(".js_pop", {
            opacity:0
          }, 
          {
            opacity:1, 
            duration:1, 
            delay: 2,
            stagger:{
              each: 0.5,
              yoyo: false, 
            }
          });
    }

    render() {
      return(
        <div className='About'> 

          <HeaderProject title="About me"/>

          <div className='About__main'>
                <p className='About__main__p js_pop'>
                    <div className='About__main__p__div' >Hello ! I am Louis, a junior front-end developer specializing in creating aesthetic and user-friendly websites. With my skills in different framework and in JavaScript, I can design dynamic and responsive user interfaces.<br/>
                    Having worked on several projects, I have gained experience and developed my creativity. I am also an effective collaborator and good communicator.<br/>
                    If you are looking for a talented front-end developer for your project, please feel free to contact me. I would be delighted to discuss your needs.</div>
                </p>

                <div className='About__main__photo js_pop'>
                    <p className='About__main__photo__p js_p_1'>"Creativity"</p>
                    <p className='About__main__photo__p js_p_2'>"Creativity"</p>
                    <div className='About__main__photo__visual'></div>
                </div>

                <div className='About__main__skills js_pop'>
                    <h1 id='js_gsap_skills' className='About__main__skills__h1'>Skills</h1>
                    <div className='About__main__skills__list'>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/html.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/css.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/js.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/react.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/vue.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/svelte.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/gsap.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/strapi.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/directus.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/figma.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/xd.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/html.png' />
                        </div>
                        <div className='About__main__skills__list__item'>
                            <img src='/media/IconsSkills/css.png' />
                        </div>
                    </div>
                    <p className='About__main__skills__p js_pop'>
                    As a junior front-end developer, I'm able to design responsive layouts and smooth animations using frameworks such as React,Vue, Svelte and Astro... I have web integration skills and am capable of working with version control tools such as Git.<br/>
                    </p>
                </div>
          </div>

          <div className='About__footer'></div>
        </div>
      ) ;
    }
  }