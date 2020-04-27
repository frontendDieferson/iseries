import React, { useState } from 'react'

const Login = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className='login-form'>
      <img src='./logotipoiseries.png' class='img-fluid imgthumbnail' alt='iSéries' />
      <h4 class='modal-title'>Acesse Seu Gerenciador</h4>
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
      <div className='text-center small'>Não tem Conta? <a href='#'>Cadastre-se</a></div>
    </div>

  )
}

export default Login
