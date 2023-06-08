import { useEffect, useState } from 'react';

function Reviews() {
    const [review, setReview] = useState(null);

    useEffect(() => {
        fetch('http://localhost:9292/reviews')
        .then(res => res.json())
        .then(data => setReview(data[1])) // Fetches the first review from the backend
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
    }, []);

    return (
        <div>
        <h2>Review</h2>
        {review ? (
            <div>
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            <p>Rating: {review.rating}</p>
            </div>
        ) : (
            <p>Loading review...</p>
        )}
        </div>
    );
}

export default Reviews;



// import { useEffect, useState } from 'react';

// const Reviews = () => {
//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:9292/reviews')
//         .then(response => response.json())
//         .then(data => setReviews(data));
//     }, []);

//     return (
//         <div>
//         <h2>Reviews</h2>
//         <ul>
//             {reviews.map(review => (
//             <li key={review.id}>
//                 {review.review}
//             </li>
//             ))}
//         </ul>
//         </div>
//     );
// };

// export default Reviews;
