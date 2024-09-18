import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const countries = [ "India","America"]; 
  const states = {
    India: ["Maharashtra", "Delhi", "Karnataka","Madhya_Pradesh"],
    America : ["New York"]
  };
  const cities = {
  
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Madhya_Pradesh :[
      "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", 
      "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", 
      "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", 
      "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", 
      "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", 
      "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", 
      "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", 
      "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"
    ]
  };

  const handleChange = (e) => {
    const newObj = { ...formData, [e.target.name]: e.target.value };
    setFormData(newObj);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.address) newErrors.address = "Address is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg mt-6 mb-6">
      <div className='flex justify-end '><h1 className='text-slate-900 font-bold cursor-pointer mb-10' onClick={()=>navigate(-1)}>X</h1></div>
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder='Enter your name'
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder='Enter your email'
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder='Enter your phone number'
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <select 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            className='w-full px-3 py-2 border border-gray-300 rounded-md'
          >
            <option value="">Choose your country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <select 
            name="state" 
            value={formData.state} 
            onChange={handleChange} 
            className='w-full px-3 py-2 border border-gray-300 rounded-md'
            disabled={!formData.country} 
          >
            <option value="">Choose your state</option>
            {formData.country && states[formData.country]?.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <select 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            className='w-full px-3 py-2 border border-gray-300 rounded-md'
            disabled={!formData.state} 
          >
            <option value="">Choose your city</option>
            {formData.state && cities[formData.state]?.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder='Enter your address'
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
