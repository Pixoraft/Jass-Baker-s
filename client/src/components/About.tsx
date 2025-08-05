export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--chocolate)] mb-6">
              Our Sweet Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Jass Baker's, we believe every celebration deserves the perfect cake. Since our founding, we've been crafting 100% eggless delights that bring joy to families across Jalandhar and beyond.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              From custom designer cakes to artisanal pastries, each creation is a masterpiece made with the finest ingredients and boundless love. We're not just bakers – we're memory makers.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--gold)] mb-2">100%</div>
                <div className="text-sm text-gray-600">Eggless Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--gold)] mb-2">13hrs</div>
                <div className="text-sm text-gray-600">Daily Service</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Jass Baker's elegant bakery interior" 
              className="rounded-2xl shadow-2xl w-full h-auto image-hover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
