export const SERVICES = [
  ['✈', 'Flight Tickets', 'flight-tickets', 'We offer hassle-free flight bookings with the best fares across domestic and international airlines.'],
  ['🌍', 'International Tours', 'international-tours', 'Explore the world with our carefully curated international tour packages tailored to your dreams.'],
  ['🇮🇳', 'Domestic Tours', 'domestic-tours', 'Discover the beauty of India, from the Himalayas to the backwaters of Kerala.'],
  ['👥', 'Group Tours', 'group-tours', 'Travel together and make memories with our exclusive group tour packages at discounted rates.'],
  ['✨', 'Customised Tours', 'customised-tours', 'Build your own itinerary. You dream it, we plan it down to the last detail.'],
  ['💼', 'Corporate Tours', 'corporate-tours', 'Professional travel management for business trips, team building, and MICE events.'],
  ['👨‍👩‍👧', 'Family Tours', 'family-tours', 'Safe, fun, and relaxing holidays designed perfectly for all age groups.'],
  ['🕌', 'Pilgrim Tours', 'pilgrim-tours', 'Spiritual journeys organized with the utmost care and respect for traditions.'],
  ['🚢', 'Cruise Tours', 'cruise-tours', 'Sail the seas in luxury. Experience the magic of ocean and river cruises worldwide.'],
  ['🏨', 'Hotels & Houseboats', 'hotels-houseboats', 'Premium accommodation bookings ranging from luxury resorts to traditional Kerala houseboats.'],
  ['🛡️', 'Travel Insurance', 'travel-insurance', 'Travel with peace of mind. Comprehensive coverage for health, luggage, and trip cancellations.'],
  ['📋', 'Visa Assistance', 'visa-assistance', 'Expert guidance and hassle-free processing for all your tourist and business visa needs.']
];

export const DESTINATIONS = [
  { 
    id: 'kerala', 
    name: 'Kerala', 
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600', 
    desc: 'Experience the serene backwaters, lush hill stations, and vibrant culture of God\'s Own Country.',
    explore: ['Munnar Tea Gardens', 'Alleppey Backwaters', 'Kochi Fort', 'Wayanad Forests'],
    ideas: ['Romantic Houseboat Stay', 'Ayurvedic Retreat', 'Wildlife Safari'],
    itinerary: [
      { day: 1, title: 'Arrival at Kochi', desc: 'Arrive at Kochi airport, transfer to hotel. Explore Fort Kochi and watch a Kathakali performance.' },
      { day: 2, title: 'Munnar Hills', desc: 'Drive to Munnar, enjoying the scenic waterfalls. Check-in and relax amidst tea gardens.' },
      { day: 3, title: 'Alleppey Backwaters', desc: 'Transfer to Alleppey. Check into a traditional houseboat for a magical overnight cruise.' }
    ]
  },
  { 
    id: 'dubai',  
    name: 'Dubai', 
    img: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=600', 
    desc: 'Marvel at futuristic skyscrapers, luxurious shopping, and breathtaking desert safaris.',
    explore: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Dubai Marina'],
    ideas: ['Desert Safari with BBQ', 'Dhow Cruise Dinner', 'Skydive Dubai'],
    itinerary: [
      { day: 1, title: 'City Tour & Dhow Cruise', desc: 'Half-day city tour followed by a relaxing evening Dhow Cruise with dinner.' },
      { day: 2, title: 'Desert Safari', desc: 'Thrilling dune bashing, camel rides, and traditional Arabian dinner in the desert camp.' },
      { day: 3, title: 'Burj Khalifa & Shopping', desc: 'Visit the Top of Burj Khalifa and enjoy shopping at the massive Dubai Mall.' }
    ]
  },
  { 
    id: 'maldives',
    name: 'Maldives', 
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600', 
    desc: 'Relax in private overwater villas surrounded by crystal-clear turquoise waters.',
    explore: ['Bioluminescent Beach', 'Male City', 'Coral Reefs', 'Underwater Restaurants'],
    ideas: ['Honeymoon Escape', 'Scuba Diving Adventure', 'Island Hopping'],
    itinerary: [
      { day: 1, title: 'Speedboat to Resort', desc: 'Arrive in Male and transfer to your luxury water villa via speedboat or seaplane.' },
      { day: 2, title: 'Snorkeling & Spa', desc: 'Explore vibrant coral reefs in the morning, followed by a relaxing couple\'s spa.' },
      { day: 3, title: 'Sunset Cruise', desc: 'Enjoy a romantic sunset dolphin cruise and a private beach dinner.' }
    ]
  },
  { 
    id: 'europe', 
    name: 'Europe', 
    img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600', 
    desc: 'Journey through history, art, and romance across iconic European cities.',
    explore: ['Eiffel Tower, Paris', 'Colosseum, Rome', 'Swiss Alps', 'Canals of Venice'],
    ideas: ['Euro Rail Adventure', 'Historic City Tour', 'Culinary Journey'],
    itinerary: [
      { day: 1, title: 'Paris Arrival', desc: 'Arrive in Paris. Evening cruise on the Seine River.' },
      { day: 2, title: 'Swiss Alps', desc: 'Train to Switzerland. Enjoy panoramic views of snow-capped mountains.' },
      { day: 3, title: 'Rome Exploration', desc: 'Fly to Rome. Visit the Vatican, Colosseum, and enjoy authentic Italian cuisine.' }
    ]
  },
  { 
    id: 'bali',   
    name: 'Bali', 
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600', 
    desc: 'Discover lush rice terraces, ancient temples, and vibrant island nightlife.',
    explore: ['Ubud Rice Terraces', 'Uluwatu Temple', 'Mount Batur', 'Seminyak Beaches'],
    ideas: ['Yoga Retreat', 'Surfing Lessons', 'Temple Tour'],
    itinerary: [
      { day: 1, title: 'Seminyak Sunset', desc: 'Arrive in Bali. Check into a private pool villa and enjoy the sunset at Seminyak.' },
      { day: 2, title: 'Ubud Culture', desc: 'Visit the Sacred Monkey Forest and the iconic Tegalalang Rice Terraces.' },
      { day: 3, title: 'Nusa Penida Day Trip', desc: 'Take a fast boat to Nusa Penida and visit Kelingking Beach.' }
    ]
  },
  { 
    id: 'singapore',
    name: 'Singapore', 
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600', 
    desc: 'A melting pot of cultures, world-class gardens, and modern marvels.',
    explore: ['Gardens by the Bay', 'Marina Bay Sands', 'Sentosa Island', 'Universal Studios'],
    ideas: ['Family Fun Trip', 'Luxury Shopping', 'Night Safari'],
    itinerary: [
      { day: 1, title: 'Night Safari', desc: 'Arrive and relax. In the evening, experience the world-famous Night Safari.' },
      { day: 2, title: 'Universal Studios', desc: 'Full day of thrilling rides and entertainment at Universal Studios Singapore.' },
      { day: 3, title: 'Gardens by the Bay', desc: 'Explore the Flower Dome, Cloud Forest, and catch the Supertree light show.' }
    ]
  },
  { 
    id: 'thailand',
    name: 'Thailand', 
    img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600', 
    desc: 'Enjoy pristine beaches, ornate temples, and world-renowned street food.',
    explore: ['Phi Phi Islands', 'Grand Palace, Bangkok', 'Chiang Mai Temples', 'Phuket Night Market'],
    ideas: ['Island Hopping', 'Thai Cooking Class', 'Full Moon Party'],
    itinerary: [
      { day: 1, title: 'Bangkok City Tour', desc: 'Visit the Grand Palace and Wat Phra Kaew. Enjoy street food in the evening.' },
      { day: 2, title: 'Fly to Phuket', desc: 'Arrive in Phuket. Relax on Patong Beach and explore Bangla Road.' },
      { day: 3, title: 'Phi Phi Island Tour', desc: 'Full-day speedboat tour to the stunning Phi Phi Islands.' }
    ]
  },
  { 
    id: 'malaysia',
    name: 'Malaysia', 
    img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600', 
    desc: 'Experience the perfect blend of modern cities, rainforests, and diverse cultures.',
    explore: ['Petronas Twin Towers', 'Batu Caves', 'Langkawi Cable Car', 'Penang Street Art'],
    ideas: ['Twin City Tour', 'Rainforest Adventure', 'Food Trail in Penang'],
    itinerary: [
      { day: 1, title: 'Kuala Lumpur', desc: 'Arrive in KL. Visit the Petronas Twin Towers and shop at Bukit Bintang.' },
      { day: 2, title: 'Batu Caves & Genting', desc: 'Morning visit to Batu Caves, followed by a trip to Genting Highlands.' },
      { day: 3, title: 'Langkawi Beaches', desc: 'Fly to Langkawi for a relaxing beach getaway and the SkyBridge tour.' }
    ]
  }
];
