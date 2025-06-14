import React, { useState } from "react";
import axios from "axios";


const CreateItinerary = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    activities: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/itineraries", formData);
      alert("Itinerary saved!");
      console.log(res.data);
      setFormData({
        destination: "",
        startDate: "",
        endDate: "",
        activities: "",
        notes: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to save itinerary");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Itinerary 📝</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Destination:</label><br />
          <input 
            type="text" 
            name="destination" 
            value={formData.destination} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Start Date:</label><br />
          <input 
            type="date" 
            name="startDate" 
            value={formData.startDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>End Date:</label><br />
          <input 
            type="date" 
            name="endDate" 
            value={formData.endDate} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Activities:</label><br />
          <textarea 
            name="activities" 
            value={formData.activities} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Notes:</label><br />
          <textarea 
            name="notes" 
            value={formData.notes} 
            onChange={handleChange} 
          />
        </div>
        <br />
        <button type="submit">Save Itinerary</button>
      </form>
    </div>
  );
};

export default CreateItinerary;
