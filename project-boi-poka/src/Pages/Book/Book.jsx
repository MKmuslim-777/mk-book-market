import { Star } from "lucide-react";
import React, { use } from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const booksData = use(booksPromise);
  //   console.log(singleBook);
  const {
    bookName,
    image,
    category,
    rating,
    tags,
    author,
    yearOfPublishing,
    bookId,
  } = singleBook;
  return (
    <Link to={`./bookDetails/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="p-4 rounded-lg">
            <figure className="p-1.5 bg-gray-200 rounded-lg">
              <img src={image} className="h-[200px] p-6" alt="Shoes" />
            </figure>
          </div>
          <div className="card-body">
            <div className="text-left">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge mr-2.5 text-green-500 p-4 text-[16px] bg-gray-100/50 rounded-2xl font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="card-title py-2.5">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p className="text-left text-[18px] font-semibold">By: {author}</p>
            <div className="card-actions justify-between border-t border-dashed border-gray-400 py-2.5">
              <div className="text-[20px] font-semibold">{category}</div>
              <div className=" text-[20px] font-semibold flex">
                <span className="mr-2">{rating}</span> <Star></Star>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
