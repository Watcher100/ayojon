// Home/Landing Page
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="ml-2">New: AI-powered Event Help Chatbot</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight text-balance mb-6">
              Smart conference planning{' '}
              <span className="text-primary-600">and personalized registration</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Ayojon helps organizers create events with sessions and seat limits, 
              lets attendees register and pick sessions, generates QR tickets, 
              and enables volunteers to scan and check people in — all in one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup" className="btn-primary w-full sm:w-auto py-3 px-8 text-lg">
                Get Started Free
              </Link>
              <Link to="/login" className="btn-outline w-full sm:w-auto py-3 px-8 text-lg">
                Sign In
              </Link>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-1">10K+</div>
              <div className="text-gray-600 text-sm">Events Managed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-1">500K+</div>
              <div className="text-gray-600 text-sm">Attendees Registered</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-primary-600 mb-1">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime Guarantee</div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 hidden lg:block">
          <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Everything you need to run successful events
            </h2>
            <p className="text-lg text-gray-600">
              From event creation to check-in, Ayojon covers the full conference lifecycle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-hover p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Organizers</h3>
              <p className="text-gray-600 mb-4">Create events, manage sessions with seat limits, publish programs, and track registrations in real-time.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>Event & session management</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>Seat limits & clash prevention</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>CSV exports & dashboard</li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="card-hover p-6">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Attendees</h3>
              <p className="text-gray-600 mb-4">Browse events, register for sessions, get QR tickets, and receive email updates when sessions change.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>Session selection with clash check</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>QR code tickets</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>Email notifications</li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="card-hover p-6">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Volunteers</h3>
              <p className="text-gray-600 mb-4">Scan QR codes to check attendees in, prevent duplicate check-ins, and view real-time attendance.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>QR code scanner</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>Instant check-in validation</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>Clear error messages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Chatbot Preview */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-hover p-8 md:p-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl text-white">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </span>
                <span className="ml-2">Powered by Google Gemini AI</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Event Help Chatbot</h2>
              <p className="text-primary-100 text-lg mb-6">
                Ask questions in English or Bangla about the event schedule, venue, registration steps, and more. 
                The chatbot answers only from event data — if it doesn't know, it tells you to contact the organizer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="btn bg-white text-primary-600 hover:bg-primary-50 px-6 py-3">
                  Try the Chatbot
                </Link>
                <Link href="#" className="btn border-2 border-white text-white hover:bg-white/10 px-6 py-3">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Ready to simplify your conference management?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizers, attendees, and volunteers using Ayojon. 
            Start your first event in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="btn-primary w-full sm:w-auto py-3 px-8 text-lg">
              Create Free Account
            </Link>
            <Link to="/login" className="btn-secondary w-full sm:w-auto py-3 px-8 text-lg">
              Sign In to Existing Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}