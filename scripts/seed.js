import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configure dotenv from backend folder root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

// Import Models
import Ticket from '../models/Ticket.js';
import Accommodation from '../models/Accommodation.js';
import Tour from '../models/Tour.js';
import TeamMember from '../models/TeamMember.js';
import Teacher from '../models/Teacher.js';
import BlogPost from '../models/BlogPost.js';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/oneness-festival';

const seedData = async () => {
  try {
    console.log('Connecting to database for seeding...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected successfully!');

    // Clear existing data
    console.log('Clearing old data...');
    await Ticket.deleteMany();
    await Accommodation.deleteMany();
    await Tour.deleteMany();
    await TeamMember.deleteMany();
    await Teacher.deleteMany();
    await BlogPost.deleteMany();
    console.log('Old data cleared.');

    // 1. Seed Tickets
    console.log('Seeding Tickets...');
    const tickets = await Ticket.insertMany([
      {
        title: 'General Pass',
        price: 99,
        description: 'Access to all main stage events, workshops, and standard camping area.',
        features: ['Access to 50+ Sessions', 'Standard Camping Space', 'Daily Yoga Workshops', 'Bazaar Access'],
        stock: 500
      },
      {
        title: 'VIP Pass',
        price: 249,
        description: 'Premium experience with priority seating, VIP lounge access, and deluxe tent privileges.',
        features: ['Front Row Seating', 'VIP Lounge & Bar Access', 'Complimentary Organic Meals', 'Deluxe Shower Facilities'],
        stock: 150
      },
      {
        title: 'VIP Pro Pass',
        price: 499,
        description: 'The ultimate luxury festival experience including 1-on-1 speaker meetups and private villa stay.',
        features: ['1-on-1 Teacher Meetup', 'Luxury Glamping Suite', 'Backstage Access Passes', 'All-Inclusive Spa Session'],
        stock: 50
      }
    ]);
    console.log(`${tickets.length} Tickets seeded.`);

    // 2. Seed Accommodations
    console.log('Seeding Accommodations...');
    const accommodations = await Accommodation.insertMany([
      {
        name: 'Shared Eco Tents',
        type: 'Glamping Tent',
        price: 40,
        amenities: ['Shared restrooms', 'Charging sockets', 'Sleeping bags included'],
        description: 'Eco-friendly shared tents ideal for budget-friendly nature-loving travelers.',
        image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=600',
        capacity: 4,
        availableCount: 40
      },
      {
        name: 'Private Luxury Tents',
        type: 'Luxury Glamping',
        price: 120,
        amenities: ['Private attached restroom', 'Double-sized bed', 'Electricity', 'Air Cooling'],
        description: 'Premium private safari tents with a beautiful sunset view of the valley.',
        image: 'https://images.unsplash.com/photo-1533873984035-25970ab07461?q=80&w=600',
        capacity: 2,
        availableCount: 20
      },
      {
        name: 'Standard Heritage Rooms',
        type: 'Resort Room',
        price: 200,
        amenities: ['Attached bathroom', 'King bed', 'AC', 'Free Wi-Fi', 'Room Service'],
        description: 'Classic heritage rooms in the main venue resort providing ultimate comfort.',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600',
        capacity: 2,
        availableCount: 15
      }
    ]);
    console.log(`${accommodations.length} Accommodations seeded.`);

    // 3. Seed Tours
    console.log('Seeding Tours...');
    const tours = await Tour.insertMany([
      {
        title: 'Spiritual Jaipur City Tour',
        price: 80,
        duration: '1 Full Day',
        description: 'Explore the spiritual landmarks of Jaipur including Galta Ji (Monkey Temple), Birla Temple, and Govind Dev Ji Temple.',
        route: ['Govind Dev Ji Temple', 'Galta Ji Temple', 'Albert Hall Museum', 'Birla Mandir'],
        images: ['https://images.unsplash.com/photo-1477584322813-ac791539efaa?q=80&w=600']
      },
      {
        title: 'Heritage Palace & Forts Expedition',
        price: 120,
        duration: '2 Days / 1 Night',
        description: 'A grand historic tour covering Amber Fort, Nahargarh, Jal Mahal, and the royal city palace.',
        route: ['Amber Fort', 'Jal Mahal', 'City Palace', 'Nahargarh Fort Sunset View'],
        images: ['https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600']
      }
    ]);
    console.log(`${tours.length} Tours seeded.`);

    // 4. Seed Team Members
    console.log('Seeding Team Members...');
    const teamMembers = await TeamMember.insertMany([
      {
        name: 'Aarav Sharma',
        role: 'Festival Director & Founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
        bio: 'Aarav has been organizing wellness and music festivals across India for over 12 years with a passion for community building.',
        socials: {
          linkedin: 'https://linkedin.com/in/aarav-sharma',
          instagram: 'https://instagram.com/aarav'
        }
      },
      {
        name: 'Meera Patel',
        role: 'Operations Head',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300',
        bio: 'Meera manages guest hospitality, accommodations, and site logistics to ensure a seamless and sustainable event.',
        socials: {
          linkedin: 'https://linkedin.com/in/meera-patel',
          instagram: 'https://instagram.com/meera'
        }
      }
    ]);
    console.log(`${teamMembers.length} Team Members seeded.`);

    // 5. Seed Teachers
    console.log('Seeding Teachers/Speakers...');
    const teachers = await Teacher.insertMany([
      {
        name: 'Swami Dhyan Saraswati',
        title: 'Vedic Meditation Guru',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=300',
        bio: 'Swami Ji has dedicated his life to teaching Vedic scriptures, mindfulness, and the ancient art of silence.',
        details: 'Swami Dhyan Saraswati leads spiritual discourses globally. In this festival, he will conduct the sunrise meditation and guided self-inquiry circles. His teachings bridge traditional Vedic wisdom with modern-day psychological research.',
        socials: {
          facebook: 'https://facebook.com/swamidhyan',
          instagram: 'https://instagram.com/swami_dhyan'
        }
      },
      {
        name: 'Anjali Rao',
        title: 'Hatha & Vinyasa Yoga Specialist',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300',
        bio: 'Anjali teaches yoga as a holistic path toward physical strength, mental clarity, and spiritual alignment.',
        details: 'Anjali Rao is a certified E-RYT 500 instructor. She will guide the daily flow sessions and alignment clinics. She focuses on breath-driven movements and customized pose adjustments for all practice levels.',
        socials: {
          linkedin: 'https://linkedin.com/in/anjali-yoga',
          instagram: 'https://instagram.com/anjalirao'
        }
      }
    ]);
    console.log(`${teachers.length} Teachers seeded.`);



    // 7. Seed Blog Posts
    console.log('Seeding Blog Posts...');
    const blogs = await BlogPost.insertMany([
      {
        title: '5 Ways Meditation Can Transform Your Daily Routine',
        slug: 'meditation-transform-daily-routine',
        excerpt: 'Discover the simple yet powerful ways introducing a daily meditation practice can reduce stress and increase clarity.',
        content: 'Meditation is not about stopping thoughts; it is about recognizing that you are more than your thoughts. In this article, we outline five practical techniques to incorporate meditation into a busy workday, from morning breathwork to evening gratitude logs. Learn how just 10 minutes a day can restructure neural pathways and reduce high cortisol levels.',
        author: 'Swami Dhyan Saraswati',
        coverImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600',
        tags: ['Meditation', 'Wellness', 'Mindfulness'],
        comments: [
          {
            name: 'Rohit Verma',
            email: 'rohit@example.com',
            comment: 'Very inspiring article! Looking forward to attending Swami Ji\'s session at the festival.'
          }
        ]
      },
      {
        title: 'The Art of Conscious Breathing: Pranayama for Beginners',
        slug: 'conscious-breathing-pranayama-beginners',
        excerpt: 'Unlock the power of your breath with these basic Pranayama exercises to calm the nervous system.',
        content: 'Pranayama is the control of breath or life force. By modifying the pace and depth of breathing, we directly influence the autonomic nervous system. We explain the techniques of Anulom Vilom (alternate nostril breathing) and Bhramari (humming bee breath), including their physiological benefits like lower heart rate and blood pressure.',
        author: 'Anjali Rao',
        coverImage: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=600',
        tags: ['Yoga', 'Pranayama', 'Breathing'],
        comments: []
      }
    ]);
    console.log(`${blogs.length} Blog posts seeded.`);

    console.log('Database Seeding Completed Successfully! Closing connection...');
    await mongoose.connection.close();
    console.log('Database Connection Closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
