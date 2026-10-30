// Resort services shared by the service cards and the service-details modal.
import { SERVICE_IMAGES } from "./images";

// Each "ResortService" object has these fields:
//   slug - text
//   name - text
//   img - text
//   text - text
//   description - text
//   hours - text
//   location - text
//   highlights - list of text

export const RESORT_SERVICES = [
  {
    slug: "gym",
    name: "Gym Center",
    img: SERVICE_IMAGES.gym,
    text: "Stay active in our fully equipped fitness center with personal trainers, modern machines and sunrise yoga classes.",
    description: "Train at your own pace in a light-filled fitness space with cardio, strength, and functional training areas. Our resident team can create a simple routine that fits your stay.",
    hours: "Open daily, 5:30 AM - 10:00 PM",
    location: "Wellness Pavilion, Ground Floor",
    highlights: ["Modern cardio and strength equipment", "Complimentary towel and water station", "Private trainer sessions on request", "Sunrise yoga on selected mornings"],
  },
  {
    slug: "spa",
    name: "Spa & Massage",
    img: SERVICE_IMAGES.spa,
    text: "Recharge with signature hot-stone massages, aromatherapy and wellness rituals performed by expert therapists.",
    description: "Step into a quiet, restorative space created for complete relaxation. Choose from personalized massages, calming body rituals, facials, and couples treatments.",
    hours: "Open daily, 9:00 AM - 8:00 PM",
    location: "Serenity Spa, Garden Wing",
    highlights: ["Signature hot-stone massage", "Aromatherapy and body rituals", "Couples treatment room", "Advance reservations recommended"],
  },
  {
    slug: "pool",
    name: "Swimming Pool",
    img: SERVICE_IMAGES.pool,
    text: "Lap lanes, a relaxation jacuzzi and a kids' pool wrapped in tropical greenery - open from dawn to dusk.",
    description: "Swim, lounge, or simply take in the tropical surroundings from our main pool terrace. Separate areas make it easy to enjoy a relaxed day for adults, families, and confident swimmers alike.",
    hours: "Open daily, 6:00 AM - 8:00 PM",
    location: "Central Pool Terrace",
    highlights: ["Temperature-controlled main pool", "Dedicated children's splash area", "Jacuzzi and sun loungers", "Pool towel service included"],
  },
  {
    slug: "restaurant",
    name: "Restaurant & Bar",
    img: SERVICE_IMAGES.restaurant,
    text: "Savor coastal cuisine crafted by our chefs, then unwind at the rooftop bar with handcrafted cocktails.",
    description: "Our kitchen celebrates seasonal coastal ingredients with all-day dining, sunset small plates, and a carefully selected drinks menu. Every table is designed for an unhurried meal.",
    hours: "Breakfast 7:00 AM - 11:00 AM | Dinner 6:00 PM - 11:00 PM",
    location: "Azure Dining Room & Rooftop Bar",
    highlights: ["Fresh coastal cuisine", "Rooftop sunset cocktails", "Vegetarian and vegan options", "Private dining available"],
  },
  {
    slug: "car-rental",
    name: "Car Rental",
    img: SERVICE_IMAGES.car,
    text: "Explore the coastline in style with our premium chauffeur service and flexible self-drive packages.",
    description: "Discover more of the coast with a smooth, flexible transport option. Choose a self-drive car, a private chauffeur, or a curated day-trip itinerary prepared by our concierge.",
    hours: "Concierge desk open 24 hours",
    location: "Main Lobby Concierge",
    highlights: ["Premium self-drive options", "Private chauffeur service", "Airport collection available", "Tailored local itineraries"],
  },
  {
    slug: "jogging",
    name: "Jogging Track",
    img: SERVICE_IMAGES.jogging,
    text: "A shaded 2 km seaside running trail with fitness stations, perfect for morning miles above the waves.",
    description: "Start the day with fresh sea air on our shaded running loop. The route combines gentle terrain, sea views, rest stations, and space for an easy solo run or a guided morning walk.",
    hours: "Open daily from sunrise to sunset",
    location: "Seaside Gardens Trailhead",
    highlights: ["2 km landscaped loop", "Water and rest stations", "Scenic sea-view stretches", "Guided morning wellness walks"],
  },
];