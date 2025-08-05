import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--rose)]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--chocolate)] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white rounded-2xl shadow-xl hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-[var(--gold)]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[var(--peach)] rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-[var(--chocolate)]">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--chocolate)]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
