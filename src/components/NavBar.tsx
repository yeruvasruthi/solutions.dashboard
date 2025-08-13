import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './NavBar.scss'

export default function NavBar() {
  const { user, logout } = useAuth()
  const { pathname } = useLocation()
  return (
    <nav className="nav">
      <div className="brand">AI Solutions</div>
      {user && (
        <ul className="links">
          <li className={pathname==='/' ? 'active' : ''}><Link to="/">Dashboard</Link></li>
          <li className={pathname.startsWith('/insights') ? 'active' : ''}><Link to="/insights">Insights</Link></li>
          <li className={pathname.startsWith('/settings') ? 'active' : ''}><Link to="/settings">Settings</Link></li>
        </ul>
      )}
      <div className="spacer" />
      <div className="actions">
        {user ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
      </div>
    </nav>
  )
}
