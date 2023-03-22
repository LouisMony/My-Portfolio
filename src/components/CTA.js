import React from 'react';
import {Component} from 'react'
import '../style/cta.scss';

export default class CTA extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
      console.log('start')
    }
    
    render() {
      return(
        <div className='cta'>
            <a href={this.props.link}>{this.props.text}</a>
        </div>
      ) ;
    }
  }