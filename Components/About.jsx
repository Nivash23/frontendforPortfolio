import React from 'react'
import '../style/index.css'

function About() {
  return (
    <div id='About'>
      <div id="abt">

        <div id="name" >I am </div>
        <div class="name1">NIVASH R</div>
        <div id="role">I am a Passionate </div>
        <div class="role1">Web Developer</div>

        <p> A highly motivated and hardworking individual looking for a responsible role in a
          reputable organization.</p>
        <button id="Resumebtn" type="submit" onClick={()=>{window.location.href="https://guileless-cupcake-ea52b8.netlify.app/"}}>Check Resume</button>
      </div>
        <div>

         <img id="profile" src="../src/assets/images/profilephoto.jpg" alt="" />
        </div>
    </div>
  )
}


export default About