import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCategories, getSubCategories, getLessons } from "../api/api";

function Learns() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [lessons, setLessons] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const pageSize = 8;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    const loadSubCategories = async () => {
      try {
        const data = await getSubCategories(selectedCategory);
        setSubCategories(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    loadSubCategories();
    setSelectedSubCategory("");
    setPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    const loadLessons = async () => {
      setLoading(true);

      try {
        const data = await getLessons({
          category: selectedCategory,
          subcategory: selectedSubCategory,
          page,
          pageSize,
        });

        setLessons(data.results || []);
        setCount(data.count || 0);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLessons();
  }, [selectedCategory, selectedSubCategory, page]);

  const totalPages = Math.ceil(count / pageSize);

  return (
    <div className="max-w-[90%] lg:max-w-6xl mx-auto font-jost my-20">
      <h1 className="text-center text-3xl font-bold uppercase mb-10">
        All Lessons
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-4 py-3 outline-none"
        >
          <option value="">All Categories</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.categoryName}
            </option>
          ))}
        </select>

        <select
          value={selectedSubCategory}
          onChange={(e) => {
            setSelectedSubCategory(e.target.value);
            setPage(1);
          }}
          className="border rounded-lg px-4 py-3 outline-none"
        >
          <option value="">All SubCategories</option>
          {subCategories.map((item) => (
            <option key={item.id} value={item.id}>
              {item.subCategoryName}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <h2 className="text-center text-xl mt-10">Loading...</h2>
      ) : lessons.length === 0 ? (
        <h2 className="text-center text-xl mt-10">No lessons found</h2>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lessons.map((lesson) => (
              <Card key={lesson.id} lesson={lesson} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Prev
            </button>

            <span className="font-medium">
              Page {page} of {totalPages || 1}
            </span>

            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page === totalPages || totalPages === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Learns;