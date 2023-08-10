import React, {useEffect, useState} from 'react';
import BookCard from "./BookCard";

interface Book {
    id: string;
    name: string;
    author: string;
    price: number;
    image: string;
}

const BookList = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        setBooks([
                {
                    "id": "1",
                    "name": "The Great Gatsby",
                    "author": "F. Scott Fitzgerald",
                    "price": 12.99,
                    "image": "https://example.com/book1.jpg"
                },
                {
                    "id": "2",
                    "name": "To Kill a Mockingbird",
                    "author": "Harper Lee",
                    "price": 9.99,
                    "image": "https://example.com/book2.jpg"
                },
                {
                    "id": "3",
                    "name": "1984",
                    "author": "George Orwell",
                    "price": 11.49,
                    "image": "https://example.com/book3.jpg"
                },
                {
                    "id": "4",
                    "name": "Pride and Prejudice",
                    "author": "Jane Austen",
                    "price": 8.95,
                    "image": "https://example.com/book4.jpg"
                },
                {
                    "id": "5",
                    "name": "The Hobbit",
                    "author": "J.R.R. Tolkien",
                    "price": 14.75,
                    "image": "https://example.com/book5.jpg"
                },
                {
                    "id": "6",
                    "name": "Harry Potter and the Sorcerer's Stone",
                    "author": "J.K. Rowling",
                    "price": 10.99,

                    "image": "https://example.com/book6.jpg"
                },
                {
                    "id": "7",
                    "name": "The Catcher in the Rye",
                    "author": "J.D. Salinger",
                    "price": 9.49,
                    "image": "https://example.com/book7.jpg"
                },
                {
                    "id": "8",
                    "name": "Brave New World",
                    "author": "Aldous Huxley",
                    "price": 10.25,
                    "image": "https://example.com/book8.jpg"
                },
                {
                    "id": "9",
                    "name": "Lord of the Flies",
                    "author": "William Golding",
                    "price": 7.99,
                    "image": "https://example.com/book9.jpg"
                },
                {
                    "id": "10",
                    "name": "The Alchemist",
                    "author": "Paulo Coelho",
                    "price": 13.45,
                    "image": "https://example.com/book10.jpg"
                }
            ]
        );
    }, [])

    return (
        <div className={"flex flex-wrap items-center justify-center"}>
            {books.map((book, index) => {
                return <BookCard key={index} id={book.id} name={book.name} author={book.author} price={book.price}
                                 image={book.image}/>;
            })}
        </div>
    );
};

export default BookList;