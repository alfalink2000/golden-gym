export default function Location() {
  return (
    <section
      className="py-24 px-5 md:px-16 bg-surface-container-low"
      id="ubicacion"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg font-display font-bold text-primary mb-4">
            Encuéntranos
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Visítanos en el corazón de la Ciudad de México.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container text-2xl mt-1">
                  location_on
                </span>
                <div>
                  <h3 className="text-label-lg text-primary uppercase tracking-widest mb-1 font-semibold">
                    Dirección
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    Av. Insurgentes Sur 1234
                    <br />
                    Col. Del Valle, CDMX 03100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container text-2xl mt-1">
                  schedule
                </span>
                <div>
                  <h3 className="text-label-lg text-primary uppercase tracking-widest mb-1 font-semibold">
                    Horario
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    Lunes a Viernes: 6:00 AM - 10:00 PM
                    <br />
                    Sábados: 7:00 AM - 8:00 PM
                    <br />
                    Domingos: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container text-2xl mt-1">
                  call
                </span>
                <div>
                  <h3 className="text-label-lg text-primary uppercase tracking-widest mb-1 font-semibold">
                    Contacto
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    +52 55 1007 0605
                    <br />
                    info@goldengym.mx
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded overflow-hidden border border-outline-variant/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5!2d-99.17!3d19.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIyJzQ4LjAiTiA5OcKwMTAnMTIuMCJX!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(1) invert(1) brightness(0.6) contrast(1.2)',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Golden Gym"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
