/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

const Login = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className='login-form mb-10'>
      <img src='./logotipoiseries.png' class='img-fluid imgthumbnail mb-5' alt='iSéries' />
      <div className='form-group'>
        <input type='text' class='form-control' placeholder='Email' required='required' />
      </div>
      <div className='form-group'>
        <input type='password' class='form-control' placeholder='Senha' required='required' />
      </div>
      <div className='form-group small clearfix'>
        <label class='checkbox-inline'><input type='checkbox' />Lembrar-me</label>
        <a href='#' class='forgot-link'>Esqueceu sua Senha?</a>
      </div>
      <input type='submit' class='btn btn-primary btn-block btn-lg' value='Login' />
      <div className='text-center small mb-2'>Não tem Conta? <a href='#'>Cadastre-se</a></div>
    </div>

  )
}

export default Login
