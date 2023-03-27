import React from 'react';
import {Component} from 'react'
import '../style/HomeLoader.scss';
import CountUp from 'react-countup';

class Loader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: "Loading..."
      }
    }
    
    componentDidMount(){
      console.log('start loader')
      if(sessionStorage.getItem('loaded') === "true"){
        const loader = document.querySelector('.Loader')
        loader.style.display = "none"
      }
    }
    finishLoader(){
        console.log('fin loader')
        const loader = document.querySelector('.Loader')
        loader.classList.add('close')
        this.setState({loading: "Welcome !",})
        sessionStorage.setItem('loaded', true)
    }

    render() {
      return(
        <div className='Loader'>
            <div className='Loader__top'>{this.state.loading}</div>
            <div className='Loader__center'>
                <span className='Loader__center__number' id='js_purecounter'>
                    <CountUp start={0} end={100} duration={2} useEasing={false} onEnd={() => this.finishLoader()}/>
                </span>
                <span className='Loader__center__percent'>%</span>
            </div>
            <div className='Loader__bottom'>
                Louis Mony - Portfolio 2023
            </div>
        </div>
      ) ;
    }
  }

  export default Loader