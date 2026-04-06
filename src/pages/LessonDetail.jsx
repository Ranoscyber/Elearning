import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { getLessonDetail } from "../api/api";

function LessonDetail() {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLesson = async () => {
      try {
        const data = await getLessonDetail(id);
        setLesson(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLesson();
  }, [id]);

  if (loading) {
    return <h1 className="text-center text-xl mt-20">Loading...</h1>;
  }

  if (!lesson) {
    return <h1 className="text-center text-xl mt-20">Lesson not found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto my-20 px-4 font-jost">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={lesson.lessonImage}
            alt={lesson.lessonName}
            className="w-full h-[350px] object-cover rounded-2xl shadow-md"
          />
        </div>

        <div>
          <p className="text-fuchsia-700 font-medium mb-2">
            {lesson.categoryName} / {lesson.SubCategoryName}
          </p>

          <h1 className="text-4xl font-bold mb-4">{lesson.lessonName}</h1>

          <p className="text-gray-500 mb-6">
            Published: {new Date(lesson.lessonDate).toLocaleDateString()}
          </p>

          {lesson.lessonPdf && (
            <a
              href={lesson.lessonPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Open Lesson PDF
            </a>
          )}
        </div>
      </div>

      <div className="mt-12 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Lesson Description</h2>

        <div
          className="prose max-w-none leading-8"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(lesson.lessonDescription),
          }}
        />
      </div>
    </div>
  );
}

export default LessonDetail;