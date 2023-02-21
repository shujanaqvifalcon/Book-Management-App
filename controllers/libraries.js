/**
 * Library CRUD controllers
 * @author Shuja Naqvi
 */
const {Library} = require('../models');



/**
 * Create Library 
 * @param {object} req
 * @param {object} res
 */
exports.create = async (req, res) => {
  try {
    const library =await Library.create(req.body);
    res.status(200).json({success:true,library})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get all Libraries
 * @param {object} req
 * @param {object} res
 */
exports.getAll = async (req, res) => {
  try {
    const libraries =await Library.findAll({where:{
        isDeleted: false
    }});
    res.status(200).json({success:true,libraries})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Get Library by id
 * @param {object} req
 * @param {object} res
 */
exports.getById = async (req, res) => {
  try {
    const {id}=req.params
    const library =await Library.findByPk(id);
    if(!library) return res.status(404).json({success:false,message:"library not found"})
    res.status(200).json({success:true,library})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Update Library
 * @param {object} req
 * @param {object} res
 */
exports.update = async (req, res) => {
  try {
    const {id}=req.params
    const library =await Library.update(req.body,
    {
        where:
        {
            id:id
        }
    });
    if(!library) return res.status(404).json({message:"library not found"})
    res.status(200).json({success:true,message:"Updated successfully"})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Soft Delete Library
 * @param {object} req
 * @param {object} res
 */
exports.softDelete = async (req, res) => {
  try {
    const {id}=req.params
    const library =await Library.update({
        isDeleted:true
    },
    {
      where:
      {
        id:id
      }
    }
    );
    if(!library) return res.status(404).json({message:"library not found"})
    res.status(200).json({success:true,message:"soft delete successfully"})
  } catch (err) {
    // Error handling
    console.log('Error ----> ', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
