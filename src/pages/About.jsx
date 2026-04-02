import React from "react";

function About() {
  return (
    <section className="bg-gray-50 text-gray-800 font-jost min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-purple-600 font-semibold uppercase tracking-wider">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Learn Without Limits
          </h1>
          <p className="mt-5 text-gray-600 text-lg leading-8">
            Our E-Learning platform helps students and beginners learn modern
            programming, technology, and development skills through simple
            lessons, real projects, and practical guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
              alt="Students learning online"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">Who We Are</h2>
            <p className="mt-4 text-gray-600 leading-8">
              We are passionate about making technology education accessible to
              everyone. Whether you are a beginner or someone improving your
              skills, our platform is designed to help you grow step by step.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              We focus on clear explanations, practical examples, and modern
              tools so learners can build confidence and become job-ready in the
              tech world.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-purple-600">Our Mission</h3>
                <p className="mt-2 text-gray-600">
                  To make learning programming and technology simple, practical,
                  and available for everyone.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-xl font-semibold text-purple-600">Our Vision</h3>
                <p className="mt-2 text-gray-600">
                  To empower learners with modern digital skills for the future.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold">Modern Courses</h3>
              <p className="mt-3 text-gray-600">
                Learn web development, programming, and technology with updated
                content.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">📘</div>
              <h3 className="text-xl font-semibold">Simple Learning</h3>
              <p className="mt-3 text-gray-600">
                Clear lessons and step-by-step guidance for beginners and
                students.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold">Practical Skills</h3>
              <p className="mt-3 text-gray-600">
                Build real projects and useful skills that prepare you for real
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;