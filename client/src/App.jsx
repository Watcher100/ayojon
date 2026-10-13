// Main App Component
import { Routes, Route } from 'react-router-dom';
import { Layout, AuthLayout, DashboardLayout } from './components/Layout';
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { OrganizerDashboard } from './pages/OrganizerDashboard';
import { AttendeeDashboard } from './pages/AttendeeDashboard';
import { VolunteerDashboard } from './pages/VolunteerDashboard';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      
      {/* Auth Pages - Centered Layout */}
      <Route element={<AuthLayout />}>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Route>
      
      {/* Protected Routes - Organizer */}
      <Route element={<DashboardLayout />}>
        <Route element={<ProtectedRoute allowedRoles={['organizer']} />}>
          <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
        </Route>
      </Route>
      
      {/* Protected Routes - Attendee */}
      <Route element={<DashboardLayout />}>
        <Route element={<ProtectedRoute allowedRoles={['attendee']} />}>
          <Route path="/attendee/dashboard" element={<AttendeeDashboard />} />
        </Route>
      </Route>
      
      {/* Protected Routes - Volunteer */}
      <Route element={<DashboardLayout />}>
        <Route element={<ProtectedRoute allowedRoles={['volunteer']} />}>
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
        </Route>
      </Route>
      
      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;