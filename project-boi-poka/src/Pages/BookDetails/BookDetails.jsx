import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = Number(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);
//   console.log(singleBook);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing
  } = singleBook;
//   console.log(id, data);


  const handleMarkAsRead = (id) => {
    // Store with id
    
  }
  return (
    <div className=" mx-auto flex">
      <div>
        <img src={image} className=" w-[440px]" alt="" />
      </div>

      <div>
        <div>
          <h1>{bookName}</h1>
          <p>By: {author}</p>
        </div>

        <div>
          <span>{category}</span>
        </div>

        <div>
          <p>
            Review: <span>{review}</span>
          </p>
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

          <div>
            <p>
              Number of Pages: <span>{totalPages}</span>
            </p>
            <p>
              Publisher: <span>{publisher}</span>
            </p>
            <p>
              Year of Publishing: <span>{yearOfPublishing}</span>
            </p>
            <p>
              Rating: <span>{rating}</span>
            </p>
          </div>
          <button className="btn mr-2.5">Mark As Read</button>
          <button className="btn btn-accent text-white">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
