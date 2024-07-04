import React from "react";
import "./hire.css";

const Hire = () => {
  return (
    <>
      <div className="hire">
        <div className="left">
          Lease top-notch equipment from GeoTruth today!
        </div>
        <div className="right">
          <form></form>
          <div>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Surname Name" required />
          </div>
          <div>
            <select name="select" required>
              <option value="not" disabled selected>
                Choose Equipment
              </option>
              <option value="Electroseismic">Electroseismic</option>
              <option value="Electromagnetic">Electromagnetic</option>
            </select>
            <div>
              <label>
                Vehicle Included:
                <input type="checkbox" name="vehicleIncluded" />
              </label>
            </div>
          </div>
          <div>
            <label>
              Pickup Date:
              <input type="date" />
            </label>
            <label>
              Return Date:
              <input type="date" name="returnDate" />
            </label>
          </div>
          <div>
            <textarea name="msg" placeholder="Leave Comments Here" />
          </div>
          <div>
            <label>
              Terms and Conditions of Equipment Lease:
              <input type="checkbox" />
              Accept
            </label>
          </div>
          <div>
            <button type="submit">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;
