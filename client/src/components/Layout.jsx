// Layout Component
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-16 pb-12 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 flex">
        <aside className="w-64 bg-white border-r border-gray-100 hidden lg:block">
          <DashboardSidebar />
        </aside>
        <main className="flex-1 p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

function DashboardSidebar() {
  const { user, isOrganizer, isAttendee, isVolunteer } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const getNavItems = () => {
    if (isOrganizer) {
      return [
        { path: '/organizer/dashboard', label: 'Dashboard', icon: HomeIcon },
        { path: '/organizer/events', label: 'My Events', icon: CalendarIcon },
        { path: '/organizer/sessions', label: 'Sessions', icon: DocumentTextIcon },
        { path: '/organizer/registrations', label: 'Registrations', icon: UsersIcon },
      ];
    }
    if (isAttendee) {
      return [
        { path: '/attendee/dashboard', label: 'Dashboard', icon: HomeIcon },
        { path: '/attendee/events', label: 'My Events', icon: CalendarIcon },
        { path: '/attendee/sessions', label: 'My Sessions', icon: DocumentTextIcon },
        { path: '/attendee/tickets', label: 'My Tickets', icon: TicketIcon },
      ];
    }
    if (isVolunteer) {
      return [
        { path: '/volunteer/dashboard', label: 'Dashboard', icon: HomeIcon },
        { path: '/volunteer/scanner', label: 'Scan QR', icon: QrCodeIcon },
        { path: '/volunteer/checkins', label: 'Check-ins', icon: ClipboardCheckIcon },
      ];
    }
    return [];
  };
  
  const navItems = getNavItems();
  
  return (
    <nav className="p-4 space-y-1">
      <div className="px-3 py-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Menu</p>
      </div>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-primary-50 text-primary-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {item.label}
          </Link>
        );
      })}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="px-3 text-xs text-gray-500">
          Logged in as <span className="font-medium text-gray-700">{user?.fullName}</span>
        </p>
        <p className="px-3 text-xs text-gray-500 mt-1">
          Role: <span className="font-medium text-gray-700 capitalize">{user?.role}</span>
        </p>
      </div>
    </nav>
  );
}

// Sidebar Icons
function HomeIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
}
function CalendarIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
}
function DocumentTextIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
}
function UsersIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
}
function TicketIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5zm0 0l3 3m0 0l3-3m-3 3l3 3m-3-3l-3 3" /></svg>;
}
function QrCodeIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
}
function ClipboardCheckIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
}

import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';