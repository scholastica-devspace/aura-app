import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Message from './pages/Message'
import Notification from './pages/Notification'
import Settings from './pages/Settings'
import Rootlayout from './pages/Rootlayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<Navigate to="/signup" replace />} />
      
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/dashboard" element={<Rootlayout />}>

        <Route path="/dashboard/home" element={<Home />}></Route>
        <Route path="/dashboard/message" element={<Message />}></Route>
        <Route path="/dashboard/notification" element={<Notification />}></Route>
        <Route path="/dashboard/settings" element={<Settings />}></Route>

      </Route>
    </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App


