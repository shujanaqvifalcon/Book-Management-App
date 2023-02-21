/**
 * All the validation
 * @author Shuja Naqvi
 */
const { check, validationResult } = require('express-validator');

/*
====================
Validations
====================
*/

// You can create multiple validations strategies (Read express-validator documentation for more details)
// Author Validation Validation
exports.validateAuthor = [
  check('name', 'Name is required.').notEmpty().trim(),
  check('dob', 'dob is required.').notEmpty().trim(),
  check('genre', 'genre is required.').notEmpty().trim(),
];

exports.validateLibrary = [
  check('name', 'Name is required.').notEmpty().trim(),
  check('address', 'address is required.').notEmpty().trim(),
];

/*
======================
Result
======================
*/

/**
 * To check if request validated successfully or not, according to our validation strategies
 * @param {object} req
 * @param {object} res
 * @param {*} next
 */
exports.isValidated = (req, res, next) => {
  const errors = validationResult(req); // Validating the request by previous middleware's strategy
  if (!errors.isEmpty()) {
    // On error
    res.status(400).send({ success: false, message: errors.array()[0].msg }); // Sending first error to the client from array of errors
  } else {
    // Validated successfully
    next(); // Pass the request to next middleware or controller
  }
};
