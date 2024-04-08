import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Contact from './components/ContactUs/Contact'
import About from './components/About/About'
import User from './components/User/User'
import Github from './components/GitHub/Github'
import {githubProfileLoader} from './components/GitHub/Github'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='user/:userId' element={<User />} />
    <Route 
    loader={githubProfileLoader}
    path='github' 
    element={<Github />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
