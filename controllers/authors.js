/**
 * Author CRUD controllers
 * @author Shuja Naqvi
 */
const { Author } = require('../models');


/**
 * Create Author 
 * @param {object} req
 * @param {object} res
 */
exports.create = async (req, res) => {
  try {
    const author =await Author.create(req.body);
    res.status(200).json({success:true,author})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get all Authors
 * @param {object} req
 * @param {object} res
 */
exports.getAll = async (req, res) => {
  try {
    const authors =await Author.findAll({where:{
        isDeleted: false
    }});
    res.status(200).json({success:true,authors})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get Author by id
 * @param {object} req
 * @param {object} res
 */
exports.getById = async (req, res) => {
  try {
    const {id}=req.params
    const author =await Author.findByPk(id);
    if(!author) return res.status(404).json({success:false,message:"author not found"})
    res.status(200).json({success:true,author})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Update Author
 * @param {object} req
 * @param {object} res
 */
exports.update = async (req, res) => {
  try {
    const {id}=req.params
    const author =await Author.update(req.body,
    {
        where:
        {
            id:id
        }
    });
    if(!author) return res.status(404).json({message:"author not found"})
    res.status(200).json({success:true,message:"Updated successfully"})
   
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Soft Delete Author
 * @param {object} req
 * @param {object} res
 */
exports.softDelete = async (req, res) => {
  try {
    const {id}=req.params
    const author =await Author.update({
        isDeleted:true
    },
    {
      where:
      {
        id:id
      }
    }
    );
    if(!author) return res.status(404).json({message:"author not found"})
    res.status(200).json({success:true,message:"author updated successfully"})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
