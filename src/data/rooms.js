// All rooms & suites — used by the room cards and the "Room Details" popup.
// To change a room's text, price, facts or amenities, edit it here.
import { ROOM_IMAGES } from "./images";

// Each "Room" object has these fields:
//   name - text
//   price - number (per night, in Indian rupees)
//   rating - number
//   reviews - number
//   img - text
//   size - text
//   bed - text
//   guests - number (maximum number of guests)
//   view - text
//   description - text
//   amenities - list of text

export const ROOMS = [
  {
    name: "Deluxe King Bed",
    price: 670,
    rating: 4.5,
    reviews: 128,
    img: ROOM_IMAGES.king,
    size: "45 m²",
    bed: "1 King Bed",
    guests: 2,
    view: "Garden View",
    description:
      "A calm, spacious retreat built around a plush king bed, with comfy armchairs for slow mornings, warm ambient lighting and a marble bathroom with a rain shower.",
    amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning", "Smart TV", "Mini Bar", "Rain Shower"],
  },
  {
    name: "Exclusive Deluxe",
    price: 610,
    rating: 4.8,
    reviews: 96,
    img: ROOM_IMAGES.exclusive,
    size: "40 m²",
    bed: "1 Queen Bed",
    guests: 2,
    view: "Pool View",
    description:
      "Contemporary comfort with curated artwork, a cloud-soft queen bed and a bright private hallway — a stylish base just steps from the resort pool.",
    amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning", "Coffee Machine", "Work Desk", "Room Service"],
  },
  {
    name: "Family Exclusive",
    price: 620,
    rating: 4.8,
    reviews: 142,
    img: ROOM_IMAGES.family,
    size: "60 m²",
    bed: "1 King + 2 Single Beds",
    guests: 4,
    view: "Garden View",
    description:
      "Plenty of space for the whole family, with a king bed for parents, two single beds for the kids, a sparkling chandelier and a big smart TV for movie nights.",
    amenities: ["Free Wi-Fi", "Breakfast Included", "Kids Welcome Pack", "Smart TV", "Mini Fridge", "Bathtub"],
  },
  {
    name: "Signature Suites",
    price: 620,
    rating: 4.8,
    reviews: 87,
    img: ROOM_IMAGES.signature,
    size: "75 m²",
    bed: "1 King Bed",
    guests: 2,
    view: "Ocean View",
    description:
      "Our signature suite with a separate living area, a private balcony facing the ocean and evening turndown service for a truly special stay.",
    amenities: ["Free Wi-Fi", "Breakfast Included", "Private Balcony", "Bathtub", "Mini Bar", "Turndown Service"],
  },
  {
    name: "Delux Family Room",
    price: 680,
    rating: 4.8,
    reviews: 104,
    img: ROOM_IMAGES.deluxFamily,
    size: "65 m²",
    bed: "2 Queen Beds",
    guests: 4,
    view: "Pool View",
    description:
      "Two queen beds dressed in crisp white linen, soft lamp light and a generous bathroom make this the perfect base for families and friends travelling together.",
    amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning", "Smart TV", "Coffee Machine", "Room Service"],
  },
  {
    name: "Twine Bed Room",
    price: 690,
    rating: 4.8,
    reviews: 75,
    img: ROOM_IMAGES.twine,
    size: "38 m²",
    bed: "2 Single Beds",
    guests: 2,
    view: "Courtyard View",
    description:
      "A stylish room with two comfortable single beds, elegant monochrome decor and artistic wall prints — ideal for friends or colleagues travelling together.",
    amenities: ["Free Wi-Fi", "Breakfast Included", "Air Conditioning", "Work Desk", "Smart TV", "Safe Box"],
  },
];
