import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './Login.scss'

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('demo@example.com')
  const [password, setPassword] = useState('password')
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      setError(null)
      await login(email, password)
    } catch (err: any) {
      setError(err.message ?? 'Login failed')
    }
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit} aria-label="login form">
        <h1>Sign in</h1>
        <label>Email
          <input aria-label="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </label>
        <label>Password
          <input aria-label="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </label>
        {error && <div role="alert">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
