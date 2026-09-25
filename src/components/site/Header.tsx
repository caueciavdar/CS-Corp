import { useState } from 'react'

const navigation = [
  ['Home', '#home'],
  ['Services', '#divisions'],
  ['About', '#why-choose'],
  ['Projects', '#our-work'],
  ['Contact', '#contact'],
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-logo" href="#home" aria-label="CS Conexion Services Corp home">
          <span className="site-logo__mark">CS</span>
          <span className="site-logo__name">CS Conexion<br />Services Corp</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Open'} menu</span>
          <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <nav id="primary-navigation" className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="button button--primary site-nav__cta" href="#contact" onClick={() => setMenuOpen(false)}>Get a Free Estimate</a>
        </nav>
      </div>
    </header>
  )
}
