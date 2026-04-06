import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

function Card({ lesson }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
      <figure className="w-full h-52 overflow-hidden">
        <img
          src={lesson.lessonImage}
          alt={lesson.lessonName}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </figure>

      <div className="p-4 text-left">
        <p className="text-sm text-fuchsia-700 font-medium mb-1">
          {lesson.SubCategoryName}
        </p>

        <h2 className="text-xl font-bold line-clamp-1 mb-2">
          {lesson.lessonName}
        </h2>

        <div
          className="text-sm text-gray-600 line-clamp-3 leading-6"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(lesson.lessonDescription),
          }}
        />

        <div className="flex flex-wrap gap-2 mt-4">
          {lesson.lessonPdf && (
            <a
              href={lesson.lessonPdf}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Open PDF
            </a>
          )}

          <Link
            to={`/detail/${lesson.id}`}
            className="px-4 py-2 bg-fuchsia-700 text-white rounded-lg hover:bg-fuchsia-800"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;