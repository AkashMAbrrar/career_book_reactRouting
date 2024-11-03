import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category, rating } = book;

  console.log(book);
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-80 shadow-xl p-6 h-[450px]">
        <figure className="bg-gray-200 py-8 rounded-2xl">
          <img className=" object-cover h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body p-4">
          <div className="card-actions justify-start gap-4">
            {tags.map((tag, idx) => (
              <div
                key={tag.idx}
                className="badge badge-outline bg-lime-50 text-green-400 p-3 font-bold">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>By: {author}</p>
          <div className="mt-4 border-t-2 border-dashed"></div>
          <div className="flex justify-between">
            <div className="badge  font-bold text-xl">{category}</div>
            <div className="badge font-bold text-xl">
              {rating} <FaRegStar className="ml-2 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
