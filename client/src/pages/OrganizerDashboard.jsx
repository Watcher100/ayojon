// Organizer Dashboard
import { useAuth } from '../context/AuthContext';

export function OrganizerDashboard() {
  const { user } = useAuth();
  
  const stats = [
    { label: 'My Events', value: '0', icon: CalendarIcon, color: 'text-primary-600 bg-primary-100' },
    { label: 'Total Sessions', value: '0', icon: DocumentTextIcon, color: 'text-green-600 bg-green-100' },
    { label: 'Registrations', value: '0', icon: UsersIcon, color: 'text-yellow-600 bg-yellow-100' },
    { label: 'Checked In', value: '0', icon: ClipboardCheckIcon, color: 'text-red-600 bg-red-100' },
  ];
  
  const upcomingFeatures = [
    { title: 'Create Event', description: 'Add event details, dates, venue, and rooms', href: '/organizer/events/new' },
    { title: 'Manage Sessions', description: 'Add sessions with speakers, times, and seat limits', href: '/organizer/sessions' },
    { title: 'View Registrations', description: 'Track attendee registrations and session selections', href: '/organizer/registrations' },
    { title: 'Export Data', description: 'Download attendee lists and schedules as CSV', href: '/organizer/exports' },
  ];
  
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome back, {user?.fullName}</h1>
        <p className="text-gray-600 mt-1">Here's an overview of your organizer dashboard</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Upcoming Features */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingFeatures.map((feature, index) => (
            <a key={index} href={feature.href} className="card-hover p-5 group">
              <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <FeatureIcon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// Icons
function CalendarIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
}
function DocumentTextIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
}
function UsersIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
}
function ClipboardCheckIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>;
}
function FeatureIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;
}