/**
 * Form Fields for Signup Form
 * @field First Name
 * @field Last Name
 * @field Email Address
 * @field Username
 * @field Password
 */
export const signupFormFields = [
  {
    label: 'First Name',
    name: 'fname',
  },
  {
    label: 'Last Name',
    name: 'lname',
  },
  {
    label: 'Email Address',
    name: 'email',
  },
  {
    label: 'Username',
    name: 'username',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
]

/**
 * Form Fields for Login Form
 * @field Email Address
 * @field Password
 */
export const loginFormFields = [
  {
    label: 'Email Address',
    name: 'email',
  },
  {
    type: 'password',
    label: 'Password',
    name: 'password',
  },
]
