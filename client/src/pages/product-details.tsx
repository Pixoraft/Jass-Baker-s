import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProductDetails() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id;
  
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[var(--chocolate)] mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Button 
              onClick={() => window.location.href = "/"}
              className="gradient-gold text-white px-6 py-3 rounded-full"
            >
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const orderProduct = () => {
    const message = `Hi! I'd like to order:\n\n${product.name}\nPrice: ₹${product.price}\n\nPlease confirm availability and delivery details.`;
    const whatsappUrl = `https://wa.me/917508333647?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const callForOrder = () => {
    window.open('tel:01812273300', '_self');
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'cake': return 'Premium Cake';
      case 'dessert': return 'Dessert';
      case 'bread': return 'Fresh Bread';
      case 'hamper': return 'Gift Hamper';
      default: return 'Product';
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'cake': return 'bg-pink-100 text-pink-800';
      case 'dessert': return 'bg-purple-100 text-purple-800';
      case 'bread': return 'bg-orange-100 text-orange-800';
      case 'hamper': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProductFeatures = (product: any) => {
    const features = ["100% Eggless", "Premium Quality", "Fresh Daily"];
    
    if (product.category === 'cake') {
      features.push("Custom Design Available", "Multiple Sizes", "Party Perfect");
    } else if (product.category === 'dessert') {
      features.push("Rich & Creamy", "Individual Serving", "Quick Treat");
    } else if (product.category === 'bread') {
      features.push("Handmade", "No Preservatives", "Crispy Texture");
    } else if (product.category === 'hamper') {
      features.push("Curated Selection", "Gift Wrapped", "Perfect for Gifting");
    }
    
    return features;
  };

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-sm">
              <button 
                onClick={() => window.location.href = "/"}
                className="text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors"
              >
                Home
              </button>
              <span className="text-gray-400">/</span>
              <button 
                onClick={() => window.location.href = "/#menu"}
                className="text-[var(--chocolate)] hover:text-[var(--gold)] transition-colors"
              >
                Menu
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{product.name}</span>
            </nav>
            <Button
              onClick={() => window.location.href = "/#menu"}
              variant="outline"
              className="border-[var(--chocolate)] text-[var(--chocolate)] hover:bg-[var(--chocolate)] hover:text-white"
            >
              <i className="fas fa-arrow-left mr-2"></i>Back to Menu
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(product.category)} px-3 py-1 rounded-full font-medium`}>
                    {getCategoryName(product.category)}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="animate-slide-up space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--chocolate)] mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {product.detailedDescription || product.description}
                </p>
                {product.weight && product.serves && (
                  <div className="flex items-center space-x-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-weight text-[var(--gold)]"></i>
                      <span>{product.weight}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-users text-[var(--gold)]"></i>
                      <span>Serves {product.serves}</span>
                    </div>
                    {product.preparationTime && (
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-clock text-[var(--gold)]"></i>
                        <span>{product.preparationTime}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-4xl font-bold text-[var(--gold)]">
                  {product.price >= 500 && product.name.includes('Hampers') 
                    ? `From ₹${product.price}` 
                    : `₹${product.price}`}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-[var(--gold)]">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <span className="text-gray-600">(4.9/5)</span>
                </div>
              </div>

              {/* Product Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Features */}
                <Card className="bg-white rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[var(--chocolate)] text-lg mb-4">
                      Product Features
                    </h3>
                    <div className="space-y-2">
                      {getProductFeatures(product).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <i className="fas fa-check text-green-500"></i>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Ingredients & Details */}
                <Card className="bg-white rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[var(--chocolate)] text-lg mb-4">
                      Product Details
                    </h3>
                    <div className="space-y-3">
                      {product.ingredients && (
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Ingredients:</h4>
                          <p className="text-sm text-gray-600">{product.ingredients.join(', ')}</p>
                        </div>
                      )}
                      {product.allergens && (
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Contains:</h4>
                          <p className="text-sm text-red-600">{product.allergens.join(', ')}</p>
                        </div>
                      )}
                      {product.shelfLife && (
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Shelf Life:</h4>
                          <p className="text-sm text-gray-600">{product.shelfLife}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={orderProduct}
                  className="w-full gradient-gold text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Order via WhatsApp
                </Button>
                <Button
                  onClick={callForOrder}
                  variant="outline"
                  className="w-full border-2 border-[var(--chocolate)] text-[var(--chocolate)] py-4 rounded-xl font-semibold text-lg hover:bg-[var(--chocolate)] hover:text-white transition-all duration-300"
                >
                  <i className="fas fa-phone mr-2"></i>Call to Order
                </Button>
              </div>

              {/* Additional Info */}
              <Card className="bg-[var(--peach)]/30 rounded-2xl">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <i className="fas fa-truck text-[var(--gold)] text-2xl mb-2"></i>
                      <h4 className="font-semibold text-[var(--chocolate)]">Free Delivery</h4>
                      <p className="text-sm text-gray-600">Orders above ₹500</p>
                    </div>
                    <div>
                      <i className="fas fa-clock text-[var(--gold)] text-2xl mb-2"></i>
                      <h4 className="font-semibold text-[var(--chocolate)]">Same Day</h4>
                      <p className="text-sm text-gray-600">Order before 6 PM</p>
                    </div>
                    <div>
                      <i className="fas fa-heart text-[var(--gold)] text-2xl mb-2"></i>
                      <h4 className="font-semibold text-[var(--chocolate)]">Made Fresh</h4>
                      <p className="text-sm text-gray-600">Daily preparation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[var(--chocolate)] mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products
                .filter(p => p.id !== product.id && p.category === product.category)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
                    <div className="relative">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover image-hover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[var(--chocolate)] mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{relatedProduct.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-[var(--gold)]">
                          ₹{relatedProduct.price}
                        </span>
                        <Button
                          onClick={() => window.location.href = `/product/${relatedProduct.id}`}
                          className="bg-[var(--chocolate)] text-white px-4 py-2 rounded-full hover:bg-[var(--deep-brown)] transition-colors"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}