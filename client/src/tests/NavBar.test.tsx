import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import NavBar from '../components/NavBar'

test('renders brand name', () => {
  render(
    <MemoryRouter>
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </MemoryRouter>
  )
  expect(screen.getByText(/AI Solutions/i)).toBeInTheDocument()
})
