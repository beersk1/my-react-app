import React from "react";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  FlaskConicalOff,
  Wind,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
const SolutionSection = () => {
  return (
    <section
      id="solution"
      className="section bg-gradient-to-r from-brand-red to-brand-red/80 text-white py-8 mb-4"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-white/20 text-white font-medium mb-2">
            Our Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Introducing India's First Advanced Helmet Cleaning Service
          </h2>
          <p className="text-white/80 text-lg">
            Revolutionary cleaning technology for a safer, fresher helmet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
          <div>
            <div className="relative overflow-hidden rounded-xl bg-white/10 border border-white/20 shadow-lg aspect-[2/3]">
              <img
                src="Images/Helmet Cleaning Machine.png"
                alt="Helmet cleaning machine - vertical image"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">How Our Process Works</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">UV Light Sanitization</p>
                  <p className="text-white/80 text-sm">
                    Kills 99.9% of bacteria and germs for a hygienic interior.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <FlaskConicalOff className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Dry Fog Clean & Deodorize</p>
                  <p className="text-white/80 text-sm">
                    Penetrates padding to remove odors and leaves a fresh
                    scent—no harsh chemicals.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Wind className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Hot Air Drying</p>
                  <p className="text-white/80 text-sm">
                    Thoroughly dries the liner and pads to a comfortable,
                    ready-to-wear finish.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Exterior Clean & Polish</p>
                  <p className="text-white/80 text-sm">
                    We clean the shell and visor and finish with a gentle polish
                    for showroom shine.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Cutting-Edge Technology
                </h3>
                <p className="text-white/80">
                  Our advanced cleaning service sterilizes, deodorizes, and
                  removes bacteria in minutes, not hours.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <FlaskConicalOff className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Safe & Effective</h3>
                <p className="text-white/80">
                  No water, no harsh chemicals—just advanced technology that's
                  gentle on your helmet but tough on germs.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 sm:col-span-2">
                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">99.9% Bacteria-Free</h3>
                <p className="text-white/80">
                  Our process eliminates 99.9% of bacteria, ensuring your helmet
                  is not just clean but hygienically safe.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to Experience the Difference?
                  </h3>
                  <p className="text-white/80">
                    Schedule your helmet cleaning today and ride with confidence
                    knowing your helmet is truly clean.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeIn animate-delay-300">
                  <a
                    href="#contact"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/+919920166621"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 bg-[#25D366] hover:bg-[#128C7E] text-white"
                  >
                    <span className="text-white mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
