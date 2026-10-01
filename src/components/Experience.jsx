const timeline = [
  {
    when: '2026',
    title: 'Front-End Web Development Training',
    org: 'Al-Baraka Association',
tags: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React.js', 'Node.js Basics'],
    detail:
      'Practical training in modern front-end development, including responsive interfaces, React applications, and basic Node.js usage, along with professional work ethics.',
  },
{
  when: '2026',
  title: 'UX & Interaction Design Track',
  org: 'Edraak',
  tags: ['UX Design', 'UX Research', 'Interaction Design'],
  detail:
    'Completed training in UX design, UX research, and interaction design, and applied user-centered principles and interaction patterns to front-end layouts.',
},
  {
    when: 'Jan 2026',
    title: 'Graduated — Technical Institute for Computer Science',
    org: 'Syrian Virtual University, Damascus',
    tags: ['Computer Science'],
    detail:
      'Completed technical studies in computer science with a focus on software development and programming fundamentals.',
  }


]

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-28"
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-secondary">
            Journey
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-text sm:text-6xl lg:text-7xl">
            My{' '}
            <span className="text-gradient">
              journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A timeline of my education, training, and
            continuous growth in web development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div
            className="
              absolute
              left-[18px]
              top-2
              bottom-2
              w-px
              bg-gradient-to-b
              from-primary
              via-secondary/50
              to-border
              md:left-[110px]
            "
          />

          <div className="space-y-12">

            {timeline.map((item, index) => (
              <article
                key={item.title}
                className="
                  group
                  relative
                  grid
                  gap-6
                  md:grid-cols-[90px_1fr]
                  md:gap-10
                "
              >

                {/* Date */}
                <div
                  className="
                    pl-12
                    md:pl-0
                    md:pt-5
                    md:text-right
                  "
                >
                  <span
                    className="
                      font-mono
                      text-sm
                      font-medium
                      text-secondary
                    "
                  >
                    {item.when}
                  </span>
                </div>

                {/* Timeline Point */}
                <div
                  className="
                    absolute
                    left-[9px]
                    top-5
                    flex
                    h-[19px]
                    w-[19px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-primary
                    bg-bg
                    shadow-[0_0_15px_rgba(124,58,237,0.45)]
                    md:left-[101px]
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-gradient-brand
                    "
                  />
                </div>

                {/* Content Card */}
                <div
className="glow-card relative rounded-2xl"                >
                  <span className="glow-border" />

                  <div
                    className="
                      relative z-10
                      rounded-[15px]
                      border
                      border-border
                      bg-surface
                      p-6
                      transition-colors
                      duration-300
                      group-hover:bg-surface-soft
                      sm:p-7
                    "
                  >

                  {/* Title */}
                  <h3
                    className="
                      text-lg
                      font-semibold
                      leading-snug
                      text-text
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="mt-2 text-sm font-medium text-secondary">
                    {item.org}
                  </p>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      max-w-2xl
                      text-sm
                      leading-7
                      text-muted
                      sm:text-[15px]
                    "
                  >
                    {item.detail}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-border
                          bg-bg/40
                          px-3
                          py-1.5
                          text-[11px]
                          text-muted
                          transition-colors
                          duration-300
                          group-hover:border-primary/30
                          group-hover:text-text
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  </div>
                </div>
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience