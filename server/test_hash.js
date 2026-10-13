const bcrypt = require('bcrypt');
const hash = '$2b$10$K7g5ZqLX8Jm9kV2qWzY3uOq8v3X9yP6mN4bC2dF1eG7hJ8iK9lM0nO';
bcrypt.compare('Password123!', hash).then(result => console.log('Match:', result));