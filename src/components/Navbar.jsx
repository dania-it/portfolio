import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light') {
      document.documentElement.classList.add('light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.remove('light')
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement

    if (html.classList.contains('light')) {
      html.classList.remove('light')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    } else {
      html.classList.add('light')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    }
  }

  const handleClick = (id) => {
    setOpen(false)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <button
          onClick={() => handleClick('hero')}
className="cursor-pointer font-mono text-xl font-semibold transition-opacity hover:opacity-80"        >
          <span className="text-gradient">
            &lt;Dania.Ib/&gt;
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`nav-link cursor-pointer rounded-md px-4 py-2 text-sm text-muted ${
                  active === link.id ? 'nav-link-active' : ''
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">

          <button
            onClick={toggleTheme}
            className="theme-toggle flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-text transition-all"
            aria-label="Toggle theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="flex cursor-pointer flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`h-px w-6 bg-text transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />

            <span
              className={`h-px w-6 bg-text transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`h-px w-6 bg-text transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>

        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`nav-link w-full cursor-pointer py-2 text-left text-sm text-muted ${
                  active === link.id ? 'nav-link-active' : ''
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar