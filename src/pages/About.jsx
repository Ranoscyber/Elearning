function About() {
  return (
    <div className="max-w-5xl mx-auto my-20 px-4 font-jost">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">About Our E-Learning Platform</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Learn modern programming, web development, and technology with clear
          lessons, practical content, and useful resources.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-8">
            We want students and beginners to access useful learning materials
            in a simple and modern platform.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">What You Can Learn</h2>
          <p className="text-gray-600 leading-8">
            Web development, backend programming, frontend development, APIs,
            and practical lesson content with downloadable PDFs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;