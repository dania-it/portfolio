import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Years of learning', value: 2, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Projects built', value: 3, suffix: '' },
  { label: 'Passion', value: 100, suffix: '%' },
]

const interests = [
  'Clean component architecture',
  'Accessible UI',
  'UX & interaction design',
  'Form validation',
  'Arabic RTL interfaces',
  'Debugging with patience',
  'Always learning',
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const duration = 1200
        const start = performance.now()

        const tick = (now) => {
          const progress = Math.min(
            (now - start) / duration,
            1
          )

          const easedProgress =
            1 - Math.pow(1 - progress, 3)

          setCount(
            Math.round(value * easedProgress)
          )

          if (progress < 1) {
            requestAnimationFrame(tick)
          }
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      {
        threshold: 0.4,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [value])

  return (
    <span
      ref={ref}
      className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl"
    >
      {count}
      {suffix}
    </span>
  )
}

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-28"
    >

      <div className="mx-auto max-w-3xl text-center">

        <p className="font-mono text-sm uppercase tracking-[0.25em] text-secondary">
          About me
        </p>

        <h2 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-text sm:text-6xl lg:text-7xl">
          Who{' '}
          <span className="text-gradient">
            I am
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          I'm a junior front-end developer who enjoys
          turning ideas into clean, responsive, and
          interactive web experiences.
        </p>

      </div>



      <div className="mt-16 grid grid-cols-2 border-y border-border sm:grid-cols-4">

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              group px-5 py-8 text-center
              transition-colors hover:bg-surface-soft
              sm:py-10
              ${index !== 0 ? 'border-l border-border' : ''}
              ${index === 2 ? 'max-sm:border-t' : ''}
              ${index === 3 ? 'max-sm:border-t' : ''}
            `}
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
            />

            <p className="mt-2 text-xs text-muted sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}

      </div>


      <div className="mx-auto mt-16 max-w-3xl">

        <div className="space-y-5 text-[15px] leading-7 text-muted sm:text-base">

          <p>
            I got into front-end development because I like the
            moment something on screen finally works the way you
            pictured it — that's still my favorite part of the job.
          </p>

          <p>
            Most of what I know now came from building real
            things: a job board, a bilingual hadith archive, a
            quiz app — each one taught me something the tutorials
            didn't. I'm early in my career, but I show up, dig
            into problems, and finish what I start.
          </p>

          <p>
            I also have a background in UX and interaction design,
            which shapes how I build: I try to apply user-centered
            principles and clear interaction patterns to every
            layout, not just make it look right.
          </p>

        </div>

      </div>


      <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">

        {interests.map((item) => (
          <span
            key={item}
            className="
              cursor-default rounded-full
              border border-border
              bg-surface
              px-4 py-2
              text-xs text-muted
              transition-all duration-300
              hover:border-primary
              hover:bg-surface-soft
              hover:text-text
            "
          >
            {item}
          </span>
        ))}

      </div>

    </section>
  )
}

export default About