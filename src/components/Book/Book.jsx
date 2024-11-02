import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author } = book;

  console.log(book);
  return (
    <div className="card bg-base-100 w-80 shadow-xl p-6">
      <figure className="bg-gray-200 py-8 rounded-2xl">
        <img className=" object-cover h-[166px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body p-4">
        <div className="card-actions justify-start gap-4">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline ">Products</div>
        </div>
        <h2 className="card-title">
          {bookName}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>By: {author}</p>
      </div>
    </div>
  );
};

export default Book;
