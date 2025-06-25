import React from "react";
import { Truck, Clock, Shield, MapPin } from "lucide-react";
import { Bike } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-12 w-12 text-brand-red" />,
    title: "Free Pickup & Delivery",
    description:
      "We come to your location to collect your helmet and deliver it back once cleaned - completely free of charge.",
  },
  {
    icon: <Clock className="h-12 w-12 text-brand-red" />,
    title: "Quick Turnaround",
    description:
      "Same-day or next-day service available. Your helmet will be back to you fresh and clean in no time.",
  },
  {
    icon: <Shield className="h-12 w-12 text-brand-red" />,
    title: "Safe Handling",
    description:
      "Your helmet is treated with utmost care throughout the entire pickup, cleaning, and delivery process.",
  },
  {
    icon: <MapPin className="h-12 w-12 text-brand-red" />,
    title: "Wide Coverage",
    description:
      "We serve multiple locations across the city. Check if we deliver to your area when you book.",
  },
];

const PickupDeliverySection = () => {
  return (
    <section
      id="pickup-delivery"
      className="section bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-brand-lightRed text-brand-red font-medium mb-2">
            Pickup & Delivery
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            We Come to You
          </h2>
          <p className="text-gray-600 text-lg">
            No need to leave your home or office. Our convenient pickup and
            delivery service brings professional helmet cleaning right to your
            doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-16 w-16 rounded-full bg-brand-red/10 flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-red to-brand-red/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent)]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-12">
            <div className="text-white max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Bike className="h-8 w-8 text-white" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ready for Pickup Service?
                </h3>
              </div>
              <p className="text-white/90 text-lg mb-6">
                Schedule your helmet pickup today and experience the convenience
                of our professional cleaning service delivered right to your
                door.
              </p>
              <ul className="text-white/80 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Free pickup and delivery within service areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Professional cleaning and sanitization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Quick turnaround time</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-48 h-32  rounded-lg overflow-hidden">
                <img src="Images/fast-delivery.png" alt="Delivery service" />
              </div>

              <a
                href="https://forms.gle/o4qgxNV9XJoAUwjm9"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-red rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Pickup
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupDeliverySection;
