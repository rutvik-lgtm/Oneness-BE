import Accommodation from '../models/Accommodation.js';
import AccommodationBooking from '../models/AccommodationBooking.js';

// Get all accommodations
export const getAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.status(200).json({ success: true, data: accommodations });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Book an accommodation
export const bookAccommodation = async (req, res) => {
  try {
    const { accommodationId, fullName, email, phone, checkIn, checkOut } = req.body;

    const accommodation = await Accommodation.findById(accommodationId);
    if (!accommodation) {
      return res.status(404).json({ success: false, message: 'Accommodation option not found' });
    }

    if (accommodation.availableCount <= 0) {
      return res.status(400).json({ success: false, message: 'Accommodation option fully booked' });
    }

    // Calculate number of days
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1; // Minimum 1 day

    const totalPrice = accommodation.price * diffDays;

    const booking = new AccommodationBooking({
      accommodationId,
      fullName,
      email,
      phone,
      checkIn,
      checkOut,
      totalPrice
    });

    await booking.save();

    // Reduce available rooms
    accommodation.availableCount -= 1;
    await accommodation.save();

    res.status(201).json({ success: true, message: 'Accommodation booked successfully!', data: booking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
