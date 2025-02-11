import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,createRoutesFromElements,createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx' 
import About from './components/About/About.jsx' 
import Contact from './components/Contact/Contact.jsx' 
import User from './components/User/User.jsx'
import Github, { githubInfoLoader }  from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'
import Registration from './components/Registration/Registration.jsx'



 const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route 
      path='github' 
      element={<Github/>}
      loader= {(githubInfoLoader)}/>
      

    </Route>
  )
 )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)