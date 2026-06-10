import Ticket from '../models/Ticket.js';
import TicketBooking from '../models/TicketBooking.js';

// Get all tickets
export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({ success: true, data: tickets });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Book a ticket
export const bookTicket = async (req, res) => {
  try {
    const { ticketId, fullName, email, phone, quantity } = req.body;

    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ success: false, message: 'Ticket option not found' });
    }

    if (ticket.stock < quantity) {
      return res.status(400).json({ success: false, message: 'Not enough tickets in stock' });
    }

    const totalAmount = ticket.price * quantity;

    const booking = new TicketBooking({
      ticketId,
      fullName,
      email,
      phone,
      quantity,
      totalAmount
    });

    await booking.save();

    // Reduce stock
    ticket.stock -= quantity;
    await ticket.save();

    res.status(201).json({ success: true, message: 'Ticket booked successfully!', data: booking });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
