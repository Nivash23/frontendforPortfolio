import React, { useState } from 'react'
import img1 from '../src/assets/images/projectsimages/onlineshoppingimg.png';
import img2 from '../src/assets/images/projectsimages/Dictionaryimg.png';
import img3 from '../src/assets/images/projectsimages/Weatherimg.png';
import img4 from '../src/assets/images/projectsimages/CardsWebimg.png';
import img5 from '../src/assets/images/projectsimages/Restcountries.png';
import img6 from '../src/assets/images/projectsimages/PettycashManager.png';
import Cards from './Cards';


function Projects() {
  const [projectlist, setProjectlist] = useState([]);
  const allprojects = [
    {
      ProjectName: "Online Shopping",
      Implementation: "ReactJS , CSS",
      imagesrc: img1,
      category: "Frontend",
      codecheck: "https://github.com/Nivash23/ShoppingCart",
      livecheck:"https://courageous-basbousa-962eb0.netlify.app"
      
    },
    {
      ProjectName: "Dictionary",
      Implementation: "HTML ,CSS ,JavaScript",
      imagesrc: img2,
      category: "Frontend",
      codecheckd: "https://github.com/Nivash23/Dictionaryapp",
      livecheck:"https://poetic-lolly-0ef6c9.netlify.app"

      
    },
    {
      ProjectName: "Weather",
      Implementation: "HTML ,CSS , JavaScript",
      imagesrc: img3,
      category: "Frontend",
      codecheck: "https://github.com/Nivash23/WeatherApp",
      livecheck:"https://friendly-sable-67a901.netlify.app"

    },
    {
      ProjectName: "CardsWebsite",
      Implementation: "ReactJS , CSS",
      imagesrc: img4,
      category: "Frontend",
      codecheck: "https://github.com/Nivash23/cardwebsite",
      livecheck:"https://marvelous-torte-0e97e9.netlify.app/"
    },
    {
      ProjectName: "RestCountries",
      Implementation: "HTML,CSS,JavaScript",
      imagesrc: img5,
      category: "Frontend",
      codecheck: "https://github.com/Nivash23/restCountriesApItask",
      livecheck:"https://lucent-khapse-f40b8f.netlify.app"
    },
    {
      ProjectName: "PettyCash Manager",
      Implementation: "ReactJS,CSS,ExpressJS,MongoDB",
      imagesrc: img6,
      category: "Frontend & Backend",
      codecheck: "https://github.com/Nivash23/frontendforcapstone",
      livecheck: "https://stunning-llama-3fa012.netlify.app",
      Recomendation:"kindly open in chrome"
    }

  ]

  const all = () => {
    setProjectlist(allprojects);
  }
  const frontendprojects = () => {
    let dummyprojects = [];
    allprojects.map((projects, i) => {
      
      if (projects.category == "Frontend")
        {
          dummyprojects.push(projects)
        }
      }
    )
    setProjectlist(dummyprojects);
  }
  const frontendandbackendprojects = () => {
    let dummyprojects1 = [];
    allprojects.map((projects, i) => {
      
      if (projects.category == "Frontend & Backend")
        {
          dummyprojects1.push(projects)
        }
      }
    )
    setProjectlist(dummyprojects1);
  }



  return (
      <div id="projectcontainer">
          <h1>Projects</h1>
        <p>I have worked on a wide range of projects.Here are some of my Projects.</p>
       
      <table>
      
        <tbody>
          <tr>
            <td onClick={all}>ALL</td>
            <td onClick={frontendprojects}>Frontend</td>
            <td onClick={frontendandbackendprojects}>Frontend & Backend</td>

          </tr>
        </tbody>
      </table>
      <div id="projectlists">
        <div class="row">

              {
                projectlist.map((p, i) =>
                  <div class="col-md-3">
                    <Cards image={p.imagesrc} projectName={p.ProjectName} implementation={p.Implementation} Codecheck={p.codecheck} Livecheck={p.livecheck} recoment={p.Recomendation } />
                  </div>
                )
               }
        </div>
      </div>
    </div>
  )
}

export default Projects