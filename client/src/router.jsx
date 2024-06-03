import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpForm from './pages/signUp'
import LoginForm from './pages/login'
import JobForm from './pages/jobCreate'
import Home from './pages/home'
import JobList from './pages/jobList'
import Navbar from './components/header'


const Router = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUpForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/create-job' element={<JobForm/>}/>
    <Route path='/jobs' element={<JobList/>}/>
    </Routes>      
    </>
  )
}

export default Router
