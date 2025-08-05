import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const openWhatsApp = () => {
    const message = "Hi! I'd like to get in touch regarding your bakery services.";
    const whatsappUrl = `https://wa.me/917508333647?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/jassbakers', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--chocolate)] mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600">
            We're here to make your celebrations sweeter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-[var(--warm-gray)] rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--gold)] text-white p-3 rounded-full">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--chocolate)] text-lg mb-2">
                      Visit Our Store
                    </h3>
                    <p className="text-gray-700">
                      270-R, Rainbow Road<br />
                      Model Town, Jalandhar<br />
                      Punjab 144003
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[var(--warm-gray)] rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--gold)] text-white p-3 rounded-full">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--chocolate)] text-lg mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-700">
                      <a href="tel:01812273300" className="hover:text-[var(--gold)] transition-colors">
                        0181-2273300
                      </a>
                      <br />
                      <a href="tel:917508333647" className="hover:text-[var(--gold)] transition-colors">
                        +91 7508333647
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[var(--warm-gray)] rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[var(--gold)] text-white p-3 rounded-full">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--chocolate)] text-lg mb-2">
                      Store Hours
                    </h3>
                    <p className="text-gray-700">
                      Open Daily<br />
                      9:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button
                onClick={openWhatsApp}
                className="flex-1 gradient-gold text-white text-center py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp
              </Button>
              <Button
                onClick={openInstagram}
                className="flex-1 bg-pink-500 text-white text-center py-4 rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300"
              >
                <i className="fab fa-instagram mr-2"></i>Instagram
              </Button>
            </div>
          </div>

          <div className="h-96 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.2589234567!2d75.5762!3d31.3260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE5JzMzLjYiTiA3NcKwMzQnMzQuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jass Baker's Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
