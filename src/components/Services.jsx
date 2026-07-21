export default function Services() {
  return (
    <section
      className="py-24 px-5 md:px-16 bg-background"
      id="servicios"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg font-display font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Instalaciones de primer nivel y programas diseñados para resultados
            reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          {/* Bento 1 - Entrenamiento Personalizado */}
          <div className="md:col-span-2 md:row-span-1 glass-card p-8 relative overflow-hidden group gold-glow">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBf5NBbX_xn70zsBPNkryAsoHFxT1SdGNURYA_6em0Nq2-QwkNBOu4O_pv2L_Q3gcnQj1DI33ESVtCOPuXKvZeA_d8NXujyyVoP5ffdWTDy-h5eYD6iAK40yeZqf7Ud5MdCjheRDF9vFdB_Dj3UUQHWsR17LNrvBvqVN_hcXmiCppEHAUxzL9nKJ041wjT9bUgqEnGX3CYEzoX2dPfJhyzdVPmxLldBRnnoqAM6wlRTDS8aNNiyusIJ')`,
              }}
            />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4">
                fitness_center
              </span>
              <h3 className="text-headline-md font-display font-bold text-primary mb-2">
                Entrenamiento Personalizado
              </h3>
              <p className="text-body-md text-on-surface-variant max-w-md">
                Atención uno a uno para maximizar tu rendimiento y evitar
                lesiones.
              </p>
            </div>
          </div>

          {/* Bento 2 - Rutinas para Todos */}
          <div className="glass-card p-8 relative overflow-hidden group gold-glow flex flex-col justify-center">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">
              checklist
            </span>
            <h3 className="text-headline-md font-display font-bold text-primary mb-2">
              Rutinas para Todos
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Desde principiantes hasta atletas avanzados.
            </p>
          </div>

          {/* Bento 3 - Exclusivo Mujeres */}
          <div className="glass-card p-8 relative overflow-hidden group gold-glow flex flex-col justify-center border-l-4 border-l-primary-container">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-4">
              person_female
            </span>
            <h3 className="text-headline-md font-display font-bold text-primary mb-2">
              Exclusivo Mujeres
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Programas especializados enfocados en las necesidades femeninas.
            </p>
          </div>

          {/* Bento 4 - Asesoría Nutricional */}
          <div className="md:col-span-2 glass-card p-8 relative overflow-hidden group gold-glow flex items-center justify-between">
            <div>
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4">
                restaurant
              </span>
              <h3 className="text-headline-md font-display font-bold text-primary mb-2">
                Asesoría Nutricional
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Complementa tu esfuerzo en el gimnasio con un plan de
                alimentación adecuado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
