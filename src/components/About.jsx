import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { p } from 'framer-motion/client'
import { SectionWrapper } from '../hoc'
import me from '../assets/me.png'


const ServiceCard = ({ index, title, icon}) => (
    
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
      </motion.div>

      
   </Tilt>
   
  )
  


const About = () => {
  return (
    <>
      <motion.div className='text-center' variants={textVariant()}>
        <p className={styles.sectionSubText }>A Warm Welcome to You...</p>
        <h2 className={styles.sectionHeadText} >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        About Me... I'm a skilled website developer with experience 
        in JavaScript, JavaScript-XML, HTML:5, CSS:3.
        I use frameworks like React, Node.js, Three.js to build immersive 3D website enviroments to <span className='blue-text-gradient'>design</span> gripping user experiences.
        Also, I am a <span className='pink-text-gradient'>Social Media Contact Creator </span>turning website clicks into sales, one post at a time.
        I collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-world problem. <span className='green-text-gradient'>From concept to fully functional website and social media platforms.</span>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center' >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper (About, "about");