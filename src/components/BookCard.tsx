import React from 'react';
import {Link} from 'react-router-dom';

interface BookCardProps {
    id: string,
    name: string,
    author: string,
    price: number,
    image: string,
}

const BookCard: React.FC<BookCardProps> = ({id, name, author, price, image}) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-3xl p-4">
                <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                    <img
                        src={image}
                        alt={name}
                        className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"/>
                </div>
                {/*<div className="h-48 lg:h-auto lg:w-48 flex-none mx-auto">*/}
                {/*    <img*/}
                {/*        src={image}*/}
                {/*        alt={name}*/}
                {/*        className="w-full h-full object-cover rounded-2xl"*/}
                {/*    />*/}
                {/*</div>*/}
                <div className="mt-4">
                    <h2 className="text-lg font-medium">{name}</h2>
                    <p className="text-gray-500 mt-1">{author}</p>
                    <p className="mt-1">${price}</p>
                    <div className="mt-4">
                        <Link
                            to={`/book/${id}`}
                            className="bg-white px-4 py-2 shadow-sm border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2">
                            <span>View Info</span>
                        </Link>
                    </div>
                    <div className="mt-2">
                        <button
                            className="bg-gray-900 px-5 py-2 shadow-sm text-white rounded-full hover:bg-gray-800"
                            type="button" aria-label="like">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;