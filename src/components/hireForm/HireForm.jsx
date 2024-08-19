import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./hireForm.css";

function EquipmentLeaseForm() {
  const [formData, setFormData] = useState({
    names: "",
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
      toast.error("Please accept the terms and conditions.");
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
          toast.success("Form submitted successfully!");
          setFormData({
            firstName: "",
            phoneNumber: "",
            equipment: "",
            vehicleIncluded: "",
            pickupDate: "",
            returnDate: "",
            comments: "",
            termsAccepted: false,
          });
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("There was an error submitting the form.");
        }
      );
  };

  return (
    <div className="hireForm">
      <ToastContainer />
      <h4>Hire Equipment</h4>
      <form onSubmit={handleSubmit}>
        <div className="oneB">
          <input
            type="text"
            name="names"
            placeholder="Full Name"
            value={formData.names}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
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
