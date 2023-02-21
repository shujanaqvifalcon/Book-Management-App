/**
 * All api routes handles here
 * @author Shuja Naqvi
 */
const router = require('express').Router();

// Parent Routes
router.use('/library', require('./library')); // All the library routes
router.use('/book', require('./book')); // All the book routes
router.use('/author', require('./author')); // All the author routes

// Export
module.exports = router;
