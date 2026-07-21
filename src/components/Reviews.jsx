const reviews = [
  {
    name: 'Jessica Ogazón',
    text: 'Excelente lugar, y tienen rutinas especiales para mujeres, su Instructor es Mr México 1987 absoluto. Excelente servicio.',
    rating: 5,
    time: 'Hace 2 años',
  },
  {
    name: 'Arturo Ramos',
    role: 'Local Guide',
    text: 'Un lugar altamente recomendable para quien inicia en el mundo de las pesas. Excelente ambiente y atención personalizada.',
    rating: 5,
    time: 'Hace 3 años',
  },
  {
    name: 'Angela Trejo',
    role: 'Local Guide',
    text: 'Excelente lugar, su entrenador es campeón de Mr. México absoluto 87, la mejor técnica y atención.',
    rating: 5,
    time: 'Hace 7 años',
  },
  {
    name: 'Carlos Mendoza',
    text: 'Entrenamiento 100% profesional, lo recomiendo ampliamente.',
    rating: 5,
    time: 'Hace 1 año',
  },
  {
    name: 'María López',
    text: 'Me gusta el profesor, muy buen instructor con muchísima experiencia.',
    rating: 5,
    time: 'Hace 8 meses',
  },
  {
    name: 'Roberto Sánchez',
    text: 'Excelente lugar, su entrenador es campeón de Mr. México. La mejor experiencia de entrenamiento que he tenido.',
    rating: 5,
    time: 'Hace 6 meses',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="material-symbols-outlined filled text-primary-container text-lg">
          star
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  const initials = review.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="glass-card p-6 gold-glow transition-all duration-300 flex flex-col gap-4">
      <StarRating count={review.rating} />

      <p className="text-body-md text-on-surface-variant flex-1 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/20">
        <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
          <span className="text-label-lg font-bold text-primary-container">
            {initials}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-label-lg font-semibold text-primary truncate">
            {review.name}
          </p>
          {review.role && (
            <p className="text-label-sm text-on-surface-variant">{review.role}</p>
          )}
        </div>
        <span className="ml-auto text-label-sm text-outline shrink-0">{review.time}</span>
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-24 bg-surface-container-low" id="resenas">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto mb-12">
        <div className="text-center">
          <h2 className="text-headline-lg font-display font-bold text-primary mb-4">
            Lo Que Dicen Nuestros Miembros
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Reseñas reales de quienes ya entrenan con nosotros.
          </p>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>

      {/* Google Rating Badge */}
      <div className="flex justify-center mt-10">
        <div className="glass-card px-6 py-3 flex items-center gap-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div>
            <p className="text-label-lg font-semibold text-primary">4.8 / 5</p>
            <p className="text-label-sm text-on-surface-variant">Basado en reseñas de Google</p>
          </div>
        </div>
      </div>
    </section>
  )
}
