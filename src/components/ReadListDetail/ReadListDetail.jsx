import React from "react";
import { Link } from "react-router-dom";

const ReadListDetail = ({ book }) => {
  const {
    totalPages,
    bookId,
    bookName,
    author,
    image,
    tags,
    yearOfPublishing,
    category,
    rating,
  } = book;
  console.log(book);
  return (
    <div className="w-full border p-5 ">
      <div className="rounded-xl flex justify-start items-center bg-slate-200 p-2">
        <img className="w-[120px] h-[120px]" src={image} alt="" />
        <div className="ml-10 bg-slate-100 p-2">
          <h3 className="text-2xl font-bold">{bookName}</h3>
          <p>By: {author}</p>
          <p>Pages: {totalPages}</p>
          <p>Rating: {rating}*</p>
          <div className="py-6">
            {tags.map((tag, idx) => (
              <div
                key={tag.idx}
                className="badge badge-outline bg-lime-50 text-green-400 p-3 font-bold ml-4">
                # {tag}
              </div>
            ))}
          </div>
          <p> Year Of Publishing: {yearOfPublishing}</p>
          <div className="divider"></div>
          <div className="flex">
            <h2 className="font-bold">Category: {category}</h2>
            <Link
              className="badge badge-outline bg-lime-50 text-green-400 p-3 font-bold ml-4"
              to={`/books/${bookId}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadListDetail;
