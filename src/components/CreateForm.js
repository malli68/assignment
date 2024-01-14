import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, useFormik } from "formik";
import DropdownField from "../reusableComponents/DropDownField";
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
  const [selectedDist, setSelectedDist] = useState(null);
  const [confirmationPopup, setConfirmationPopup] = useState(false);

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
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm, submitForm }) => {
      if (formik.isValidSync()) {
        setConfirmationPopup(true);
        resetForm();
        setSubmitting(false);
      } else {
        submitForm();
      }
    },
  });

useEffect(() => {
  if (selectedCountry) {
    formik.setFieldValue("country", selectedCountry.name || "");
    formik.setFieldValue("state", "");
    formik.setFieldValue("districts", "");
    formik.setFieldValue("city", "");
  }
}, [selectedCountry]);

useEffect(() => {
  if (selectedState) {
    formik.setFieldValue("state", selectedState.name || "");
    formik.setFieldValue("districts", "");
    formik.setFieldValue("city", "");
  }
}, [selectedState]);

useEffect(() => {
  if (selectedDist) {
    formik.setFieldValue("districts", selectedDist.name || "");
    formik.setFieldValue("city", "");
  }
}, [selectedDist]);

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

const handleDistChange = (e) => {
  const distId = parseInt(e.target.value);
  const selectedDist = selectedState.districts.find(
    (district) => district.id === distId
  );
  setSelectedDist(selectedDist);
  formik.handleChange(e);
};

const handleConfirmation = () => {
  dispatch(addUser(formik.values));
  formik.resetForm();
  setConfirmationPopup(false);
  formik.setSubmitting(false);
  formik.setStatus(true);
  alert("success");
  navigate("/edit");
};

const handleCancel = () => {
  setConfirmationPopup(false);
  formik.setStatus(null);
};

return (
  <form onSubmit={formik.handleSubmit} className="main-content">
    {FormElements.details.map((field) => {
      const isFieldTouched = formik.touched && formik.touched[field.name];
      return (
        <div className="form-group" key={field.id}>
          <label>{field.label}</label>
          <input
            className="input-control"
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            disabled={field.disabled}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {isFieldTouched && formik.errors[field.name] && (
            <div style={{ color: 'red' }}>{formik.errors[field.name]}</div>
          )}
        </div>
      );
    })}
    <DropdownField
      label="Country"
      name="country"
      options={LocationData}
      value={selectedCountry ? selectedCountry.id : ""}
      onChange={(e) => {
        handleCountryChange(e);
      }}
    />

    {selectedCountry && (
      <DropdownField
        label="State"
        name="state"
        options={selectedCountry?.states}
        value={selectedState ? selectedState.id : ""}
        onChange={(e) => {
          handleStateChange(e);
        }}
      />
    )}

    {selectedState && (
      <DropdownField
        label="District"
        name="districts"
        options={selectedState?.districts}
        value={selectedDist ? selectedDist.id : ""}
        onChange={(e) => {
          handleDistChange(e);
        }}
      />
    )}

    {selectedDist && (
      <DropdownField
        label="Cities"
        name="city"
        options={selectedDist?.cities}
        value={formik.values.city ? formik.values.city.name : ""}
        onChange={formik.handleChange}
      />
    )}

    {formik.status?.confirming && (
      <div className="success">Form submitted successfully!</div>
    )}

    {confirmationPopup && (
      <div className="confirmationPopupStyle">
        <p>Are you sure you want to submit the form?</p>
        <button onClick={handleConfirmation}>Yes</button>
        <button onClick={handleCancel}>No</button>
      </div>
    )}

    <div>
      {!confirmationPopup && (
        <button
          type="submit"
          disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      )}
    </div>
  </form>
);
};

export default CreateForm;