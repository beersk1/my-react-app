import React from "react";
import { Leaf, Recycle, Droplets } from "lucide-react";
// import helmetCleaningImg from "../assets/helmet-cleaning.jpg";
// import helmetWasteImg from "../assets/helmet-waste.jpg";
// import greenTechnologyImg from "../assets/green-technology.jpg";

const SustainabilitySection = () => {
  return (
    <section
      id="sustainability"
      className="section bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-400 rounded-full filter blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-green-100 text-green-700 font-medium mb-4">
            <Leaf className="h-4 w-4 mr-2" />
            Environmental Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cleaning Helmets,
            <span className="block text-green-600">Saving Our Planet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every helmet we clean prevents waste and extends product life.
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* The Problem */}
          <div className="space-y-6">
            <div className="relative">
              <img
                // src={helmetWasteImg}
                alt="Helmet waste in landfills"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-2">The Problem</h3>
                <p className="text-sm opacity-90">
                  Millions of helmets waste annually
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl bg-red-50/80 border-red-100 text-center">
                <Recycle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">
                  Millions Discarded
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Due to hygiene, not damage
                </p>
              </div>
              <div className="glass-card p-4 rounded-xl bg-red-50/80 border-red-100 text-center">
                <Droplets className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">
                  Centuries to Decompose
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  Plastics & EPS foam
                </p>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div className="space-y-6">
            <div className="relative">
              <img
                // src={helmetCleaningImg}
                alt="Professional helmet cleaning process"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/60 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-2">Our Solution</h3>
                <p className="text-sm opacity-90">
                  Professional cleaning extends life
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl bg-green-50/80 border-green-100 text-center">
                <svg
                  className="h-8 w-8 text-green-600 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="font-semibold text-gray-900">
                  Extended Lifespan
                </h4>
                <p className="text-xs text-gray-600 mt-1">Clean = longer use</p>
              </div>
              <div className="glass-card p-4 rounded-xl bg-green-50/80 border-green-100 text-center">
                <svg
                  className="h-8 w-8 text-green-600 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <h4 className="font-semibold text-gray-900">Reduced Waste</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Less landfill impact
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Green Technology */}
        <div className="mb-16">
          <div className="glass-card p-8 rounded-2xl bg-gradient-to-r from-blue-50/80 to-green-50/80 border-blue-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Green Technology
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Droplets className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Waterless Process
                      </h4>
                      <p className="text-sm text-gray-600">
                        UV sanitization & dry fog technology
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Eco-Friendly
                      </h4>
                      <p className="text-sm text-gray-600">
                        Non-toxic, biodegradable solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  //   src={greenTechnologyImg}
                  alt="Eco-friendly cleaning technology"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-green-100/80 to-emerald-100/80 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Clean Helmet, Clean Planet
            </h3>
            <p className="text-gray-700 mb-6 max-w-lg mx-auto">
              Join thousands making a green choice while keeping their gear
              fresh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center bg-green-600 hover:bg-green-700"
              >
                Start Green Journey
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/+919920166621"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 bg-[#25D366] hover:bg-[#128C7E] text-white"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
