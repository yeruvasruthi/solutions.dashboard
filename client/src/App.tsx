import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Insights from './pages/Insights'
import Settings from './pages/Settings'
import Login from './pages/Login'

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
          <Route path="/insights" element={<ProtectedRoute><Insights/></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </AuthProvider>
  )
}
