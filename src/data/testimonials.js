// All guest testimonials — used by the testimonials slider.
// To edit a review, change it here.
import { AVATARS } from "./images";

// Each "Testimonial" object has these fields:
//   text - text
//   name - text
//   role - text
//   img - text
//   score - number (rating shown in the green badge, out of 5)

export const TESTIMONIALS = [
  {
    text: "“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more”",
    name: "John Doe",
    role: "Customer",
    img: AVATARS.john,
    score: 4.9,
  },
  {
    text: "“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more”",
    name: "Bella Andrew",
    role: "Guest",
    img: AVATARS.bella,
    score: 5.0,
  },
  {
    text: "“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more”",
    name: "Victoria Charles",
    role: "Guest",
    img: AVATARS.victoria,
    score: 4.8,
  },
  {
    text: "“From the moment we arrived, every detail felt considered — the room, the view, the quiet. Luxorio is the rare hotel that exceeds even its own photos. We rebooked for next year before we checked out.”",
    name: "Marcus Chen",
    role: "Business Traveller",
    img: AVATARS.marcus,
    score: 4.9,
  },
  {
    text: "“Our children still talk about the pool and the breakfast. The family room was spacious and spotless, and the staff treated us like old friends. A truly wonderful week.”",
    name: "Elena Petrova",
    role: "Family Guest",
    img: AVATARS.elena,
    score: 5.0,
  },
  {
    text: "“The signature suite and the sunset dinners made our honeymoon unforgettable. Impeccable service without ever feeling intrusive. We cannot wait to come back.”",
    name: "David Okafor",
    role: "Honeymooner",
    img: AVATARS.david,
    score: 4.8,
  },
];
