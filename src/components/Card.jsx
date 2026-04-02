import React from "react";

function Card() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div className="flex flex-col justify-start items-start group">
          <figure className="w-[200px] h-[200px]">
            <img
              className="w-full h-full group-hover:scale-105 transition-all"
              src="https://tse1.mm.bing.net/th/id/OIP.H-598cArWpjIcAuDr5ct5AHaHa?pid=ImgDet&w=181&h=181&c=7&dpr=1.5&o=7&rm=3"
              alt=""
            />
          </figure>
          <h1 className="line-clamp-1 hover:text-fuchsia-800 text-2xl font-bold mt-2">
            ProductName
          </h1>
          <p className="hover:text-fuchsia-800 italic">Java Script</p>
        </div>
      </div>
      </>
  );
}

export default Card;
