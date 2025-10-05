import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // console.log(data);
  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  //   )
  //       .then(res => res.json())
  //       .then(data => {
  //           setBooks(data)
  //       })
  // }, []);

  // const booksPromise = fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json").then(res => res.json())

  return (
    <div className="text-center">
      <h1 className="text-3xl text-center p-6 font-bold">Books</h1>
      <Suspense
        fallback={<span className="loading loading-spinner text-info"></span>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
