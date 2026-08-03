import { useState } from 'react'
import projects from '../data/projects.js'
import ProjectFolder from './ProjectFolder.jsx'
import ProjectDetail from './ProjectDetail.jsx'

export default function ProjectArchive() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <section id="work" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold text-berry sm:text-4xl">
            my project archive
          </h2>
          <p className="mt-2 text-berry/70">three builds, three different problems — open a folder ↓</p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-10 sm:justify-start sm:gap-8">
          {projects.map((project, i) => (
            <ProjectFolder key={project.id} project={project} index={i} onOpen={setOpenProject} />
          ))}
        </div>
      </div>

      <ProjectDetail project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  )
}
