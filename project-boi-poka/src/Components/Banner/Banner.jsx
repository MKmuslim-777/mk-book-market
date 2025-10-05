import React from 'react';
import bookImg from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className='flex justify-around items-center py-16 px-20 my-10 rounded-3xl bg-gray-200/50'>
            <div>
                <h1 className='text-5xl font-bold mr-10'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-green-500 mt-12 text-[20px] py-7 px-6 rounded-lg text-white'>View The List</button>
            </div>
            <div>
                <img className='rounded-2xl' src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;