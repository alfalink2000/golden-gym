const features = [
  {
    icon: 'my_target',
    title: '100% Personalizado',
    desc: 'Rutinas diseñadas específicamente para tus objetivos.',
  },
  {
    icon: 'girl',
    title: 'Especial Mujeres',
    desc: 'Programas y zonas dedicadas para entrenamiento seguro.',
  },
  {
    icon: 'group',
    title: 'Ambiente Familiar',
    desc: 'Una comunidad que motiva y respeta a cada miembro.',
  },
]

export default function About() {
  return (
    <section
      className="py-24 px-5 md:px-16 bg-surface-container-low relative"
      id="nosotros"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2">
            <div className="w-12 h-px bg-primary-container" />
            <span className="text-label-sm text-primary-container uppercase tracking-widest font-medium">
              Sobre Nosotros
            </span>
          </div>
          <h2 className="text-headline-lg font-display font-bold text-primary">
            Más de 35 años de experiencia forjando campeones.
          </h2>
          <p className="text-body-md text-on-surface-variant">
            En Golden Gym no solo levantamos pesas, construimos disciplina. Bajo
            la guía de nuestro experto entrenador, Mr. México 1987 absoluto,
            ofrecemos una experiencia de entrenamiento sin paralelos en un
            ambiente que respira excelencia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-outline-variant/30">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-card p-6 gold-glow transition-all duration-300"
              >
                <span className={`material-symbols-outlined filled text-primary-container mb-4 text-3xl`}>
                  {f.icon}
                </span>
                <h3 className="text-label-lg font-semibold text-primary mb-2 uppercase tracking-widest">
                  {f.title}
                </h3>
                <p className="text-body-md text-on-surface-variant text-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full glass-card p-2 overflow-hidden">
          <img
            className="w-full h-full object-cover filter grayscale contrast-125"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEOj3LepWxo_ECyYqEHKMdZ91EY0sFzGMuWoL1mHOTajbSaaTw_TIhXVz5KNvsOBdiorBC08uz_YPwQCsAnRMlMbIL4PgSc1kJEWlcyCqU20fVKAhJmVktE4nEXiQEW0yCoraa5DdBfLBvJtlyC5KDEY8_zFvbePxKItaxOnYArez6oTZgazPXJknIQqSgP7HJIpZklVcAoZVd4jYz993DIYug8TbiR6BAJqrTQFtnzQxcPqxqqyug"
            alt="Entrenador Principal - Mr. México 1987"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-background/90 backdrop-blur-md border border-outline-variant/50 p-3 sm:p-4">
            <p className="text-label-sm sm:text-label-lg text-primary-container uppercase tracking-widest mb-1 font-semibold">
              Entrenador Principal
            </p>
            <p className="text-headline-md font-display font-bold text-primary">
              Mr. México 1987 Absoluto
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
