import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cakeType: '',
    weight: '',
    deliveryDate: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi! I'd like to order a custom cake.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCake Type: ${formData.cakeType}\nWeight: ${formData.weight}\nDelivery Date: ${formData.deliveryDate}\nSpecial Requirements: ${formData.requirements}`;
    const whatsappUrl = `https://wa.me/917508333647?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-[var(--peach)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--chocolate)] mb-4">
            Custom Cake Orders
          </h2>
          <p className="text-xl text-gray-700">
            Let us create something special for your celebration
          </p>
        </div>

        <Card className="bg-white rounded-2xl shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-semibold text-[var(--chocolate)] mb-2">
                    Your Name *
                  </Label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-semibold text-[var(--chocolate)] mb-2">
                    Phone Number *
                  </Label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <Label className="block text-sm font-semibold text-[var(--chocolate)] mb-2">
                  Cake Type
                </Label>
                <Select value={formData.cakeType} onValueChange={(value) => handleInputChange('cakeType', value)}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all">
                    <SelectValue placeholder="Select cake type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="birthday">Birthday Cake</SelectItem>
                    <SelectItem value="anniversary">Anniversary Cake</SelectItem>
                    <SelectItem value="wedding">Wedding Cake</SelectItem>
                    <SelectItem value="corporate">Corporate Cake</SelectItem>
                    <SelectItem value="theme">Theme Cake</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-semibold text-[var(--chocolate)] mb-2">
                    Weight
                  </Label>
                  <Select value={formData.weight} onValueChange={(value) => handleInputChange('weight', value)}>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all">
                      <SelectValue placeholder="Select weight" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.5kg">0.5 kg</SelectItem>
                      <SelectItem value="1kg">1 kg</SelectItem>
                      <SelectItem value="1.5kg">1.5 kg</SelectItem>
                      <SelectItem value="2kg">2 kg</SelectItem>
                      <SelectItem value="3kg">3 kg</SelectItem>
                      <SelectItem value="5kg">5 kg</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="block text-sm font-semibold text-[var(--chocolate)] mb-2">
                    Delivery Date
                  </Label>
                  <Input
                    type="date"
                    value={formData.deliveryDate}
                    onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <Label className="block text-sm font-semibold text-[var(--chocolate)] mb-2">
                  Special Requirements
                </Label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your design preferences, flavors, colors, or any special messages..."
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="gradient-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <i className="fab fa-whatsapp mr-2"></i>Send Order via WhatsApp
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
