import React from "react";

function Contact() {
  return (
    <section className="bg-gray-50 text-gray-800 font-jost min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-purple-600 font-semibold uppercase tracking-wider">
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Get In Touch With Us
          </h1>
          <p className="mt-5 text-gray-600 text-lg leading-8">
            Have questions about courses, lessons, or learning support? We are
            here to help you on your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <form className="mt-6 space-y-5">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="mt-4 text-gray-600 leading-8">
                Reach out to us for support, feedback, or collaboration. We are
                always happy to hear from learners.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-purple-600">Email</h3>
                  <p className="text-gray-600">sonarseang@gmail.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-600">Phone</h3>
                  <p className="text-gray-600">+855 168168168</p>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-600">Location</h3>
                  <p className="text-gray-600">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-600 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold">Need Learning Help?</h2>
              <p className="mt-4 leading-8 text-white/90">
                Our team can guide you with course information, learning
                resources, and platform support.
              </p>
              <button  className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                <a href="">Contact Support</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;