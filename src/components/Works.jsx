import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import  ex  from '../assets/ex.png'
import br from '../assets/br.png'
import bars from '../assets/bars.png'
import carrent from '../assets/carrent.png'
import me from '../assets/me.png'

const ProjectCard = ({ index, name, description, tags, image, source_code_link}) =>{
  return (
    
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
       <div className='mt-20 flex flex-wrap gap-7 justify-center' >
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
          {/* Excellence Hub */}
        <div className="relative w-full h-[230px]">
          <img src={ex} alt="ex" className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m3 card-img_hover">
            <div onClick={() => window.open("https://www.excellencehub.co.uk/")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
               <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>Excellence Hub - 
            <span className="green-text-gradient">Over 25k Members</span></h3>

          <p className='mt-2 text-secondary text-[14px]'>Web-based platform that allows 
            users to join a group to discover the best holidays in Mexico! Share tips, 
            experiences, and recommendations for stunning destinations, hidden gems, 
            local culture, and unforgettable adventures across Mexico.</p>

            <div className="text-[14px] inline-flex tracking-normal">
              <p className="blue-text-gradient"># Developed using React, &nbsp;</p>
              <p className="green-text-gradient">Tailwind and &nbsp;</p>
              <p className="pink-text-gradient">3JS</p>
            </div>
          
        </div>
      </Tilt>

      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
          {/* Brown Envelope */}
        <div className="relative w-full h-[230px]">
          <img src={br} alt="ex" className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m3 card-img_hover">
            <div onClick={() => window.open("https://siwill9163.github.io/renderings/")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
               <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'><span className="pink-text-gradient">Brown Enevlope</span> - The anonymous email service.</h3>
          <p className='mt-2 text-secondary text-[14px]'>An anonymous email service that allows users to send emails
             without revealing their identity. It prioritizes privacy and security, 
             offering features like encrypted messaging and no personal information tracking, 
             ensuring complete anonymity for users.</p>
        </div>

        <div className="text-[14px] inline-flex tracking-normal">
              <p className="blue-text-gradient"># Developed JavaScript, &nbsp;</p>
              <p className="pink-text-gradient">CSS-3 and &nbsp;</p>
              <p className="green-text-gradient">HTML-5 </p>
            </div>

      </Tilt>


      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
          {/* Bars */}
        <div className="relative w-full h-[230px]">
          <img src={bars} alt="ex" className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end m3 card-img_hover">
            <div onClick={() => window.open("https://www.facebook.com/wjhomebars")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
               <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'><span className="blue-text-gradient">Williams Home Bars</span> - Bringing the party home. </h3>
          <p className='mt-2 text-secondary text-[14px]'>Williams Bars pride themselves on making top quality solid 
            wood bars for private dwellings, public houses and interior designers - Over 6.6K Members</p>
        </div>
        <div className="text-[14px] inline-flex tracking-normal">
              <p className="green-text-gradient"># Developed JavaScript, &nbsp;</p>
              <p className="pink-text-gradient">CSS-3 and &nbsp;</p>
              <p className="blue-text-gradient">HTML-5 </p>
            </div>
      </Tilt>


     
       <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
       
          {/* Meet the man*/}
        <div className="relative w-full h-[330px]">
          <img src={me} alt="ex" className="w-full h-full object-cover rounded-2xl"/>
          
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'><span className="blue-text-gradient">Simon Williams...</span> </h3>
          <h4 className='text-white font-bold text-[24px]'>The Web Coding Master. </h4>
          
        </div>
        <div className="text-[14px] inline-flex tracking-normal">
              <p className="green-text-gradient"># Developed JavaScript, &nbsp;</p>
              <p className="pink-text-gradient">CSS-3 and &nbsp;</p>
              <p className="blue-text-gradient">HTML-5 </p>
            </div>
       </div>
        
      
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center` }>my website's</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Some of my work.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px] text-center'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works,"")