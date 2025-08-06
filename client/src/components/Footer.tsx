export default function Footer() {
  const openWhatsApp = () => {
    window.open('https://wa.me/917508333647', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/jassbakers', '_blank');
  };

  const callPhone = () => {
    window.open('tel:01812273300', '_self');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--chocolate)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo-white.svg" 
                alt="Jass Baker's Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Crafting 100% eggless delights for your special moments. From custom cakes to designer pastries, we bring sweetness to every celebration in Jalandhar and beyond.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={openWhatsApp}
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
              </button>
              <button
                onClick={openInstagram}
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </button>
              <button
                onClick={callPhone}
                className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                aria-label="Phone"
              >
                <i className="fas fa-phone text-2xl"></i>
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[var(--gold)]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-[var(--gold)]">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 text-[var(--gold)] mt-1"></i>
                <span>
                  270-R, Rainbow Road<br />
                  Model Town, Jalandhar
                </span>
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone mr-2 text-[var(--gold)]"></i>
                <span>0181-2273300</span>
              </p>
              <p className="flex items-center">
                <i className="fas fa-clock mr-2 text-[var(--gold)]"></i>
                <span>Daily 9 AM - 10 PM</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Jass Baker's. All rights reserved. Made with ❤️ for sweet celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}
