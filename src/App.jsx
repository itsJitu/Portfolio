import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './img-1.jpg';
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav id="nav" className="bg-gray-400 text-white flex place-content-center gap-15 w-full p-5 shadow-2xl top-0">
        <a href='#about'>About</a>
        <a href='#Certificate'>Certificate</a>
        <a href='#projects'>Project</a>
        <a href='#More'>More</a>
        <a href='#Contact'>Contact</a>
      </nav>

      <div id="about" className='flex p-15 gap-3 '>
        <div className=''>
        <img src={Image} className="w-100 rounded-xl"/>
        </div>

        <div className="p-5">
        <h1 className='text-3xl'> Diwakar Kumar</h1>
        <p>Full Stack Web Devloper</p>
        <br></br>
        <br></br>

        <p className="flex gap-1"><BiLogoGmail className="text-2xl text-red-500" />  diwakarkumar9451@gmail.com</p>

        <br></br>
        

        <p className='flex gap-1'><MdOutlinePhoneCallback className='text-2xl text-blue-400'/> +91 62021-24896</p>
        <br></br>
        <br></br>

        <p className='flex gap-2'><FaLocationDot  className='text-2xl text-green-500'/>
        Patna Bihar</p>
        <br></br>
        <br></br>

        <a href="https://www.linkedin.com/in/diwakar-kumar-746030166/" className='flex gap-2'>
        <FaLinkedin  className='text-2xl text-blue-800'/> <p className="underline text-blue-500">Linkedin</p>
        </a>
<br></br>

        <a href="https://github.com/itsJitu" className='flex gap-2'><FaGithubSquare  className='text-2xl'/>

        <p className="underline text-blue-500"> gitHub</p></a>
        </div>
      </div>

      <div className="relative pl-25 pr-35 mt-[-2%]">
      <h1 className='text-2xl font-bold text-red-500'>About</h1>
      <p className=''>Software developer skilled in designing and delivering scalable solutions using HTML5, CSS, Tailwind, JavaScript, MySql and PHP. Passionate about problem-solving, collaboration, and building user-focused, high-performance applications.</p>
      </div>

      <div id="Certificate" className='bg-gray-100 p-15 mt-10'>
        <h1 className='text-2xl font-bold text-red-500'>Certificate</h1>
        <br></br>
        <h1 className='text-xl font-bold'>Full Stack Web Developer</h1>
        <p className=''>Perusing from "Geekster"</p>
        <br></br>

        <div className='flex gap-5 justify-between p-5'>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg '><div className='place-content-center flex'><FaJava className="text-5xl flex text-blue-400 place-content-center "/> </div><p className='place-content-center font-semibold flex '> java </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg '><div 
        className='place-content-center flex'><FaHtml5 className="text-5xl flex text-purple-400 place-content-center "/> </div><p className='place-content-center font-semibold flex '> html </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg '><div className='place-content-center flex'><IoLogoCss3 className="text-5xl flex text-yellow-500 place-content-center "/> </div><p className='place-content-center font-semibold flex '> CSS </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg '><div className='place-content-center flex'><TbBrandJavascript className="text-5xl flex text-red-500 place-content-center "/> </div><p className='place-content-center font-semibold flex '> JavaScript </p>
        </div>

        
        </div>
        
        <div className='flex gap-5 justify-between p-5'>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg '><div className='place-content-center flex'><BiLogoTypescript className="text-5xl flex text-blue-400 place-content-center "/> </div><p className='place-content-center font-semibold flex '> TypeScript </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg '><div 
        className='place-content-center flex'><FaReact className="text-5xl flex text-rose-400 place-content-center "/> </div><p className='place-content-center font-semibold flex '> React </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg '><div className='place-content-center flex'><FaGitAlt className="text-5xl flex text-yellow-500 place-content-center "/> </div><p className='place-content-center font-semibold flex '> Git </p>
        </div>

        <div className='align-content: space-between border-2 border-solid w-30 h-30 place-content-center rounded-lg '><div className='place-content-center flex'><RiTailwindCssFill className="text-5xl flex text-red-500 place-content-center "/> </div><p className='place-content-center font-semibold flex '> Tailwind </p>
        </div>
        
        </div>
      </div>

      <div id="projects" className='p-15 mt-10'>
        <h1 className='text-2xl font-bold text-red-500'>Projects</h1>
        <br></br>
        <h1 className='text-xl font-bold'>Expense Tracker</h1>
        <p className=''>A responsive web application that helps users track and manage their daily expenses with full CRUD operations—add, view, edit, and delete expense entries. It features interactive charts using Chart.js to visualize spending patterns by category and time. Built using HTML, CSS, JavaScript, and Chart.js, with optional backend support via Node.js.</p>
        <br></br>

        <h1 className='text-xl font-bold'>Pokemon-Card</h1>
        
        <p className=''>The Pokémon Collection Card project is a dynamic web application that allows users to browse and view Pokémon cards using Api. Each card displays essential Pokémon data like name, image, type, abilities, and more. The project is built using HTML, CSS, JavaScript, and styled with Tailwind CSS to ensure a clean, responsive, and modern UI.</p>

        <br></br>

        <h1 className='text-xl font-bold'>Book Club Discussion Platform</h1>
        <p className=''>Built a web application using Django, Angular, and PostgreSQL with a RESTful API, enabling users to create book discussion threads, post comments, and rate books. Includes CRUD operations and chart visualizations for tracking popular books, discussion frequency, and user engagement.</p>

      </div>

      <div id="More" className='bg-gray-100 p-15 mt-10'>
        <h1 className='text-2xl font-bold text-red-500'>Skills</h1>
        <br></br>
        <br></br>
        <p className=''><b>IDE </b> : -
           VSCode
           <br></br>
           <br></br>

           <b>Language</b> : -
           HTML5, CSS, javascript, Typescript, SQL
<br></br>
<br></br>
           <b>Framework</b> : -
           TailwindCSS, React
<br></br>
<br></br>
            <b>Databases</b> : -
           SQL, Mysql
<br></br>
<br></br>
          <b>  Version Control</b> : -
            Git
<br></br>
<br></br>
           <b>Other Skills</b> : -

           Java, DSA, Python, MERN, Figma, Bootstrap, Nord.js</p>
      </div>

      <div id="Contact" className='p-15 mt-10'>
        <div className='place-content-center text-center'>
        <h1 className='text-2xl font-bold text-red-500'>Contacts</h1>

        <br></br>

        <div className='place-content-center text-center flex gap-3'>
        
        </div>
<br></br>
<div className='flex place-content-center gap-3 text-3xl'>

<a href="mailto:diwakarkumar9451@gmail.com" className=''> <BiLogoGmail  className='text-3xl text-red-500'/> </a>

<a href="tel:+91620124896" className=''><MdOutlinePhoneCallback className='text-3xl text-blue-500'/></a>

        <a href="https://vercel.com/diwakar-kumars-projects-85d19e46" className=''><IoLogoVercel className=''/>
        </a>
        <a href="https://www.linkedin.com/in/diwakar-kumar-746030166/" className='text-3xl text-blue-800'><FaLinkedin /></a>

        <a href="https://github.com/itsJitu" className=''><FaGithubSquare /></a>

        <a href="https://www.instagram.com/diwakarkr9451/" className='text-rose-600'><FaInstagramSquare />
        </a>

        <a href="https://api.whatsapp.com/send?phone=916202124896" className='text-green-500'><FaWhatsappSquare />
        </a>
        </div>
        </div>
      </div>

      <div>
        <p className='flex place-content-center mb-5 '><MdOutlineCopyright className='text-2xl'/>
        2025 Diwakar. All right reserved</p>
      </div>
    </>
  )
}

export default App
