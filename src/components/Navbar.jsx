import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-outline-variant/30 ${
          scrolled ? 'bg-background/95 backdrop-blur-xl' : 'bg-background/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-5 md:px-16 h-16">
          <a href="#" className="flex items-center gap-2">
            <img
              alt="Golden Gym Logo"
              className="h-10 w-10 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUhr1tS8JrYHP83wpStO6iYpoptFuqIde4Dg3lD5Wjxb3ozmJqVRfweIcXRC4exT51nDVmKEPgQq6_snumz5y0CiCbXiEjbi4DB8I55O84L3xRSW7c-_h8huC3rpM5_p0JzxtZi6gat7iN3iTo8srNOiaVhLmi16HWfe9vcm00QiRQEy-QCcwRgUreb-_ITokkma8oxcilCoWbdmm7l_ojxuOOOaXVoO2qaGmzNCXUZa85Fb53I8ih"
            />
            <span className="font-display text-headline-md font-extrabold text-primary tracking-tighter hidden sm:block">
              Golden Gym
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-label-lg font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-300 px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="btn-primary text-label-lg font-semibold px-6 py-2.5 uppercase tracking-widest hidden md:inline-block hover:scale-95 duration-200"
          >
            Únete
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-primary p-2"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 text-primary p-2"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-display text-headline-lg text-on-surface-variant hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={() => setMobileOpen(false)}
          className="btn-primary text-label-lg font-semibold px-8 py-4 uppercase tracking-widest mt-4"
        >
          Únete Ahora
        </a>
      </div>
    </>
  )
}
