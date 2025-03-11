import React from 'react'
import { Link } from 'react-router-dom'
// import "../Userpages/Settings.module.css"

const Settings = () => {
    return (
        <div className="container my-5">
            <Link
                to="/Dashboard"
                className="text-white mb-3 d-block text-decoration-none"
                style={{
                    color: "white",
                    textDecoration: "none",
                    display: "block",
                    marginBottom: 15
                }}
            >
                <i className="fa-solid fa-chevron-left me-3" /> Back to Dashboard
            </Link>
            {/* Account Settings */}
            <div
                className="progress-settings-container mb-4 mt-5 border border-secondary"
                style={{
                    backgroundColor: "#1a1a1a",
                    padding: 20,
                    borderRadius: 10,
                    border: "1px solid #6c757d",
                    color: "white"
                }}
            >
                <h4>
                    <span className="me-2">
                        <i className="fa-solid fa-circle-user" />
                    </span>
                    Account Settings
                </h4>
                <label className="form-label mt-3">Username</label>
                <input
                    type="text"
                    className="form-control bg-dark text-white"
                    defaultValue="serdarkarasulu@hotmail.com"
                    disabled=""
                />
                <label className="form-label mt-3">Current Password</label>
                <input type="password" className="form-control bg-dark text-white" />
                <label className="form-label mt-3">New Password</label>
                <input type="password" className="form-control bg-dark text-white" />
                <button
                    className="btn mt-3"
                    style={{ backgroundColor: "#ffc107", color: "black" }}
                >
                    Update Password
                </button>
            </div>
            {/* Subscription Management */}
            <div
                className="progress-settings-container border border-secondary"
                style={{
                    backgroundColor: "#1a1a1a",
                    padding: 20,
                    borderRadius: 10,
                    border: "1px solid #6c757d",
                    color: "white"
                }}
            >
                <h4 className='mb-2'>
                    <span className="me-2">
                        <i className="fa-solid fa-folder-closed" />
                    </span>
                    Subscription Management
                </h4>
                <p className='mt-3'>
                    <strong>Current Plan:</strong> Annual
                </p>
                <p className='mt-2'>
                    <strong>Status:</strong> Active
                </p>
                <h6 className="my-3">Change Plan</h6>
                <div className="row g-2">
                    <div className="col-12 col-md-4">
                        <button
                            className="progress1-plan-btn"
                            style={{
                                backgroundColor: "#2a2a2a",
                                color: "white",
                                border: "none",
                                padding: 10,
                                borderRadius: 5,
                                width: "100%"
                            }}
                        >
                            Monthly Plan
                            <br />
                            449$/month
                        </button>
                    </div>
                    <div className="col-12 col-md-4">
                        <button
                            className="progress1-plan-btn"
                            style={{
                                backgroundColor: "#2a2a2a",
                                color: "white",
                                border: "none",
                                padding: 10,
                                borderRadius: 5,
                                width: "100%"
                            }}
                        >
                            6 Months Plan
                            <br />
                            233$/month
                        </button>
                    </div>
                    <div className="col-12 col-md-4">
                        <button
                            className="progress1-plan-btn"
                            style={{
                                backgroundColor: "#444",
                                color: "#aaa",
                                border: "none",
                                padding: 10,
                                borderRadius: 5,
                                width: "100%"
                            }}
                            disabled=""
                        >
                            Annual Plan
                            <br />
                            152$/month
                        </button>
                    </div>
                </div>
                <button className="btn btn-danger mt-3">Cancel Subscription</button>
            </div>
        </div>
    )
}

export default Settings
