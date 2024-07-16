import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./hireForm.css";

function EquipmentLeaseForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    equipment: "",
    vehicleIncluded: "",
    pickupDate: "",
    returnDate: "",
    comments: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    emailjs
      .send(
        "service_9zipbjn",
        "template_bpfroud",
        formData,
        "kuMtsRqMku0V5E3nr"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Form submitted successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("There was an error submitting the form.");
        }
      );
  };

  return (
    <div className="hireForm">
      <h4>Hire Equipments</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Full Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Phone Nummber"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <select
            name="equipment"
            value={formData.equipment}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Equipments
            </option>
            <option value="electroseismic">Electroseismic</option>
            <option value="electromagnetic">Electromagnetic</option>
          </select>
          <select
            name="vehicleIncluded"
            value={formData.vehicleIncluded}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Vehicle Included?
            </option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <label>
            Pickup Date:
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Return Date:
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <textarea
            name="comments"
            placeholder="Any Additional Comments?"
            maxLength="300"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label className="accept">
            <div>
              Terms and Conditions of Equipment Lease Accept:
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
            </div>
          </label>
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EquipmentLeaseForm;
