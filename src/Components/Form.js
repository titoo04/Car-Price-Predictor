import React, { useRef } from "react";
import '../Assets/style/App.css'

function Form({ onPredict }) {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const carData = {
      Make: formData.get('make'),
      Model: formData.get('model'),
      Year: formData.get('year'),
      Kilometer: formData.get('kilometer'),
      Transmission: formData.get('transmission'),
      "Fuel Type": formData.get('fuel'),
      Engine: formData.get('engine'),
      "Max Power": formData.get('power'),
      "Max Torque": formData.get('torque'),
      Length: formData.get('length'),
      Width: formData.get('width'),
      Height: formData.get('height'),
      "Fuel Tank Capacity": formData.get('capacity')
    };
    onPredict(carData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="container">
        <div className="left">
          <label htmlFor="make">Make:</label><br />
          <input required type="text" name="make" /><br />
          <label htmlFor="length">Length:</label><br />
          <input required type="tel" name="length" /><br />
          <label htmlFor="width">Width:</label><br />
          <input required type="tel" name="width" /><br />
          <label htmlFor="height">Height:</label><br />
          <input required type="tel" name="height" /><br />
          <label htmlFor="transmission">Transmission:</label><br />
          <select name="transmission">
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select><br />
          <label htmlFor="model">Model:</label><br />
          <input required type="text" name="model" /><br />
          <label htmlFor="kilometer">Kilometer:</label><br />
          <input required type="text" name="kilometer" /><br />
          <button type="submit">Predict</button>
        </div>
        <div className="right">
          <label htmlFor="year">Year:</label><br />
          <input required type="text" name="year" /><br />
          <label htmlFor="fuel">Fuel type:</label><br />
          <input required type="text" name="fuel" /><br />
          <label htmlFor="torque">Max torque:</label><br />
          <input required type="text" name="torque" /><br />
          <label htmlFor="power">Max Power:</label><br />
          <input required type="text" name="power" /><br />
          <label htmlFor="capacity">Fuel tank capacity:</label><br />
          <input required type="text" name="capacity" /><br />
          <label htmlFor="engine">Engine:</label><br />
          <input required type="text" name="engine" /><br />
        </div>
      </div>
    </form>
  );
}

export default Form;
