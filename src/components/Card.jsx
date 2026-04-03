import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

function Card() {
  const [lesson, setLesson] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/lessons/");
        const data = await res.json();
        //console.log(data);
        setLesson(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h1 className="text-center text-xl mt-10">Loading...</h1>;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {lesson.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-start items-start group"
          >
            <figure className="w-[200px] h-[200px] overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                src={item.lessonImage}
                alt={item.lessonName}
              />
            </figure>

            <h1 className="line-clamp-1 hover:text-fuchsia-800 text-2xl font-bold mt-2">
              {item.lessonName}
            </h1>

            <p className="hover:text-fuchsia-800 italic">
              {item.SubCategoryName}
            </p>

            <div
              className="text-sm text-gray-600 mt-2 line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.lessonDescription),
              }}
            ></div>
            <div className="flex items-center justify-between gap-2">
            <a
              href={item.lessonPdf}
              target="_blank"
              rel="noreferrer"
              className="mt-3 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Open PDF
            </a>
            <Link className="mt-3 px-3 py-1 bg-fuchsia-700 text-white rounded hover:bg-fuchsia-800" to="/Detail">Product Detail</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
