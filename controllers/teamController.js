import TeamMember from '../models/TeamMember.js';

// Get all team members
export const getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.status(200).json({ success: true, data: teamMembers });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Create a new team member
export const createTeamMember = async (req, res) => {
  try {
    const { name, role, image, bio, socials } = req.body;

    const teamMember = new TeamMember({
      name,
      role,
      image,
      bio,
      socials
    });

    await teamMember.save();
    res.status(201).json({ success: true, data: teamMember });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
