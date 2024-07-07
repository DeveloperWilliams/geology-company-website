import React, { useState } from "react";
import "./hireForm.css";

function EquipmentLeaseForm() {
  return (
    <div className="hireForm">
      <h4>Hire Equipments</h4>
      <form>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Surname" />
        </div>
        <div>
          <select name="select">
            <option value=""  selected disabled>
              Select Equipment
            </option>
            <option value="electroseismic">Electroseismic</option>
            <option value="electromagnetic">Electromagnetic</option>
          </select>
          <select name="select">
            <option value="" selected disabled>
              Vehichle Included?
            </option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div>
          <label>
            Pickup Date:
            <input type="date" required placeholder="Pickup Date:" />
          </label>
          <label>
            Return Date:
            <input type="date" required />
          </label>
        </div>
        <div>
          <textarea
            name="msg"
            placeholder="Any Additional Comments?"
            maxLength="300"
          ></textarea>
        </div>
        <div>
          <label className="accept">
            <div>
              Terms and Conditions of Equipment Lease Accept:
              <input type="checkbox" checked/> 
            </div>
          </label>
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EquipmentLeaseForm;
