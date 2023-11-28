import React from 'react'
import {useFetchProjects} from './fetchProjects';

const Projects = () => {
    const {loading, projects} = useFetchProjects();
    console.log(loading,projects);

    if(loading){
      return <section className='projects'>
        <h2>Loading...</h2>
      </section>
    }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects title</h2>
        <div className="title-underline">
        </div>
        <div className="projects-center">
          {
            projects.map((project: { id: any; img: any; url: any; title: any; }) => {
              const {id,img,url,title} = project
              return <a key={id} href={url} target='_blank' className='project'>
                <img src={img} alt={title} className='img' />
                <h5>{title}</h5>
              </a>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects