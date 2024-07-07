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
            <option value="" selected>
              Select Equipment
            </option>
            <option value="electroseismic">Electroseismic</option>
            <option value="electromagnetic">Electromagnetic</option>
          </select>
          <label>
            Vehicle Included?
            <input type="checkbox" />
          </label>
        </div>
        <div>
          <label>
            Pickup Date:
            <input type="date" required />
          </label>
          <label>
            Return Date:
            <input type="date" required />
          </label>
        </div>
        <div>
          <textarea name="msg"></textarea>
        </div>
        <div>
          <label>
            Terms and Conditions of Equipment Lease:
            <input type="checkbox" /> Accept
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EquipmentLeaseForm;
