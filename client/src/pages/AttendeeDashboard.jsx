// Attendee Dashboard
import { useAuth } from '../context/AuthContext';

export function AttendeeDashboard() {
  const { user } = useAuth();
  
  const stats = [
    { label: 'My Events', value: '0', icon: CalendarIcon, color: 'text-primary-600 bg-primary-100' },
    { label: 'My Sessions', value: '0', icon: DocumentTextIcon, color: 'text-green-600 bg-green-100' },
    { label: 'QR Tickets', value: '0', icon: TicketIcon, color: 'text-yellow-600 bg-yellow-100' },
    { label: 'Checked In', value: '0', icon: CheckCircleIcon, color: 'text-blue-600 bg-blue-100' },
  ];
  
  const upcomingFeatures = [
    { title: 'Browse Events', description: 'Discover and register for upcoming conferences', href: '/attendee/events' },
    { title: 'Select Sessions', description: 'Pick sessions with automatic clash detection', href: '/attendee/sessions' },
    { title: 'View Tickets', description: 'Access and download your QR code tickets', href: '/attendee/tickets' },
    { title: 'Check-in Status', description: 'Track your session check-ins and history', href: '/attendee/checkins' },
  ];
  
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome back, {user?.fullName}</h1>
        <p className="text-gray-600 mt-1">Here's an overview of your attendee dashboard</p>
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
              <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
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
function TicketIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5zm0 0l3 3m0 0l3-3m-3 3l3 3m-3-3l-3 3" /></svg>;
}
function CheckCircleIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function FeatureIcon({ className }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;
}