// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import BASE_URL from "../Config";

// function SignUp() {
//   const [selectedPlan, setSelectedPlan] = useState('6months');
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
    
//     if (formData.password !== formData.confirmpassword) {
//       setError("Passwords do not match");
//       return;
//     }
    
//     try {
//       const response = await axios.post(`${BASE_URL}/auth/signup`, formData);
//       console.log("Signup Response:", response.data);
      
//       if (response.data.success) {
//         localStorage.setItem('token', response.data.token);
//         navigate("/login");
//       } else {
//         setError(response.data.message || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Signup Error:", error);
//       setError("Error signing up. Please try again.");
//     }
//   };

//   const plans = {
//     monthly: {
//       name: 'Monthly Plan',
//       price: '449₺/month',
//       description: 'Perfect for trying out Smart Life Academy',
//       total: '449₺'
//     },
//     '6months': {
//       name: '6 Months Plan',
//       price: '1349₺/months',
//       description: 'Save 48% with 6 months commitment',
//       total: '1399₺',
//       popular: true
//     },
//     annual: {
//       name: '1 Year Plan',
//       price: '1825₺/1 year',
//       description: 'Best value! Only 5₺/day',
//       total: '1825₺'
//     }
//   };

//   return (
//     <div className="dark-signup-page">
//       <div className="dark-signup-container container">
//         <button className="btn btn-primary">
//           <Link to="/hero"><i className="fa-solid fa-left-long me-2"></i> Home</Link>
//         </button>
//         <div className="row">
//           <div className="dark-form-section col-sm-6 mt-3">
//             <h1 className="text-yellow">Sign Up</h1>
//             <p className="dark-subtitle">
//               Expand your mind with curated summaries and personalized learning!
//             </p>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit} className="dark-signup-form">
//               <div className="dark-form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="dark-input"
//                 />
//               </div>
//               <div className="dark-form-group">
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="dark-input"
//                 />
//               </div>
//               <div className="dark-form-group">
//                 <input
//                   type="password"
//                   name="confirmpassword"
//                   placeholder="Confirm Password"
//                   value={formData.confirmpassword}
//                   onChange={handleChange}
//                   required
//                   className="dark-input"
//                 />
//               </div>
//               <div className="dark-form-group">
//                 <input
//                   type="text"
//                   name="promocode"
//                   placeholder="Promo Code"
//                   className="dark-input"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 style={{ width: "100%" }}
//                 className="dark-get-started-btn"
//               >
//                 Get started
//               </button>
//             </form>
//           </div>
//           <div className="col-sm-6">
//             <div className="plans-container2 row">
//               {Object.entries(plans).map(([key, plan]) => (
//                 <div
//                   key={key}
//                   className={`plan-card col-sm-7 mt-3 ${selectedPlan === key ? 'selected' : ''} ${plan.popular ? 'popular' : ''}`}
//                   onClick={() => setSelectedPlan(key)}
//                 >
//                   <h2 style={{ color: "white" }}>{plan.name}</h2>
//                   <div className="price">{plan.price}</div>
//                   <p className="total">Total: {plan.total}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

















import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../Config";

function SignUp() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState([]);
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
    promocode: "",
    selectedPlan: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("http://192.168.1.21:3001/api/v1/getsubscription");
        if (response.data && response.data.data) {
          setPlans(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };
    fetchPlans();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (formData.password !== formData.confirmpassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (!selectedPlan) {
      setError("Please select a plan before signing up");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        ...formData,
        selectedPlan: selectedPlan
      });
      console.log("Signup Response:", response.data);
      
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        navigate("/login");
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <div className="dark-signup-page">
      <div className="dark-signup-container container">
        <button className="btn btn-primary">
          <Link to="/hero"><i className="fa-solid fa-left-long me-2"></i> Home</Link>
        </button>
        <div className="row">
          <div className="col-sm-6">
            <h1 className="text-yellow">Select a Plan</h1>
            <div className="plans-container2 row">
              {plans.length > 0 ? (
                plans.map((plan) => (
                  <div
                    key={plan.plan_name}
                    className={`plan-card col-sm-7 mt-3 ${selectedPlan === plan.plan_name ? 'selected' : ''}`}
                    onClick={() => setSelectedPlan(plan.plan_name)}
                  >
                    <h2 style={{ color: "white" }}>{plan.plan_name}</h2>
                   <span style={{color: "white"}}>Original Price:</span> <div className="price"> {plan.original_price}₺</div>
                    <p className="total"> {plan.amount}₺</p>
                  </div>
                ))
              ) : (
                <p>Loading plans...</p>
              )}
            </div>
          </div>

          <div className="dark-form-section col-sm-6 mt-3">
            <h1 className="text-yellow">Sign Up</h1>
            <p className="dark-subtitle">
              Expand your mind with curated summaries and personalized learning!
            </p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} className="dark-signup-form">
              <div className="dark-form-group">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="dark-input"
                />
              </div>
              <div className="dark-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="dark-input"
                />
              </div>
              <div className="dark-form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="dark-input"
                />
              </div>
              <div className="dark-form-group">
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  required
                  className="dark-input"
                />
              </div>
              <div className="dark-form-group">
                <input
                  type="text"
                  name="promocode"
                  placeholder="Promo Code"
                  value={formData.promocode}
                  onChange={handleChange}
                  className="dark-input"
                />
              </div>
              <button
                type="submit"
                style={{ width: "100%" }}
                className="dark-get-started-btn"
              >
                Get started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;