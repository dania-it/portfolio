import img1 from '../assets/projects/img_1.PNG'
import img2 from '../assets/projects/img_2.PNG'
import img3 from '../assets/projects/img_3.PNG'

const projects = [
  {
    name: 'Artisans Job Board Platform',

    image: img1,

    stack: [
      'React.js',
      'Tailwind CSS',
      'JavaScript',
      'React Router',
      'Context',
      'React Hook Form',
      'Zod',
    ],

    summary:
      'A responsive platform that connects clients with skilled professionals. Built with reusable React components, registration and login interfaces for clients and professionals, and an admin dashboard for managing users and platform data. Uses React Router for navigation, Context for sharing data across components, and React Hook Form with Zod for validated forms.',

    demo: 'https://al-mualim-frontend.onrender.com',

    code: 'https://github.com/dania-it/Al-Mualim',
  },

  {
    name: 'Sahih al-Bukhari — Interactive Hadith Explorer',

    image: img2,

    stack: [
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'IndexedDB',
      'localStorage',
    ],

    summary:
      'A responsive bilingual (Arabic RTL / English LTR) explorer for 7,277 hadith records, with client-side filtering, pagination, chapter navigation, bookmarking, dark/light themes, and diacritics-insensitive Arabic search. Cut the initial load from 60+ seconds (a single 12MB JSON file) to a few seconds by splitting the data into progressively-loaded chunks, and added IndexedDB caching so repeat visits load instantly.',

    demo: 'https://dania-it.github.io/Sahih-al-Bukhari/',

    code: 'https://github.com/dania-it/Sahih-al-Bukhari',
  },

  {
    name: 'Interactive Q&A Page',

    image: img3,

    stack: [
      'React.js',
      'CSS',
    ],

    summary:
      'A lightweight, interactive quiz application built with React.js. Features reusable components for displaying questions and answers, light and dark mode, and a custom-styled interface.',

    demo: 'https://simple-quiz-en56.onrender.com/',

    code: 'https://github.com/dania-it/Simple-Quiz-App',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-secondary">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-text sm:text-6xl lg:text-7xl">
            My{' '}
            <span className="text-gradient">
              work
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A selection of projects I have built while developing
            my front-end skills and exploring modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.name}
              className="
                glow-card
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-border
                bg-surface
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >

              {/* Moving Border */}
              <span className="glow-border" />

              {/* Card Content */}
              <div
                className="
                  relative
                  z-10
                  m-[1px]
                  flex
                  flex-1
                  flex-col
                  overflow-hidden
                  rounded-[15px]
                  bg-surface
                "
              >

                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-surface-soft">

                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                    "
                  />

                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-6">

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          bg-primary/10
                          px-3
                          py-1
                          text-[11px]
                          text-primary
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3
                    className="
                      mt-5
                      text-lg
                      font-semibold
                      leading-snug
                      text-text
                    "
                  >
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p
                    className="
                      mt-3
                      flex-1
                      text-sm
                      leading-7
                      text-muted
                    "
                  >
                    {project.summary}
                  </p>

                  {/* Footer / Links */}
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      border-border
                      pt-5
                      text-sm
                      font-medium
                    "
                  >

                    {/* Live Demo */}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          cursor-pointer
                          items-center
                          gap-1.5
                          text-secondary
                          transition-colors
                          duration-300
                          hover:text-primary
                        "
                      >
                        <span>Live Demo</span>
                        <span className="text-base">↗</span>
                      </a>
                    ) : (
                      <span />
                    )}

                    {/* GitHub */}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} on GitHub`}
                        className="
                          flex
                          cursor-pointer
                          items-center
                          gap-1.5
                          text-muted
                          transition-colors
                          duration-300
                          hover:text-text
                        "
                      >
                        <i className="fa-brands fa-github text-base" />
                        <span>GitHub</span>
                      </a>
                    )}

                  </div>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects