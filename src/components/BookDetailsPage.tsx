import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Book Detail Page</h2>
            <p>Book ID: {id}</p>
            {/* Display book details here */}
        </div>
    );
};

export default BookDetailsPage;