import React from 'react';
import {Component} from 'react'
import SplitType from 'split-type';
import '../style/ProjectSliderItem.scss';

export default class ProjectSliderItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    
    componentDidMount(){
      console.log('start')
      this.InitAnimation()
    }

    InitAnimation(){
        const MyTitle = new SplitType('#'+this.props.idt, { charClass: 'js_char_item' })
        const blocs = Array.from(document.querySelectorAll('.js_char_item'));
        const container= document.querySelector('.ProjectSliderItem')

        let coef = 1;
        let next;
        let next2;
        let previous;
        let previous2;
        const height=83;
        let i = 1;

        blocs.forEach(item => {
            item.dataset.order = i
            i++
            item.addEventListener('mousemove', function(event) { 
              var rect = item.getBoundingClientRect(); 
              var y = event.clientY - rect.top; 
              var dataOrder = parseInt(item.dataset.order)
              
              next = document.querySelector('[data-order="'+(dataOrder + 1)+'"]')
              next2 = document.querySelector('[data-order="'+(dataOrder + 2)+'"]')
              previous = document.querySelector('[data-order="'+(dataOrder - 1)+'"]')
              previous2 = document.querySelector('[data-order="'+(dataOrder - 2)+'"]')
              
              coef = 1 + (y/120)
              
              item.style.transform = 'scale('+coef+')'
            if(next !== null){
                next.style.transform = 'scale('+(1+((coef-1)/2))+')'
            }
            if(next2 !== null){
                next2.style.transform = 'scale('+(1+((coef-1)/4))+')'
            }
              previous.style.transform = 'scale('+(1+((coef-1)/2))+')'
              previous2.style.transform = 'scale('+(1+((coef-1)/4))+')'
            }); 
          
            item.addEventListener('mouseleave', function(){
              item.style.transform = 'scale(1)'
              next.style.transform = 'scale(1)'
              previous.style.transform = 'scale(1)'
              next2.style.transform = 'scale(1)'
              previous2.style.transform = 'scale(1)'
              coef = 1
            })
          })
          
          container.addEventListener('mouseleave', function(){
            blocs.forEach(item => {
                item.style.transform = 'scale(1)'
            })
          })
    }
    
    render() {
      return(
        <div className='ProjectSliderItem'>
            <p id={this.props.idt}>{this.props.text}</p>
        </div>
      ) ;
    }
  }