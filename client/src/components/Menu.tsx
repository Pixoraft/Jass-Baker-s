import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";

export default function Menu() {
  const orderProduct = (product: typeof products[0]) => {
    const message = `Hi! I'd like to order:\n\n${product.name}\nPrice: ₹${product.price}\n\nPlease confirm availability and delivery details.`;
    const whatsappUrl = `https://wa.me/917508333647?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const viewFullMenu = () => {
    const message = "Hi! I'd like to see your full menu. Please share the complete list of available items.";
    const whatsappUrl = `https://wa.me/917508333647?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-[var(--warm-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--chocolate)] mb-4">
            Our Signature Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Indulge in our handcrafted selection of premium eggless delights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover-lift">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover image-hover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[var(--chocolate)] mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[var(--gold)]">
                    {product.price >= 500 && product.name.includes('Hampers') 
                      ? `From ₹${product.price}` 
                      : `₹${product.price}`}
                  </span>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => window.location.href = `/product/${product.id}`}
                      variant="outline"
                      className="border-[var(--chocolate)] text-[var(--chocolate)] px-3 py-2 rounded-full hover:bg-[var(--chocolate)] hover:text-white transition-colors text-sm"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => orderProduct(product)}
                      className="bg-[var(--chocolate)] text-white px-3 py-2 rounded-full hover:bg-[var(--deep-brown)] transition-colors text-sm"
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={viewFullMenu}
            className="gradient-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <i className="fab fa-whatsapp mr-2"></i>View Full Menu on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
