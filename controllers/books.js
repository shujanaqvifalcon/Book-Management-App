/**
 * Book CRUD controllers
 * @author Shuja Naqvi
 */
const {Book,Author,Library,LibraryBook} = require('../models');


/**
 * Create Book 
 * @param {object} req
 * @param {object} res
 */
exports.create = async (req, res) => {
  try {
    //find author id is valid or not
    const exisitingAuthor=await Author.findByPk(req.body.authorId)
    if(!exisitingAuthor) return res.status(404).json({success: false,message:"author not found"})
    //check alll libraryids are valid
    if(req?.body?.librayIds?.length > 0){
      const exisitingLibraries=await Library.findAll(
        { where:
          {
            id:req.body.librayIds
          }
        })
      if(exisitingLibraries.length<req.body.librayIds.length) return res.status(404).json({success: false,message:"some of librrays ids are invalid"})
    }
    // create  Book
    const book=await Book.create({
      name:req.body.name,
      year:req.body.year,
      authorId:req.body.authorId
    })
    //if libraries are assigned and book also created successfully
    if(req?.body?.librayIds?.length > 0 && book){
      await book.addLibrary(req.body.librayIds, { through: { selfGranted: false } });
    }
    //return new created Book
    res.status(200).json({success:true,message:"book added successfully",book})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get all Books
 * @param {object} req
 * @param {object} res
 */
exports.getAll = async (req, res) => {
  try {
    const books = await Book.findAll({
      where: { isDeleted: false },
      include:[
        {
          model: Author,
          attributes:['id', 'name'],
          as:"author"
        } ,
        {
          model:Library,
          attributes:['id', 'name','address'],
        }
      ] 
    });
   
    res.status(200).json({success:true,books})

  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get Book by id
 * @param {object} req
 * @param {object} res
 */
exports.getById = async (req, res) => {
  try {
    const {id}=req.params
    const book = await Book.findAll({
      where: { id: id },
      include:[
        {
          model: Author,
          attributes:['id', 'name'],
          as:"author"
        } ,
        {
          model:Library,
          attributes:['id', 'name','address'],
        }
      ] 
    });
    res.status(200).json({success:true,book})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Update Book
 * @param {object} req
 * @param {object} res
 */
exports.update = async (req, res) => {
  try {
    const {id}=req.params
    //check alll libraryids are valid
    if(req?.body?.librayIds?.length > 0){
      const exisitingLibraries=await Library.findAll(
        { where:
          {
            id:req.body.librayIds
          }
      })
      if(exisitingLibraries.length<req.body.librayIds.length) return res.status(404).json({success: false,message:"some of librrays ids are invalid"})
    }
    //update book
    await Book.update(req.body,
    {
        where:
        {
            id:id
        }
    });
    //if libraryIds provided, update 
    if(req?.body?.librayIds?.length > 0){
      const test=await Book.findByPk(id)
      if(test)await test.setLibraries(req.body.librayIds, { through: { selfGranted: false } });
    }
    res.status(200).json({success:true,message:"Book updated successfully"})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Soft Delete Book
 * @param {object} req
 * @param {object} res
 */
exports.softDelete = async (req, res) => {
  try {
    const {id}=req.params
    const book =await Book.update({isDeleted:true},
    {
        where:
        {
            id:id
        }
    });
    //book will return with 1 or 0 state if book is deleted
    if(!book.includes(1)) return res.status(404).json({message:"Book not found"})
    await LibraryBook.destroy({ where: {bookId:id}})
    res.status(200).json({success:true,message:"Book Deleted successfully"})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
