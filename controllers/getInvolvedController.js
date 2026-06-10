import GetInvolved from '../models/GetInvolved.js';

// Submit application
export const submitGetInvolved = async (req, res) => {
  try {
    const { type, fullName, email, phone, experience, message } = req.body;

    const application = new GetInvolved({
      type,
      fullName,
      email,
      phone,
      experience,
      message
    });

    await application.save();
    res.status(201).json({ success: true, message: 'Application submitted successfully!', data: application });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Get all applications (Admin view)
export const getApplications = async (req, res) => {
  try {
    const applications = await GetInvolved.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
