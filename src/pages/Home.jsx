import HomeCard from "../components/HomeCard";


function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#5b2be0] text-white font-jost">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-100"
            style={{ backgroundImage: "url('/hero.png')" }}
          ></div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(91,43,224,0.98)_0%,rgba(91,43,224,0.95)_35%,rgba(91,43,224,0.70)_58%,rgba(91,43,224,0.30)_75%,rgba(91,43,224,0.08)_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="min-h-[78vh] md:min-h-[85vh] flex items-center">
            <div className="max-w-2xl py-16 sm:py-20">
              <p className="text-lg sm:text-xl text-white/90 mb-4">
                Learn Tech for Free!
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Start Learning
                <span className="block">Modern</span>
                <span className="block">Programming</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-white/85 leading-8 max-w-xl">
                Build real skills in programming, web development, and modern
                technology with clear lessons and practical projects.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-7 py-3.5 rounded-full bg-white text-[#5b2be0] font-semibold text-lg hover:scale-[1.02] transition">
                  Start Free
                </button>

                <button className="px-7 py-3.5 rounded-full border border-white/70 text-white font-semibold text-lg hover:bg-white hover:text-[#5b2be0] transition">
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    <HomeCard/>

    </>
  );
}

export default Home;
