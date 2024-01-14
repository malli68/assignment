import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  mobile: Yup.number().typeError('Mobile must be a number').required('Mobile is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  qualification: Yup.string().required('Qualification is required'),
  specialization: Yup.string().required("Specialization is required"),
  state: Yup.string().required('State is required'),
  district: Yup.string().required('District is required'),
  position:Yup.string().required('Position is required'),
  company:Yup.string().required("Company is required"), 
  country: Yup.string().required('Country is required'),
  states: Yup.string().required('State is required'),
  districts: Yup.string().required('District is required'),
  city: Yup.string().required('city is required'),
});