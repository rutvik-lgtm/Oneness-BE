import Gallery from '../models/Gallery.js';

// Get all gallery items
export const getGallery = async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.status(200).json({ success: true, data: galleryItems });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Create a new gallery item
export const createGalleryItem = async (req, res) => {
  try {
    const { title, url, type, category } = req.body;

    const galleryItem = new Gallery({
      title,
      url,
      type,
      category
    });

    await galleryItem.save();
    res.status(201).json({ success: true, data: galleryItem });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
