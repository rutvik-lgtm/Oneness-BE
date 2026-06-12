import Inquiry from '../models/Inquiry.js';

// Submit a new inquiry
export const submitInquiry = async (req, res) => {
  try {
    const { type, fullName, email, phone, details } = req.body;

    const newInquiry = new Inquiry({
      type,
      fullName,
      email,
      phone,
      details
    });

    await newInquiry.save();

    res.status(201).json({
      success: true,
      message: 'Inquiry saved successfully!',
      data: newInquiry
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// Get all inquiries (Admin view)
export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: inquiries
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// Get single inquiry by ID
export const getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }
    res.status(200).json({
      success: true,
      data: inquiry
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// Delete / Resolve an inquiry
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      return res.status(404).json({
        success: false,
        message: 'Inquiry not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Inquiry deleted successfully!'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};
