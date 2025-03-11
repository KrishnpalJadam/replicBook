import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState('6months');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const plans = {
    monthly: {
      name: 'Monthly Plan',
      price: '449₺/month',
      description: 'Perfect for trying out Smart Life Academy',
      total: '449₺'
    },
    '6months': {
      name: '6 Months Plan',
      price: '233₺/month',
      description: 'Save 48% with 6 months commitment',
      total: '1399₺',
      popular: true
    },
    annual: {
      name: 'Annual Plan',
      price: '152₺/month',
      description: 'Best value! Only 5₺/day',
      total: '1825₺'
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Start Your Transformation Journey</h1>
      <p className="signup-subtitle">Complete the 30-day challenge and get 2 months free access</p>

      <div className="plans-container">
        {Object.entries(plans).map(([key, plan]) => (
          <div 
            key={key}
            className={`plan-card ${selectedPlan === key ? 'selected' : ''} ${plan.popular ? 'popular' : ''}`}
            onClick={() => setSelectedPlan(key)}
          >
            {plan.popular && <div className="popular-tag">Most Popular</div>}
            <h2>{plan.name}</h2>
            <div className="price">{plan.price}</div>
            <p className="total">Total: {plan.total}</p>
            <p className="description">{plan.description}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
<Link to={"/login"}>
        <button type="submit" className="payment-button">
          Continue to Payment
        </button></Link>

        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Plan;