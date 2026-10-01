
import { useEffect, useState } from 'react'
import profileImg from '..//assets/projects/logo1.jpg';
const roles = [
  'Front-End Developer',
  'React Developer',
  'UI Builder',
]

function useTypedText(
  words,
  {
    typingSpeed = 90,
    deletingSpeed = 45,
    pause = 1400,
  } = {}
) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting
            ? current.slice(0, t.length - 1)
            : current.slice(0, t.length + 1)
        )
      }, deleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [
    text,
    deleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pause,
  ])

  return text
}

function Hero() {
  const typed = useTypedText(roles)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-60 md:pt-28"
    >

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2 md:gap-20">


        <div className="text-center md:text-left">

          <span
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            Open to junior roles & freelance work
          </span>

          <h1
            className="animate-rise mt-7 text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '100ms' }}
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              Dania Ibesh
            </span>
          </h1>

          <p
            translate="no"
            className="notranslate animate-rise mt-5 h-8 font-mono text-lg text-secondary sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            {typed}
            <span className="cursor-blink">|</span>
          </p>

          <p
            className="animate-rise mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-base"
            style={{ animationDelay: '220ms' }}
          >
            I build responsive, interactive web apps with React and
            Tailwind CSS — from reusable component libraries to full
            login, dashboard, and search experiences.
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
            style={{ animationDelay: '280ms' }}
          >

            <button
              onClick={() => scrollTo('projects')}
              className="cursor-pointer rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105"
            >
              View my work
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="cursor-pointer rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-all hover:border-primary hover:text-primary"
            >
              Get in touch
            </button>

          </div>
        </div>

<div className="relative flex items-center justify-center md:justify-end">

  <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-primary/20 blur-3xl md:h-96 md:w-96" />

  <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
    <img
src={profileImg}
      alt="Dania Ibesh"
      className="h-full w-full object-cover"
    />
  </div>

</div>

      </div>
    </section>
  )
}

export default Hero

