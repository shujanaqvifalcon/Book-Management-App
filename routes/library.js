/**
 * library CRUD routes
 * @author Shuja Naqvi
 */
const router = require('express').Router();
const libraries = require('../controllers/libraries');
const {validateLibrary ,isValidated}=require("../middleware/validators")

/**
 * ////////////////////////// Routes /////////////////////////
 * @method get get all libraries
 * @method post create library
 * @method put update  library
 * 
*/

// Read
router.get('/', libraries.getAll); // Get all libraries at once
//create
router.post("/", validateLibrary ,isValidated,libraries.create)  //create a new library
// Read one
router.get('/:id', libraries.getById); // Get one library at once
//update
router.put("/:id",validateLibrary ,isValidated,libraries.update) //Update a library
//soft delete
router.put("/soft-delete/:id",libraries.softDelete) //soft delete a library

// Export
module.exports = router;
