// Navbar Component
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const { user, logout, isAuthenticated, isOrganizer, isAttendee, isVolunteer } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const getDashboardPath = () => {
    if (isOrganizer) return '/organizer/dashboard';
    if (isAttendee) return '/attendee/dashboard';
    if (isVolunteer) return '/volunteer/dashboard';
    return '/';
  };
  
  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'organizer': return 'badge-primary';
      case 'attendee': return 'badge-success';
      case 'volunteer': return 'badge-warning';
      default: return 'badge-gray';
    }
  };
  
  const getRoleLabel = (role) => {
    return role.charAt(0).toUpperCase() + role.slice(1);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Ayojon Home">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Ayojon</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                <Link 
                  to={getDashboardPath()} 
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">{user?.fullName}</span>
                  <span className={`${getRoleBadgeColor(user?.role)}`}>
                    {getRoleLabel(user?.role)}
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="btn-ghost text-sm px-3 py-1.5"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="btn-ghost text-sm">
                  Log in
                </Link>
                <Link to="/signup" className="btn-primary text-sm">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}