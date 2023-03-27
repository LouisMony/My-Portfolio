import React from 'react';
//import {Component} from 'react'
import '../style/cursor.scss';
import gsap from 'gsap';


export default class Cursor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
        this.InitCursor()
        
    }

    InitCursor(){
      gsap.set(".cursor", {xPercent: -50, yPercent: -50});

      let xTo = gsap.quickTo(".cursor", "x", {duration: 0.6, ease: "power3"}),
          yTo = gsap.quickTo(".cursor", "y", {duration: 0.6, ease: "power3"});

      window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);
      });
    }
    
    render() {
      return(
        <div>
            <div className="cursor"></div>
        </div>
      ) ;
    }
  }