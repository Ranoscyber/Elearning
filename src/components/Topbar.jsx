import { useEffect, useState } from "react";

function Topbar() {
  const [top, setTop] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/customwebsite/");
        const data = await res.json();
        console.log(data);

        setTop(Array.isArray(data) ? data[0] : data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-blue-100 text-black text-center py-3">
      <p className="font-light font-jost">
        {top?.TopDescription}{" "}
        <span className="hover:border-b-2 hover:border-blue-500">
          Free now
        </span>
      </p>
    </div>
  );
}

export default Topbar;