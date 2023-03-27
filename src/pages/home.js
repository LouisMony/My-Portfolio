import React from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import project_arr from "../js/projectarr.js";
import initAnimationCursor from '../js/CursorAnimation';
import ProgressiveImage from 'react-progressive-image';
import Loader from '../components/HomeLoader.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeid: 0,
      title: "",
      type: "",
      link: "",
      banner: ""
    };
    this.SwitchSlide = this.SwitchSlide.bind(this);
  }
  
  componentDidMount(){
    initAnimationCursor()

    this.setState({
      title: project_arr[this.state.activeid].title,
      type: project_arr[this.state.activeid].type,
      link: project_arr[this.state.activeid].link,
      banner: project_arr[this.state.activeid].banner
    })
  }

  componentWillUnmount() {
    // Code à exécuter lorsque le composant est démonté
    console.log('Le composant Home a été démonté.');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async SwitchSlide(bool) {
    
    const project_head = document.querySelector('.js_project_head')
    const project_visu = document.querySelector('.js_project_visu')

    project_head.classList.add('opacitynone')
    //project_head.style.opacity = 0
    project_visu.classList.add('scalenone')

    await this.sleep(1000);
    if(bool === false){
      this.setState((prevState) => {
        let nextid = prevState.activeid - 1;
        if (nextid < 0 ) {
          nextid = project_arr.length - 1;
        }
        return {
          activeid: nextid,
          title: project_arr[nextid].title,
          type: project_arr[nextid].type,
          link: project_arr[nextid].link,
          banner: project_arr[nextid].banner,
          bannercomp: project_arr[nextid].bannercomp,
        };
      });
    }
    if(bool === true){
      this.setState((prevState) => {
        let nextid = prevState.activeid + 1;
        if (nextid >= project_arr.length) {
          nextid = 0;
        }
        return {
          activeid: nextid,
          title: project_arr[nextid].title,
          type: project_arr[nextid].type,
          link: project_arr[nextid].link,
          banner: project_arr[nextid].banner,
          bannercomp: project_arr[nextid].bannercomp,
        };
      });
    }
    
    //project_head.style.opacity = 1
    project_head.classList.remove('opacitynone')
    project_visu.classList.remove('scalenone')
  }

  render() {
    const { imageDetails, image } = this.props;

    return (
      <div>
      <Loader/>
        <motion.div exit={{opacity:0}} transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }} className='Home_top'>
          ©2023 Louis Mony - All Rights Reserved
        </motion.div>
        <div className="Home">
          <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }} className="Home__row">
            <AnimatePresence>
              <div className="Home__row__imagecontainer">
                <div
                  className="thumbnail js_project_visu link_cursor"
                  ref={image}
                  style={{ width: imageDetails.width, height: imageDetails.height }}
                >
                  <div className="frame">
                    <Link to={this.state.link}>
                      <ProgressiveImage
                        src={this.state.banner}
                        placeholder={this.state.bannercomp}>
                        {(src) => (
                          <motion.img
                            src={src}
                            alt='Image'
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                          />
                        )}
                      </ProgressiveImage>
                      
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatePresence>
            <motion.div exit={{ opacity: 0 }}></motion.div>
          </motion.section>
        </div>
        <motion.div exit={{opacity:0}} transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }} className='Home_bottom'>
          <button className='Home_bottom__left link_cursor_type2' onClick={() => this.SwitchSlide(false)}>Previous project</button>
          <motion.p initial={{opacity:0}} animate={{opacity: 1}} className='js_project_head MonicaFont'>{this.state.title}</motion.p>
          <button className='Home_bottom__right link_cursor_type2' onClick={() => this.SwitchSlide(true)}>Next project</button>
        </motion.div>
      </div>
    );
  }
}