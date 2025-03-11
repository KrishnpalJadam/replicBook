import React from "react";
import { useParams, Link } from "react-router-dom";

// Simulated User Data
const usersData = {
  1: { username: "serdarkarasulu@hotmail.com", booksCompleted: 0, testScore: 0, subscription: "active", promoCode: "PROMO123", totalCommission: 250 },
  2: { username: "ArtHurKas@gmail.com", booksCompleted: 0, testScore: 0, subscription: "pending", promoCode: "PROMO456", totalCommission: 90 },
  3: { username: "serdarkarasulu", booksCompleted: 0, testScore: 0, subscription: "active", promoCode: "PROMO789", totalCommission: 490 },
  4: { username: "kemalkarasulu@hotmail.com", booksCompleted: 0, testScore: 0, subscription: "active", promoCode: "PROMO555", totalCommission: 620 }
};

const UserDetails = () => {
  const { id } = useParams();
  const user = usersData[id];

  if (!user) {
    return <h2 className="text-center text-warning mt-5">User Not Found</h2>;
  }

  return (
    <div className="container mt-5 text-white">
        <div className="header d-flex justify-content-between">
              
                  <Link to="/Dashboard" className="btn btn-outline-light mb-3">
                    Back to Dashboard
                  </Link>
                </div>
      <h2 className="text-amber-400 mb-4">User Details - {user.username}</h2>

      {/* Responsive Table Format */}
      <div className="table-responsive">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>Field : </th>
              <th>Details : </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Username</strong></td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td><strong>Books Completed</strong></td>
              <td>{user.booksCompleted}</td>
            </tr>
            <tr>
              <td><strong>Test Score</strong></td>
              <td>{user.testScore}%</td>
            </tr>
            <tr>
              <td><strong>Subscription</strong></td>
              <td>
                <span className={`badge ${user.subscription === "active" ? "bg-warning text-dark" : "bg-secondary"}`}>
                  {user.subscription}
                </span>
              </td>
            </tr>
            <tr>
              <td><strong>Promo Code</strong></td>
              <td>{user.promoCode}</td>
            </tr>
            <tr>
              <td><strong>Total Commission</strong></td>
              <td>${user.totalCommission}</td>
            </tr>
          </tbody>
        </table>
      </div>

    
    </div>
  );
};

export default UserDetails;
