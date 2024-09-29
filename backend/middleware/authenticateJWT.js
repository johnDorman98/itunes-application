const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
  // Get the authorization header
  const authHeader = req.headers.authorization;
  
  // If the authorization header is not present, return 401 Unauthorized
  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Get the token from the authorization header
  const token = authHeader.split(' ')[1];

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  // Verify the token
  try {
    // Decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Set the user in the request object
    req.user = decodedToken;

    // Call the next middleware
    next();
  } catch (error) {
    // If the token is invalid, return 401 Unauthorized
    return res.status(401).json({ message: 'Invalid Token' });
  }
}

module.exports = authenticateJWT;