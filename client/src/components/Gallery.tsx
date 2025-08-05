import { galleryImages } from "@/data/products";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--chocolate)] mb-4">
            Sweet Memories
          </h2>
          <p className="text-xl text-gray-600">
            A gallery of our finest creations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover image-hover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fas fa-search-plus text-white text-2xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
