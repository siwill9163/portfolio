
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";
  
 
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
 
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },

    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  
   
  ];
  
  const experiences = [
    {
      title: "Independant Website Development",
      company_name: "Website and App Develor",
      icon: web,
      iconBg: "#383E56",
      date: "End-to-End Management",
      points: [
        "Working alone on website and App development allows for a streamlined process, enabling quick decision-making and full creative control over design and functionality.",
        "I personally handle all aspects of the project—from coding and design to testing and deployment—ensuring a cohesive and personalised result.",
        "Working independently provides flexibility in terms of timelines and project scope, allowing for adjustments based on evolving client needs or new ideas.",
        "Developing alone encourages innovative solutions and a deep understanding of both front-end and back-end development, leading to efficient, high-quality web applications and websites.",
      ],
    },
    {
      title: "Social Media Content Creator",
      company_name: "Turning Ideas into Impact, One Post at a Time.",
      icon: web,
      iconBg: "#383E56",
      date: "Facebook - TikToK - Instagram",
      points: [
        "As a content creator, I craft engaging narratives across various platforms, blending creativity and strategy to connect with audiences and communicate messages effectively.",
        "I produce a wide range of content, from blogs and videos to social media posts and podcasts, adapting style and tone to suit each medium and target audience.",
        "By understanding my audience’s preferences and interests, I create content that resonates, builds community, and builds meaningful interactions.",
        "Staying updated on trends, tools, and techniques, I constantly refine my skills to deliver fresh, relevant, and high-quality content that stands out in a competitive digital landscape.",
      ],
    },
    {
      title: "Website User-Interface Designer",
      company_name: "Including Responsive Web/Mobile Design",
      icon: web,
      iconBg: "#383E56",
      date: "Designing and Defining Your Brand.",
      points: [
        "As a web designer, I focus on creating intuitive, visually appealing websites that prioritise user experience and seamless navigation to keep visitors engaged.",
        "I blend creativity with functionality to develop custom designs that meet client goals, ensuring both aesthetic appeal and technical performance.",
        "Craft websites that are mobile-friendly and adaptable across all devices, ensuring a consistent and optimised experience for users, no matter how they access the site.",
        "Working closely with the clients, I ensure that the design aligns with branding, goals, and technical requirements to deliver a cohesive, high-quality final product.",
      ],
    },
    {
      title: "Bringing Depth to the Internet",
      company_name: "Experience Websites in 3D.",
      icon: web,
      iconBg: "#383E56",
      date: "innovative features, immersive 3D environments, and stunning visual effects",
      points: [
        "Createing immersive experiences that capture user attention, offering a unique and interactive journey.",
        "By integrating 3D elements, websites gain visual depth, making brands stand out with stunning, lifelike visuals.",
        "3D websites are optimized for various devices, ensuring a smooth and responsive experience on desktop, tablet, and mobile.",
        "Contact me to find out more...",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Excellence Hub - Over 25k User",
      description:
        "Web-based plathorm that allows users to join a group to discover the best holidays in Mexico! Share tips, experiences, and recommendations for stunning destinations, hidden gems, local culture, and unforgettable adventures across Mexico.",
      tags: [
        {
          name: "React library",
          color: "blue-text-gradient",
        },
        {
          name: "Web Interface",
          color: "green-text-gradient",
        },
        {
          name: " and Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.excellencehub.co.uk/",
    },
  

   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
