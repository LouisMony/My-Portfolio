import React from 'react';
import {Component} from 'react'

export default class PageA extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
      console.log('start')
    }
    
    render() {
      return(
        <div>
          Page A
        </div>
      ) ;
    }
  }