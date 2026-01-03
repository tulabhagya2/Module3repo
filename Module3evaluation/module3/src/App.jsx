import React from 'react'
import AuthProvider from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/admin/dashboard" element={<Admin />} />
            
          <Route path="/customer/dashboard" element={
            <ProtectedRoute>
              <Customer />
            </ProtectedRoute> } />
          
        </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
