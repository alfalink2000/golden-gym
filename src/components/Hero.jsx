export default function Hero() {
  const heroImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBGPpQYOJlUKCHicKH_2EJvEdko8ZX5jiqtm9be7zt5KfEG-D2GUpUTRtqKZZS4NeKJAzRk3crsBBS-rJdMqX5hXP0xIpDaxonpeNTeIRBi08f5vR4JrwJx3CtDhxwCEew8FrmA1TGLvDfH9xMo6a0EaTcAV8R_IzybWv3G35dAu8DIcCHAqAVFcs179CaUklI5v7FoINzb34HEO46c1uhASby9L5vo8lZIZICxfLZo1JeBknKmRdQf'

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 pb-16 px-5 md:px-16 overflow-hidden"
      id="inicio"
    >
      {/* Background Image */}
      <img
        src={heroImageUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto text-center flex flex-col items-center">
        <span className="text-label-sm text-primary-container uppercase tracking-[0.2em] mb-4 bg-surface-container/50 px-4 py-2 border border-outline-variant/30 glass-card font-medium">
          Gimnasio Premium en CDMX
        </span>
        <h1 className="text-[40px] leading-[44px] md:text-[64px] md:leading-[72px] font-display font-extrabold text-primary mb-6 max-w-4xl tracking-[-0.02em]">
          Golden Gym - <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-tertiary-fixed-dim">
            Tu Mejor Versión
          </span>
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mb-10 font-normal">
          Entrenamiento profesional con los mejores instructores de México. Un
          ambiente de exclusividad, disciplina y resultados reales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="btn-primary text-label-lg font-semibold px-8 py-4 uppercase tracking-widest flex items-center justify-center gap-2"
          >
            Únete Ahora{' '}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a
            href="#servicios"
            className="btn-secondary text-label-lg font-semibold px-8 py-4 uppercase tracking-widest flex items-center justify-center"
          >
            Explorar Servicios
          </a>
        </div>
      </div>
    </section>
  )
}
