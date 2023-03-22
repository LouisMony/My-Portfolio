import React from 'react';
import {Component} from 'react'
import '../style/ProjectSneakers.scss';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeaderProject from '../components/headerProject';
import CTA from '../components/CTA';

export default class ProjectSneakers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    InitAnimation(){
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(".MainBlocSecond__container__marquee",{
            scrollTrigger:{
                trigger: '.MainBlocSecond',
                scrub: 0.5,
                markers: false
            },
            x: -1000,
        })
    }

    InitSlidingText(){

    }
    
    componentDidMount(){
        this.InitAnimation()
        this.InitSlidingText()
        
    }
    
    render() {
      return(
        <div>
            <div className='MainBloc'>
                <HeaderProject title="Sneakers" type="Personal Project" techno="VueJs/Strapi" />
                <div className='MainBloc__container'>
                    <div className='MainBloc__container__left'>
                        <img className='js_shoe' src='./img/patta_shoe.png' alt='Shoe' />
                    </div>
                    <div className='MainBloc__container__right'>
                        <h3>PRESENTATION</h3><br/><br/>
                        <p>Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p><br/><br/>
                        <CTA text='View on GitHub' link='#' />
                    </div>
                </div>
            </div>
            <div className='MainBlocSecond'>
                <div className='MainBlocSecond__container'>
                    <div className="MainBlocSecond__container__marquee">
                        &nbsp;Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect - Open & Collect
                    </div>
                </div>
            </div>
        </div>
      ) ;
    }
  }