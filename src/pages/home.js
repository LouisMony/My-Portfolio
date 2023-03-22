import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <div className='Home'>

      <div className='Home__row'>
        <div className='Home__row__imagecontainer'>
          <div className='thumbnail' ref={image} style={{width: imageDetails.width,height: imageDetails.height,}}>
            <div className='frame'>
              <Link to={`/project/events`}>
                <motion.img src={require("../media/elesh_visual.png")} alt='Image' whileHover={{ scale: 1.1 }} transition={transition}/>
              </Link>
            </div>
          </div>
        </div>
        <motion.div exit={{ opacity: 0 }}></motion.div>
      </div>
    </div>
  </>
);

export default Home;
