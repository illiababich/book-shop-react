import React from 'react'
import { NavigateFunction } from 'react-router-dom'
import { PayloadAction } from 'typesafe-actions'
import { LoginAction } from '../../store/auth/model'
import LoginForm from '../login/LoginForm'

function Login() {
  return (<div className='login-page-size'>
      <LoginForm
        error={null}
        loginFetch={function(payload: { loginData: LoginAction; callback: NavigateFunction }): PayloadAction<'LOGIN_FETCH', { loginData: LoginAction; callback: NavigateFunction }> {
              throw new Error('Function not implemented.')
          } } />
    </div>
  )
}

export default Login
