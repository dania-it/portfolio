import { useEffect, useRef, useState } from 'react'

const groups = [
  {
    label: 'Frontend',
    description: 'Markup, styling, and the JavaScript that ties it together.',
    bars: [
      { name: 'HTML5', level: 93 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 70 },
      { name: 'React.js', level: 70 },
    ],
  },
  {
    label: 'React & Libraries',
    description: 'Structuring real apps: routing, forms, and validation.',
    bars: [
      { name: 'Tailwind CSS', level: 73 },
      { name: 'React Router', level: 70 },
      { name: 'React Hook Form', level: 70 },
      { name: 'Zod', level: 80 },
    ],
  },
  {
    label: 'Backend & Tools',
    description: 'The data layer and workflow tools around the UI.',
    bars: [
      { name: 'SQL', level: 68 },
      { name: 'C#', level: 65 },
      { name: 'Git', level: 78 },
      { name: 'GitHub', level: 80 },
    ],
  },
]

function Bar({ name, level }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setWidth(level)
        observer.disconnect()
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-text">
          {name}
        </span>

        <span className="font-mono text-xs text-muted">
          {level}%
        </span>
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-soft">
        <div
          className="h-full rounded-full bg-gradient-brand transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-surface/40 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-secondary">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-text sm:text-6xl lg:text-7xl">
            My{' '}
            <span className="text-gradient">
              toolkit
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            The languages, frameworks, and tools behind every
            project below.
          </p>
        </div>

        {/* Skills Groups */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.label}
              className="
                glow-card
                group
                relative
                rounded-2xl
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <span className="glow-border" />

              <div
                className="
                  relative z-10 m-[1px]
                  rounded-[15px]
                  border border-border
                  bg-surface
                  p-6
                "
              >
                <div>
                  <h3 className="text-lg font-semibold text-text">
                    {group.label}
                  </h3>

                  <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-muted">
                    {group.description}
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  {group.bars.map((bar) => (
                    <Bar
                      key={bar.name}
                      name={bar.name}
                      level={bar.level}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills