import Tour from '../models/Tour.js';
import TourBooking from '../models/TourBooking.js';

// Get all tours
export const getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({ success: true, data: tours });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Get single tour option by ID
export const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour option not found' });
    }
    res.status(200).json({ success: true, data: tour });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Book a tour
export const bookTour = async (req, res) => {
  try {
    const { tourId, fullName, email, phone } = req.body;

    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour option not found' });
    }

    const booking = new TourBooking({
      tourId,
      fullName,
      email,
      phone,
      totalPrice: tour.price
    });

    await booking.save();

    res.status(201).json({ success: true, message: 'Tour booked successfully!', data: booking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Get all tour bookings (Admin view)
export const getTourBookings = async (req, res) => {
  try {
    const bookings = await TourBooking.find()
      .populate('tourId')
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Get single tour booking by ID
export const getTourBookingById = async (req, res) => {
  try {
    const booking = await TourBooking.findById(req.params.id).populate('tourId');
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

