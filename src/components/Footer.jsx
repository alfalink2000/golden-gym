const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="w-full py-6 px-5 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-6 bg-surface-container-lowest border-t border-outline-variant">
      <div className="col-span-1">
        <span className="font-display text-headline-lg font-bold text-primary">
          Golden Gym
        </span>
        <p className="mt-4 text-body-md text-secondary">
          Tu Mejor Versión. Entrena con los mejores.
        </p>
      </div>

      <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-8 justify-center">
        {footerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-body-md text-secondary hover:text-primary hover:opacity-80 transition-all duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="col-span-1 text-left md:text-right">
        <p className="text-body-md text-primary">
          © 2024 Golden Gym Mexico City. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
