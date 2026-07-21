import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    e.target.reset()
  }

  return (
    <section
      className="py-24 px-5 md:px-16 bg-background"
      id="contacto"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg font-display font-bold text-primary mb-4">
            Únete a Golden Gym
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Da el primer paso hacia tu mejor versión. Contáctanos hoy.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-label-lg text-primary uppercase tracking-widest block mb-2 font-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border border-outline-variant/50 px-4 py-3 text-on-surface font-body focus:border-primary focus:border-b-2 focus:outline-none transition-all duration-300"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div>
                <label className="text-label-lg text-primary uppercase tracking-widest block mb-2 font-semibold">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border border-outline-variant/50 px-4 py-3 text-on-surface font-body focus:border-primary focus:border-b-2 focus:outline-none transition-all duration-300"
                  placeholder="+52 55 0000 0000"
                />
              </div>
            </div>

            <div>
              <label className="text-label-lg text-primary uppercase tracking-widest block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border border-outline-variant/50 px-4 py-3 text-on-surface font-body focus:border-primary focus:border-b-2 focus:outline-none transition-all duration-300"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="text-label-lg text-primary uppercase tracking-widest block mb-2 font-semibold">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border border-outline-variant/50 px-4 py-3 text-on-surface font-body focus:border-primary focus:border-b-2 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Cuéntanos sobre tus objetivos de fitness..."
              />
            </div>

            <button
              type="submit"
              className="btn-primary text-label-lg font-semibold px-8 py-4 uppercase tracking-widest w-full flex items-center justify-center gap-2 hover:scale-[0.98] duration-200"
            >
              {submitted ? (
                <>
                  ¡Mensaje Enviado!{' '}
                  <span className="material-symbols-outlined">check_circle</span>
                </>
              ) : (
                <>
                  Enviar Mensaje{' '}
                  <span className="material-symbols-outlined">send</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
