import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import style from '../../../assets/css/login.module.css'

const ErrorMsgComp = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className={style.errorMsg}>{message}</p>}
    />
  )
}

export default ErrorMsgComp
