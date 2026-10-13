// Auth Controller
import bcrypt from 'bcrypt';
import { query } from '../config/db.js';
import { generateToken } from '../middleware/auth.js';
import dotenv from 'dotenv';

dotenv.config();

const BCRYPT_SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10');

export async function register(req, res) {
  try {
    const { fullName, email, phone, password, role } = req.validated;
    
    // Check if email already exists
    const existingUsers = await query('SELECT id FROM users WHERE email = :email', { email });
    if (existingUsers.length > 0) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }
    
    // Check if phone already exists
    const existingPhones = await query('SELECT id FROM users WHERE phone = :phone', { phone });
    if (existingPhones.length > 0) {
      return res.status(409).json({ success: false, message: 'Phone number already registered' });
    }
    
    // Hash password
    const passwordHash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
    
    // Insert user
    const result = await query(
      'INSERT INTO users (full_name, email, phone, password_hash, role) VALUES (:fullName, :email, :phone, :passwordHash, :role)',
      { fullName, email, phone, passwordHash, role }
    );
    
    const userId = result.insertId;
    const token = generateToken({ id: userId, email, role, fullName });
    
    res.status(201).json({
      success: true,
      data: { user: { id: userId, fullName, email, phone, role }, token },
      message: 'Registration successful'
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Registration failed. Please try again.' });
  }
}

export async function login(req, res) {
  try {
    const { email, password, rememberMe } = req.validated;
    
    // Find user by email
    const users = await query('SELECT * FROM users WHERE email = :email', { email });
    
    if (users.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    
    const user = users[0];
    
    // Verify password
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    
    // Generate token (longer expiry if rememberMe)
    const expiresIn = rememberMe ? '30d' : process.env.JWT_EXPIRES_IN || '7d';
    const token = generateToken({ 
      id: user.id, 
      email: user.email, 
      role: user.role, 
      fullName: user.full_name 
    }, expiresIn);
    
    res.json({
      success: true,
      data: { 
        user: { 
          id: user.id, 
          fullName: user.full_name, 
          email: user.email, 
          phone: user.phone, 
          role: user.role 
        }, 
        token 
      },
      message: 'Login successful'
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
  }
}

export async function me(req, res) {
  try {
    const users = await query(
      'SELECT id, full_name, email, phone, role, created_at FROM users WHERE id = :id',
      { id: req.user.id }
    );
    
    if (users.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    const user = users[0];
    res.json({
      success: true,
      data: { 
        user: { 
          id: user.id, 
          fullName: user.full_name, 
          email: user.email, 
          phone: user.phone, 
          role: user.role,
          createdAt: user.created_at
        } 
      }
    });
  } catch (error) {
    console.error('Me error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch user' });
  }
}