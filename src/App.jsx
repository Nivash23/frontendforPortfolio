import React, { useState } from 'react'
import '../style/index.css'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Education from '../Components/Education'
import Contact from '../Components/Contact'

function App() {
  const [liststate, setListstate] = useState('not');
  return (
    <div id='container'>
      <div id='navigationbar'>
        <div id='menu'>
          <div id="user"></div>
          <div> Portfolio</div>
        </div>
        <div id='list'>
          <div id="abtbtn"  onClick={()=>{window.scrollBy(0,10)}}>About</div>
          <div id="sklbtn" onClick={()=>{window.scrollBy(170,400)}}>Skills</div>
          <div id="prtsbtn" onClick={()=>{window.scrollBy(600,1000)}}>Projects</div>
          <div id="edubtn" onClick={() => {window.scrollBy(0,1750)}} >Education</div>
        </div>
        {/* <div id="sign">Sign in</div> */}
        <div id="menulist">
   
            
          
        <button id="sign">Sign in</button>
          <div id="listofoptions" className={liststate} onClick={() => {
            if (liststate == "active")
            {
              setListstate('not')
            }
            else {
              setListstate('active')
              }
              
          }}  >menu
            


            <ul id="listofmenus">
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Education</li>
          </ul>

          </div>
        </div>
        

      </div>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact/>
    </div>

  )
}

export default App