import React from 'react';
import { Link } from 'react-router-dom';

// Sample Data - Ye backend se aayega future me
const completedBooks = [
    {
        id: 1,
        image: "https://i.ibb.co/chfGcpmZ/6.png",
        name: "Personal Developments",
        author: "Amdern Dinsletdich",
        is30DaysChallenge: true, // First attempt pass kiya 80% se upar
    },
    {
        id: 2,
        image: "https://i.ibb.co/chfGcpmZ/6.png",
        name: "Financial Freedom",
        author: "Robert Kiyosaki",
        is30DaysChallenge: false, // Later attempts me pass kiya
    },
    {
        id: 3,
        image: "https://i.ibb.co/chfGcpmZ/6.png",
        name: "Healthy Habits",
        author: "James Clear",
        is30DaysChallenge: true,
    },
    {
        id: 4,
        image: "https://i.ibb.co/chfGcpmZ/6.png",
        name: "Mindset Mastery",
        author: "Carol Dweck",
        is30DaysChallenge: false,
    },
];

const CompleteBooks = () => {
    return (
        <div>
            <div className="container mt-5">
                <Link
                    to="/Dashboard"
                    className="d-flex align-items-center mb-4 text-decoration-none text-white"
                >
                    <i className="fa-solid fa-chevron-left me-2" /> Back to Dashboard
                </Link>
                <h2 className="mb-4 text-white fs-4 fw-bold">Completed Books</h2>
                
                <div
                    className="card-custom p-3 mb-3 rounded-3 border border-secondary"
                    style={{ backgroundColor: "#1a1a1a" }}
                >
                    <div className="table-responsive mt-4">
                        <table className="table table-bordered table-dark">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Book Image</th>
                                    <th>Book Name</th>
                                    <th>Author Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {completedBooks.map((book, index) => (
                                    <tr key={book.id}>
                                        <td>{index + 1}.</td>
                                        <td>
                                            <img
                                                src={book.image}
                                                className="bookimg"
                                                alt=""
                                                style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                            />
                                        </td>
                                        <td>
                                            {book.name}
                                            {book.is30DaysChallenge && <span style={{ color: "#ffc107", marginLeft: "5px" }}>(*)</span>}
                                        </td>
                                        <td>{book.author}</td>
                                        <td>
                                            <span
                                                className="badge bg-success text-white"
                                                style={{ cursor: "pointer" }}
                                            >
                                                Complete
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                {completedBooks.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="text-center">No Completed Books Yet</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteBooks;
