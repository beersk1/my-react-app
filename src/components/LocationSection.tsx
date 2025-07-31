import React from "react";
import { Truck, Clock, Shield, MapPin } from "lucide-react";
import { Bike } from "lucide-react";

const LocationSection = () => {
  console.log("LocationsSection component is rendering");

  return (
    <section
      // id="pickup-delivery"
      id="location-section"
      className="section bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-red to-brand-red/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent)]"></div>

          <div className="relative z-10 p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-white" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Our Service Points
                </h3>
              </div>
              <p className="text-white/90 text-lg">
                Visit us at any of our service locations for professional helmet
                cleaning services.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Service Point 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Location 1
                </h4>
                <p className="text-white/80 mb-4">
                  Coming Soon...
                  <br />
                  {/* [Your Address Line 2] */}
                  <br />
                  {/* [City, Pincode] */}
                </p>
                <div className="space-y-2 text-white/70 mb-4">
                  <p className="flex items-center justify-center gap-2">
                    {/* <Clock className="h-4 w-4" /> */}
                    {/* <span>[Your Time Slots]</span> */}
                  </p>
                  {/* <p className="text-sm">e.g., Mon-Fri: 9 AM - 6 PM</p> */}
                </div>
                <a
                  href="https://wa.me/+918657177579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white text-brand-red rounded-lg font-medium hover:bg-gray-50 transition-all text-sm"
                >
                  Contact
                </a>
              </div>

              {/* Service Point 2 */}
              {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Location 2
                </h4>
                <p className="text-white/80 mb-4">
                  [Your Address Line 1]
                  <br />
                  [Your Address Line 2]
                  <br />
                  [City, Pincode]
                </p>
                <div className="space-y-2 text-white/70 mb-4">
                  <p className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>[Your Time Slots]</span>
                  </p>
                  <p className="text-sm">e.g., Sat-Sun: 10 AM - 5 PM</p>
                </div>
                <a
                  href="https://wa.me/+919920166621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white text-brand-red rounded-lg font-medium hover:bg-gray-50 transition-all text-sm"
                >
                  Contact
                </a>
              </div> */}

              {/* Service Point 3 */}
              {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Location 3
                </h4>
                <p className="text-white/80 mb-4">
                  [Your Address Line 1]
                  <br />
                  [Your Address Line 2]
                  <br />
                  [City, Pincode]
                </p>
                <div className="space-y-2 text-white/70 mb-4">
                  <p className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>[Your Time Slots]</span>
                  </p>
                  <p className="text-sm">e.g., Mon-Sun: 8 AM - 8 PM</p>
                </div>
                <a
                  href="https://wa.me/+919920166621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white text-brand-red rounded-lg font-medium hover:bg-gray-50 transition-all text-sm"
                >
                  Contact
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
