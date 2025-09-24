import Booking from "../Models/Booking.js";

const allowedRoutes = [
  { name: "Lahore ↔ Islamabad", location: "Lahore - Islamabad", price: 8300, meals: "Breakfast" },
  { name: "Karachi ↔ Hyderabad", location: "Karachi - Hyderabad", price: 800, meals: "None" },
  { name: "Islamabad ↔ Murree", location: "Islamabad - Murree", price: 1800, meals: "Breakfast" },
  { name: "Peshawar ↔ Swat", location: "Peshawar - Swat", price: 6320, meals: "Breakfast, Lunch" },
  { name: "Multan ↔ Bahawalpur", location: "Multan - Bahawalpur", price: 550, meals: "None" },
  { name: "Faisalabad ↔ Lahore", location: "Faisalabad - Lahore", price: 4650, meals: "Breakfast" },
  { name: "Quetta ↔ Karachi", location: "Quetta - Karachi", price: 5600, meals: "Lunch" },
  { name: "Rawalpindi ↔ Muzaffarabad", location: "Rawalpindi - Muzaffarabad", price: 3700, meals: "Breakfast" },
  { name: "Sialkot ↔ Lahore", location: "Sialkot - Lahore", price: 1050, meals: "None" },
  { name: "Gujranwala ↔ Islamabad", location: "Gujranwala - Islamabad", price: 3400, meals: "Breakfast, Lunch" },
  { name: "Hunza Valley (Karimabad, Attabad Lake, Passu Cones)", location: "Hunza Valley", price: 25000, meals: "Breakfast, Lunch, Dinner" },
  { name: "Skardu (Shangrila Lake, Deosai National Park, Shigar Fort)", location: "Skardu", price: 30000, meals: "Breakfast, Lunch, Dinner" },
  { name: "Swat Valley (Malam Jabba, Mingora, Kalam)", location: "Swat Valley", price: 15000, meals: "Breakfast, Lunch" },
  { name: "Murree & Galiyat (Patriata, Nathiagali, Ayubia)", location: "Murree & Galiyat", price: 12000, meals: "Breakfast, Lunch" },
  { name: "Fairy Meadows & Nanga Parbat Trek", location: "Fairy Meadows", price: 35000, meals: "Breakfast, Lunch, Dinner" },
  { name: "Lahore Heritage (Badshahi Mosque, Lahore Fort, Shalimar Gardens)", location: "Lahore Heritage", price: 8000, meals: "Lunch" },
  { name: "Islamabad & Margalla Hills (Daman-e-Koh, Monal, Trail 5)", location: "Islamabad - Monal", price: 9000, meals: "Breakfast" },
  { name: "Karachi Coastal Tour (Clifton Beach, Hawksbay, Manora Island)", location: "Karachi Coastal Tour", price: 10000, meals: "Lunch" },
  { name: "Thar Desert Safari (Mithi, Nagarparkar, Desert Festival)", location: "Thar Desert", price: 20000, meals: "Breakfast, Dinner" },
  { name: "Cholistan Desert & Derawar Fort", location: "Cholistan Desert", price: 18000, meals: "Breakfast, Lunch, Dinner" },
  { name: "Northern Peaks Explorer (Hunza, Skardu, Fairy Meadows)", location: "Northern Peaks", price: 40000, meals: "Breakfast, Lunch, Dinner" },
  { name: "Cultural Heritage Trail (Lahore, Multan, Uch Sharif)", location: "Cultural Heritage Trail", price: 15000, meals: "Breakfast, Lunch" },
  { name: "Sufi & Spiritual Journey (Sehwan Sharif, Data Darbar, Shah Rukn-e-Alam)", location: "Sufi & Spiritual Journey", price: 12000, meals: "Breakfast, Lunch" },
  { name: "Family-Friendly Retreats (Murree, Nathia Gali, Ayubia)", location: "Murree & Nathia Gali", price: 13000, meals: "Breakfast, Lunch" },
  { name: "Beach & Coastal Escape (Karachi, Gwadar, Ormara)", location: "Beach & Coastal Escape", price: 22000, meals: "Breakfast, Lunch, Dinner" },
  { name: "Adventure Trekking (Nanga Parbat Base Camp, Rakaposhi Trek)", location: "Adventure Trekking", price: 45000, meals: "Breakfast, Lunch, Dinner" },
  { name: "Desert Safari (Cholistan, Thar, Derawar Fort)", location: "Desert Safari", price: 20000, meals: "Breakfast, Lunch, Dinner" },
  { name: "Historical Wonders (Taxila, Mohenjo-daro, Harappa)", location: "Historical Wonders", price: 14000, meals: "Lunch" },
  { name: "Honeymoon Packages (Hunza, Swat, Skardu resorts)", location: "Honeymoon Packages", price: 50000, meals: "Breakfast, Lunch, Dinner" },
  { name: "Food & Culture Tours (Karachi street food, Lahore food street, Peshawar Qissa Khwani Bazaar)", location: "Food & Culture Tours", price: 10000, meals: "Breakfast, Lunch" }
];

export const createBooking = async (req, res) => {
  try {
    const { name, phone, destination, date, persons } = req.body;

    if (!destination || !destination.trim()) {
      return res.status(400).json({ message: "Destination is required" });
    }

    const destinationLower = destination.trim().toLowerCase();

    let route = allowedRoutes.find(
      r => r.location.toLowerCase() === destinationLower || r.name.toLowerCase() === destinationLower
    );

    if (!route) {
      route = allowedRoutes.find(
        r => r.location.toLowerCase().includes(destinationLower) || r.name.toLowerCase().includes(destinationLower)
      );
    }

    if (!route) {
      return res.status(400).json({
        message: `Booking not allowed for this route: ${destination}`,
        suggestions: allowedRoutes.map(r => `${r.location} (${r.name})`)
      });
    }

    const ticketNumber = `T-${Date.now().toString().slice(-6)}-${Math.random()
      .toString(36)
      .slice(2, 4)
      .toUpperCase()}`;

    const booking = await Booking.create({
      name,
      phone,
      destination: route.name,
      location: route.location,
      price: route.price * persons,
      meals: route.meals,
      date,
      persons,
      ticketNumber,
    });

    res.status(201).json({ message: "Booking created!", booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({ message: "Booking updated", updatedBooking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
