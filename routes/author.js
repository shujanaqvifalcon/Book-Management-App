/**
 * Author CRUD routes
 * @author Shuja Naqvi
 */
const router = require('express').Router();
const authors = require('../controllers/authors');
const {validateAuthor ,isValidated}=require("../middleware/validators")
/**
 * ////////////////////////// Routes /////////////////////////
 * @method get get all authors
 * @method post create authors
 * @method put update  authors
 * 
*/

// Read
router.get('/', authors.getAll); // Get all authors at once
//create
router.post("/",validateAuthor ,isValidated, authors.create)  //create a new author
// Read one
router.get('/:id', authors.getById); // Get one author at once
//update
router.put("/:id",validateAuthor ,isValidated,authors.update) //Update a author
//soft delete
router.put("/soft-delete/:id",authors.softDelete) //soft delete a author
// Export
module.exports = router;
