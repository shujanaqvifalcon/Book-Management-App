/**
 * book CRUD routes
 * @author Shuja Naqvi
 */
const router = require('express').Router();
const books = require('../controllers/books');

/**
 * ////////////////////////// Routes /////////////////////////
 * @method get get all books
 * @method post create book
 * @method put update  book
 * 
*/

// Read
router.get('/', books.getAll); // Get all books at once
//create
router.post("/", books.create)  //create a new book
// Read one
router.get('/:id', books.getById); // Get one book at once
//update
router.put("/:id",books.update) //Update a book
//soft delete
router.put("/soft-delete/:id",books.softDelete) //soft delete a book

// Export
module.exports = router;
