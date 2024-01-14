import React, { useState } from "react";
import { ErrorMessage, Field, useFormik } from "formik";
import DropdownField from "../reusableComponents/DropDownField"; // Import the DropdownField component
import { LocationData } from "../utils/MockData";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormElements } from "../utils/constants";
import { addUser } from "../StateManagement/userSlice";
import { validationSchema } from "../utils/validation";

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      qualification: "",
      specialization: "",
      company: "",
      position: "",
      country: "",
      state: "",
      districts: "",
      city: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addUser(values));
      navigate("/edit");
    },
  });

  const handleCountryChange = (e) => {
    const countryId = parseInt(e.target.value);
    const selectedCountry = LocationData.find(
      (country) => country.id === countryId
    );
    setSelectedCountry(selectedCountry);
    formik.handleChange(e);
  };

  const handleStateChange = (e) => {
    const stateId = parseInt(e.target.value);
    const selectedState = selectedCountry.states.find(
      (state) => state.id === stateId
    );
    setSelectedState(selectedState);
    formik.handleChange(e);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="main-content">
      {FormElements.details.map((field) => {
        return (
          <div className="form-group">
            <label>{field.label}</label>
            <input
              className="input-control"
              key={field.id}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              disabled={field.disabled}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* <ErrorMessage name={field.name} component="div" /> */}
          </div>
        );
      })}
      <DropdownField
        label="Country"
        name="country"
        options={LocationData}
        value={formik.values.country.name}
        onChange={(e) => handleCountryChange(e)}
      />
      {/* <ErrorMessage name="country" component="div" /> */}
      {selectedCountry && (
        <>
          <DropdownField
            label="State"
            name="states"
            options={selectedCountry?.states}
            value={formik.values.state.name}
            onChange={(e) => handleStateChange(e)}
          />
          {/* <ErrorMessage name="state" component="div" /> */}
        </>
      )}
      {selectedState && (
        <>
          <DropdownField
            label="District"
            name="districts"
            options={selectedState?.districts}
            value={formik.values.districts.name}
            onChange={formik.handleChange}
          />
          {/* <ErrorMessage name="district" component="div" /> */}
        </>
      )}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CreateForm;
