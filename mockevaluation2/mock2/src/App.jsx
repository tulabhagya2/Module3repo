import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Navigate } from 'react-router-dom'
import Login from './Login'
import Admin from './Admin'
import ProtectedRoute from './ProtectedRoute'
import AuthProvider from './context/AuthContext'

const App = () => {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />

        
      </Routes>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  )
}

export default App
