-- Ayojon Demo Seed Data
-- Run this AFTER schema.sql to populate demo users
-- Password for all demo users: "Password123!" (hashed with bcrypt, cost 10)

USE ayojon;

-- Clear existing data (for re-seeding)
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE email_logs;
TRUNCATE TABLE registration_sessions;
TRUNCATE TABLE registrations;
TRUNCATE TABLE sessions;
TRUNCATE TABLE rooms;
TRUNCATE TABLE events;
TRUNCATE TABLE users;
SET FOREIGN_KEY_CHECKS = 1;

-- Demo Users (password: Password123!)
-- bcrypt hash for "Password123!" with cost 10: $2b$10$J2zTL2cD7PY/ccWKXM6a3.bsBVukFODxf4mc.EnqetvVEoaAp1gDy

INSERT INTO users (full_name, email, phone, password_hash, role) VALUES
('Demo Organizer', 'organizer@ayojon.demo', '+8801700000001', '$2b$10$J2zTL2cD7PY/ccWKXM6a3.bsBVukFODxf4mc.EnqetvVEoaAp1gDy', 'organizer'),
('Demo Attendee', 'attendee@ayojon.demo', '+8801700000002', '$2b$10$J2zTL2cD7PY/ccWKXM6a3.bsBVukFODxf4mc.EnqetvVEoaAp1gDy', 'attendee'),
('Demo Volunteer', 'volunteer@ayojon.demo', '+8801700000003', '$2b$10$J2zTL2cD7PY/ccWKXM6a3.bsBVukFODxf4mc.EnqetvVEoaAp1gDy', 'volunteer');

-- Demo Event
INSERT INTO events (organizer_id, name, description, start_date, end_date, venue, is_published) VALUES
(1, 'Tech Conference 2025', 'Annual technology conference bringing together developers, designers, and tech enthusiasts.', '2025-06-15', '2025-06-17', 'Dhaka Convention Center', TRUE);

-- Demo Rooms
INSERT INTO rooms (event_id, name, capacity) VALUES
(1, 'Main Hall', 200),
(1, 'Workshop Room A', 50),
(1, 'Workshop Room B', 50),
(1, 'Meeting Room', 30);

-- Demo Sessions
INSERT INTO sessions (event_id, room_id, title, speaker, start_time, end_time, capacity) VALUES
(1, 1, 'Opening Keynote: Future of AI', 'Dr. Sarah Ahmed', '2025-06-15 09:00:00', '2025-06-15 10:00:00', 200),
(1, 2, 'React Advanced Patterns', 'John Developer', '2025-06-15 10:30:00', '2025-06-15 12:00:00', 50),
(1, 3, 'Node.js Microservices', 'Jane Coder', '2025-06-15 10:30:00', '2025-06-15 12:00:00', 50),
(1, 4, 'Database Optimization', 'Mike DB', '2025-06-15 13:00:00', '2025-06-15 14:30:00', 30),
(1, 1, 'Closing Panel: Tech Careers', 'Panel Experts', '2025-06-17 16:00:00', '2025-06-17 17:30:00', 200);