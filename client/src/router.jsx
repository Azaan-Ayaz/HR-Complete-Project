import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpForm from './pages/signUp'
import LoginForm from './pages/login'


const Router = () => {
  return (
    <>
    <Routes>
    <Route path='signup' element={<SignUpForm/>}/>
    <Route path='login' element={<LoginForm/>}/>
    </Routes>      
    </>
  )
}

export default Router
