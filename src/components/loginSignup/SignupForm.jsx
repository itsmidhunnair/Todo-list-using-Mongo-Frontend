import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from '@mui/material'

import FormTextField from './FormTextField'
import ErrorMsgComp from '../common/formElements/ErrorMsgComp'

// To serve the data of necessary Form Fields
import { signupFormFields } from '../../constants/formFieldObject'

import style from '../../assets/css/login.module.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from '../../constants/schema/schema'
import useSignup from '../../hooks/useSignup'
import { useSelector } from 'react-redux'
import Loader from '../common/loader/Loader'
// import useLogin from '../../hooks/useLogin'

// Login And Signup Form with all input Fields
const SignupForm = () => {
  const [showPass, setShowPass] = useState(false)

  const { loading } = useSelector((state) => state.auth);

  // const { checkToken, auth } = useLogin()
  const { userSignup } = useSignup()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(signupSchema),
  })

  return (
    <>
      <div className={style.formContainer}>
        <h2 className={style.head}>Sign Up</h2>
        {/* <form> */}
        <form onSubmit={handleSubmit(userSignup)}>
          {/*
           *
           *Form Fields are generated based on object 'formFields' from constant Directory > *formFieldsObject
           *
           */}
          {signupFormFields.map((field) => (
            <div key={field.name}>
              <FormTextField
                field={field}
                register={register}
                showPass={showPass}
                setShowPass={setShowPass}
              />
              <ErrorMsgComp errors={errors} name={field.name} />
            </div>
          ))}
          <TextField
            type="date"
            fullWidth
            label="Date of Birth"
            {...register("dob")}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <ErrorMsgComp errors={errors} name="dob" />
          <br />
          <FormLabel>Gender</FormLabel>
          <RadioGroup label="Select Gender" row>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              {...register("gender")}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              {...register("gender")}
            />
          </RadioGroup>
          <ErrorMsgComp errors={errors} name="gender" />
          <Button
            type="submit"
            disabled={loading}
            margin="normal"
            variant="contained"
          >
            {loading ? <Loader /> : "Submit"}
          </Button>
        </form>
        <div className={style.linkPart}>
          Already have an Account?
          <Link to="/login">Login Here</Link>
        </div>
      </div>
    </>
  );
}

export default SignupForm
