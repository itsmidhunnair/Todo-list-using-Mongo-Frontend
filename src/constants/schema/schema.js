import * as yup from 'yup'
import dayjs from 'dayjs'

// For setting min DOB of 5years old
const maxDate = dayjs().subtract(5, 'year').format('YYYY/MM/DD')

/**
 * Signin Form Input Schemas
 * @field First Name
 * @field Last Name
 * @field Email
 * @field Username
 * @field Password
 * @field Date of Birth
 * @field Gender
 */
export const signupSchema = yup
  .object()
  .shape({
    fname: yup.string().required('First Name is required.'),
    lname: yup.string().required('Last Name is required.'),
    email: yup
      .string()
      .email('Please Enter a Valid Email')
      .required('Email is required.'),
    username: yup
      .string()
      .matches(/[a-z0-9]$/)
      .required('Username is required.'),
    password: yup
      .string()
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        'Password must contain 1 special char., 1 number, and Alphabets'
      )
      .required('Password is required.'),
    dob: yup
      .date()
      .typeError('Please Enter a Valid Date')
      .required('Date of Birth is required.')
      .max(maxDate, 'Please Enter a Date of Min. 6 years back'),
    gender: yup.string().required('Gender is required.'),
  })
  .required()

/**
 * Login Form Input Schemas
 * @field Email
 * @field Password
 */
export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email('Please Enter a Valid Email').required(),
    password: yup.string().required(),
  })
  .required()
