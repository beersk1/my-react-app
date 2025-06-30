import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    // You would typically send this data to your backend or a form service
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-10 bg-gradient-to-br from-brand-red to-brand-red/80 text-white">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-white/80 mb-8">
                  Ready to experience professional helmet cleaning? Reach out to
                  us for appointments, quotes, or any questions.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-white/70 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-white/70">
                        69, Mahendra Chambers
                        <br />
                        Dr. D.N. Road, Mumbai-400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-white/70 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-white/70">
                        info@cnfhelmet.com
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-white/70 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-white/70">
                        +91 9920166621
                        <br />
                        +91 9653218523
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10 bg-white">
              {
                <h2 className="text-2xl font-bold text-brand-dark mb-6">
                  Send Us a Message
                </h2>
              }

              {
                <form
                  action="https://formsubmit.co/info@cnfhelmet.com"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    >
                      <option value="standard">Standard Cleaning</option>
                      <option value="premium">
                        Premium Cleaning & Protection
                      </option>
                      <option value="emergency">Express Service (24h)</option>
                      <option value="other">Other/Custom Request</option>
                    </select>
                  </div> */}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-brand-red hover:bg-brand-red/90 text-white w-full flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              }
              <a
                href="https://wa.me/+918657177579"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-3 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1 bg-[#25D366] hover:bg-[#128C7E] text-white mt-2"
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
    </section>
  );
};

export default ContactSection;
