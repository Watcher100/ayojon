# Ayojon - Conference Management Platform

A full-stack conference management platform built with React, Express, MySQL, and JWT authentication.

## Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS + React Router
- **Backend**: Node.js + Express.js + MySQL (mysql2)
- **Auth**: JWT + bcrypt, role-based access control (Organizer, Attendee, Volunteer)
- **Email**: Nodemailer (configured for future use)
- **AI**: Google Gemini API (for Phase 5 chatbot)

## Project Structure

```
ayojon/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components (Navbar, Layout, ProtectedRoute)
│   │   ├── context/        # React Context (AuthContext)
│   │   ├── pages/          # Page components
│   │   ├── api/            # API client
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main app with routing
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Tailwind + custom styles
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/         # Database config
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Auth, validation middleware
│   │   ├── routes/         # API routes
│   │   └── index.js        # Server entry point
│   ├── package.json
│   └── .env.example
├── database/               # SQL schemas and seeds
│   ├── schema.sql          # Database schema
│   └── seed.sql            # Demo data
└── README.md
```

## Prerequisites

- Node.js 18+
- MySQL 8.0+
- npm or yarn

## Quick Start

### 1. Clone and Setup

```bash
cd ayojon
```

### 2. Database Setup

Create the database and run migrations:

```bash
# Login to MySQL
mysql -u root -p

# Run schema and seed
SOURCE database/schema.sql;
SOURCE database/seed.sql;
```

Or from command line:

```bash
mysql -u root -p < database/schema.sql
mysql -u root -p < database/seed.sql
```

### 3. Backend Setup

```bash
cd server
cp .env.example .env
# Edit .env with your MySQL credentials and JWT secret
npm install
npm run dev
```

Server runs on http://localhost:3001

### 4. Frontend Setup

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

Client runs on http://localhost:5173

## Environment Variables

### Server (.env)

```env
PORT=3001
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=ayojon

JWT_SECRET=your_super_secret_jwt_key_min_32_chars
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10

RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

CLIENT_URL=http://localhost:5173

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
EMAIL_FROM="Ayojon <noreply@ayojon.com>"

GEMINI_API_KEY=your_gemini_api_key
```

### Client (.env)

```env
VITE_API_URL=http://localhost:3001/api
```

## Demo Credentials

All demo users have password: **Password123!**

| Role | Email |
|------|-------|
| Organizer | organizer@ayojon.demo |
| Attendee | attendee@ayojon.demo |
| Volunteer | volunteer@ayojon.demo |

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/me | Get current user (requires auth) |

### Request/Response Format

All responses follow this format:

```json
{
  "success": true,
  "data": {},
  "message": "Optional message"
}
```

Error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": {}  // Validation errors if applicable
}
```

## Features Implemented (Phase 1)

- ✅ Project structure with client/server separation
- ✅ MySQL schema with users, events, rooms, sessions, registrations tables
- ✅ Demo seed data with one user per role
- ✅ Express server with helmet, CORS, rate limiting
- ✅ JWT authentication with bcrypt password hashing
- ✅ Role-based middleware (organizer, attendee, volunteer)
- ✅ Server-side validation with Zod
- ✅ React app with Tailwind CSS
- ✅ Modern, responsive UI with Ayojon branding
- ✅ Landing page with hero, features, CTA
- ✅ Login page with show/hide password, remember me
- ✅ Signup page with inline validation, role selector
- ✅ Auth context with token persistence (localStorage/sessionStorage)
- ✅ Protected routes with role-based guards
- ✅ 403 page for unauthorized access
- ✅ 404 page
- ✅ Navbar with user info and logout
- ✅ Placeholder dashboards for each role
- ✅ Demo credentials display on login page

## Role-Based Access

| Role | Dashboard | Features |
|------|-----------|----------|
| Organizer | /organizer/dashboard | Create events, manage sessions, view registrations, export CSV |
| Attendee | /attendee/dashboard | Browse events, select sessions, view QR tickets |
| Volunteer | /volunteer/dashboard | Scan QR codes, view check-ins |

## Development

### Running Both Servers

```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
cd client && npm run dev
```

### Building for Production

```bash
# Backend
cd server && npm start

# Frontend
cd client && npm run build
```

## Security Features

- Passwords hashed with bcrypt (cost 10)
- JWT tokens with configurable expiry
- Rate limiting on all endpoints
- Helmet.js for security headers
- CORS configured for specific origin
- Input validation on all endpoints
- Parameterized SQL queries (no SQL injection)
- Role-based authorization on both frontend and backend

## Next Phases

- **Phase 2**: Event and session management (Organizer)
- **Phase 3**: Attendee registration, session selection, seat limits
- **Phase 4**: QR tickets, volunteer scanner, check-in, email updates
- **Phase 5**: Gemini chatbot, CSV exports, dashboard
- **Phase 6**: Testing, bug fixes, responsive polish, deployment

## License

MIT