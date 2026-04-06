import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { getLessons } from "../api/api";

function Home() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeLessons = async () => {
      try {
        const data = await getLessons({ page: 1, pageSize: 4 });
        setLessons(data.results || []);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeLessons();
  }, []);

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
                <Link
                  to="/learns"
                  className="px-7 py-3.5 rounded-full bg-white text-[#5b2be0] font-semibold text-lg hover:scale-[1.02] transition text-center"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[90%] lg:max-w-6xl mx-auto font-jost my-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Recommended Lessons</h1>
          <p className="italic text-gray-600">
            Explore with modern programming language
          </p>
        </div>

        {loading ? (
          <h2 className="text-center text-xl mt-10">Loading...</h2>
        ) : lessons.length === 0 ? (
          <h2 className="text-center text-xl mt-10">No lessons found</h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lessons.map((lesson) => (
              <Card key={lesson.id} lesson={lesson} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            to="/learns"
            className="inline-block px-6 py-3 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800"
          >
            View All Lessons
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;