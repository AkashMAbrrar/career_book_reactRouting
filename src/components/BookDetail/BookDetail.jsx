import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((kitab) => kitab.bookId === id);

  const {
    bookName,
    bookId: currentBookId,
    author,
    image,
    category,
    review,
    tags,
  } = book;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl w-56" />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="mt-4">By: {author}</p>
          <div className="divider"></div>
          <p className="font-bold text-xl">Genre: {category}</p>
          <div className="divider"></div>
          <p className="py-6 ">
            {" "}
            <span className="text-xl font-bold">review:</span> {review}
          </p>
          <div className="py-6">
            {tags.map((tag, idx) => (
              <div
                key={tag.idx}
                className="badge badge-outline bg-lime-50 text-green-400 p-3 font-bold ml-4">
                # {tag}
              </div>
            ))}
          </div>
          <button className="btn btn-ghost">Read</button>
          <button className="btn btn-info ml-6">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
