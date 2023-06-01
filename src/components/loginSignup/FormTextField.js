import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from '../../assets/css/login.module.css'

const FormTextField = ({ field, register }) => {
  let { type, name, label } = field
  const [showPass, setShowPass] = useState(false)

  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        label={label}
        type={showPass ? 'text' : type || 'text'}
        {...register(name)}
      />
      {/* Will show 'Show password' label & Checkbox if the type is password*/}
      {type === 'password' && (
        <div className={style.labelTest}>
          <input
            type="checkbox"
            onChange={() => {
              setShowPass(!showPass)
            }}
          />
          <span>Show Password</span>
        </div>
      )}
    </>
  )
}

export default FormTextField
