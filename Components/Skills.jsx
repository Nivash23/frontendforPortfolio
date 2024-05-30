import React from 'react'
import '../style/index.css'
import c from '../src/assets/images/skillsimages/c.png'
import java from '../src/assets/images/skillsimages/java.jpg'
import html from '../src/assets/images/skillsimages/html-logo.svg'
import css from '../src/assets/images/skillsimages/css logo.png'
import boot from '../src/assets/images/skillsimages/Bootstrap_logo.svg'
import js from '../src/assets/images/skillsimages/JavaScript-logo.png'
import react from '../src/assets/images/skillsimages/React.webp'
import mongodb from '../src/assets/images/skillsimages/mongodb.png'
import express from '../src/assets/images/skillsimages/expressjs.png'
import node from '../src/assets/images/skillsimages/node.png'
import git from '../src/assets/images/skillsimages/git.png'
import github from '../src/assets/images/skillsimages/github.webp'
import netlify from '../src/assets/images/skillsimages/netlify.png'
import render from '../src/assets/images/skillsimages/render.png'
import vite from '../public/vite.svg'
import vscode from '../src/assets/images/skillsimages/vscode.jpeg'
import devtool from '../src/assets/images/skillsimages/devtools.jpeg'

function Skills() {
  return (
      <div>
          <h1 id="skillhead">Skills</h1>
          <p id="skilldesc">Here are some of my skills on which I have learnt.</p>
          <div id="skills">
              
        <div id="skillslist">
          <h2>Frontend & Backend</h2>
              <div id="lstone">  
                <div><img src={c} alt="c"/>C</div>
                <div><img src={java} alt="java"/>Java</div>
                <div><img src={html} alt="HTML"/>HTML</div>
                <div><img src={css} alt="css"/>CSS</div>
              </div>
              <div id="lsttwo">
                  
                <div><img src={boot} alt="Bootstrap"/>BootStrap</div>
                <div><img src={js} alt="Javascript"/>JavaScript</div>
                <div><img src={react} alt="Reactjs"/>ReactJS</div>
              </div>
              <div id="lstthree">  
                <div><img src={mongodb} alt="MongoDB"/>MongoDB</div>
                <div><img src={express} alt="Expressjs"/>ExpressJS</div>
                <div><img src={node} alt="Nodejs"/>NodeJS</div>
              </div>
          </div>
        <div id="otherskills">
                 <h2>Others</h2>
                  <div id="other">
                      
                    <div><img src={git } />Git</div>
                    <div><img src={github}  /> Github</div>
                    <div><img src={netlify}  /> Netlify</div>
                  </div>
                  <div id="other1">
                      
                    <div><img src={render}  /> Render</div>
                    <div><img src={vite}  /> Vite</div>
                    
                  </div>
                  <div id="other2">
                    <div><img src={vscode}  /> VS Code</div>
                    <div><img src={devtool}  /> Chrome Dev tools</div>
                  </div>
           
          
               </div>
           </div>
    </div>
  )
}

export default Skills