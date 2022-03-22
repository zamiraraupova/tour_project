import React from 'react'
import './Style.css'

const Navbar = () => {
    const titleList=["ABOUT US", "FOR YOU", "SERVICES", "BLOG", "VLOG", "CONTACT"]
    // const href = ['about', 'foryou', 'services', 'blog', 'vlog', 'contacts']
  return (
    <div className='navbar-container'>
     <ul>
         {titleList.map((item)=> (<a href=''>{item}</a>))}
     </ul>
 
    </div>
  )
}

export default Navbar

//const list=[{link:"link", title:"title"}]

   {/* <ul>
            <li><a href=a'about'>About Us</a> </li>
            <li><a href='foryou'>For You </a> </li>
            <li><a href='services'>Services</a> </li>
            <li><a href='blog'>Blog</a> </li>
            <li><a href='vlog'>Vlog</a> </li>
            <li><a href='contact'>Contact</a> </li>
           

        </ul> */}