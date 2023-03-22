import React from 'react';
import {Component} from 'react'
import '../style/cursor.scss';

export default class Cursor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
        this.InitCursor()
    }

    InitCursor(){
      const cursor = document.getElementById('js_cursor')
      const cursorcenter = document.getElementById('js_cursor_center')
      document.addEventListener('mousemove', e=>{
        cursor.style.top = e.pageY + "px"
        cursor.style.left = e.pageX + "px"
        cursorcenter.style.top = e.pageY + "px"
        cursorcenter.style.left = e.pageX + "px"
      })
    }
    
    render() {
      return(
        <div>
          <div id='js_cursor'></div>
          <div id='js_cursor_center'></div>
        </div>
      ) ;
    }
  }