import { Button } from "@/components/ui/button";

export default function Hero() {
  const openWhatsApp = () => {
    const message = "Hi! I'd like to place an order for a cake.";
    const whatsappUrl = `https://wa.me/917508333647?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const callNow = () => {
    window.open('tel:01812273300', '_self');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
          Premium <span className="text-[var(--gold)]">Eggless</span> Delights
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light text-shadow">
          Crafted with Love, Delivered with Care
        </p>
        <p className="text-lg mb-10 opacity-90">
          100% Eggless Cakes • Custom Designer Pastries • Gift Hampers
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={openWhatsApp}
            className="gradient-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <i className="fab fa-whatsapp mr-2"></i>Order on WhatsApp
          </Button>
          <Button
            onClick={callNow}
            variant="outline"
            className="bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[var(--chocolate)] transition-all duration-300"
          >
            <i className="fas fa-phone mr-2"></i>Call Now
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}
