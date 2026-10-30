// All blog articles — used by the blog cards and the article popup.
// To edit an article, change it here.
import { BLOG_IMAGES, AVATARS } from "./images";

// Each "BlogPost" object has these fields:
//   title - text
//   day - text (day number shown in the green date box)
//   mon - text (month + year shown in the green date box)
//   category - text (shown as the badge at the top of the article)
//   author - text
//   authorRole - text
//   authorImg - text
//   readTime - text
//   img - text
//   excerpt - text (lead paragraph, shown larger in the article)
//   paragraphs - list of text (body paragraphs)
//   quote - text (pull quote in the middle of the article)
//   listTitle - text
//   list - list of text (takeaway list at the end)

export const BLOG_POSTS = [
  {
    title: "Swiming Benefits Is Good For Your Health",
    day: "14",
    mon: "April 2026",
    category: "Health & Wellness",
    author: "John Doe",
    authorRole: "Travel Writer",
    authorImg: AVATARS.john,
    readTime: "6 min",
    img: BLOG_IMAGES.swimming,
    excerpt:
      "Swimming is one of the few workouts that trains the whole body while being gentle on your joints. Here is why our resort guests start every morning in the pool.",
    paragraphs: [
      "Water supports up to ninety percent of your body weight, which means swimming puts almost no stress on your knees, hips and spine. That makes it one of the safest forms of exercise for every age and fitness level.",
      "A single lap engages your arms, shoulders, core and legs at the same time, while the resistance of the water quietly builds strength. Many guests are surprised by how quickly they feel the difference after just two weeks of regular swimming.",
      "Swimming is also a wonderful heart workout. Thirty minutes of steady laps can lower blood pressure, improve circulation and lift your mood — all without breaking a sweat in the summer heat.",
    ],
      quote: "Swimming is the perfect workout: it is easy on the joints, tough on calories and kind to the mind.",
    listTitle: "Top Benefits Of Swimming",
    list: [
      "Strengthens the heart and improves circulation",
      "Full-body workout with zero joint impact",
      "Burns calories and supports healthy weight",
      "Reduces stress and improves sleep quality",
    ],
  },
  {
    title: "Availble Now Health Club For Your Fitness",
    day: "15",
    mon: "April 2026",
    category: "Fitness",
    author: "Bella Andrew",
    authorRole: "Fitness Coach",
    authorImg: AVATARS.bella,
    readTime: "5 min",
    img: BLOG_IMAGES.fitness,
    excerpt:
      "Our brand-new health club is now open to every guest. Modern machines, personal trainers and recovery zones — everything you need to keep moving on holiday.",
    paragraphs: [
      "The new health club sits at the heart of the resort and is open daily from 6 in the morning until 10 at night. Floor-to-ceiling windows overlook the gardens, so even an early workout feels like a treat.",
      "The gym floor is equipped with the latest cardio and strength machines, free weights and functional training zones. If you are not sure where to start, our personal trainers offer free one-to-one inductions for all guests.",
      "After your workout, the recovery zone is the place to be: a sauna, a steam room and chilled towels await. Group classes — from yoga to high-energy circuits — run every morning and evening.",
    ],
    quote: "A holiday should make you stronger, not just more rested — the health club keeps both promises.",
    listTitle: "What You Get As A Member",
    list: [
      "Personal training sessions on request",
      "Daily group classes included in your stay",
      "Modern cardio and strength equipment",
      "Sauna, steam room and recovery zone",
    ],
  },
  {
    title: "Improving Business Growth With Technology",
    day: "16",
    mon: "April 2026",
    category: "Technology",
    author: "Victoria Charles",
    authorRole: "Tech Columnist",
    authorImg: AVATARS.victoria,
    readTime: "7 min",
    img: BLOG_IMAGES.technology,
    excerpt:
      "Smart technology is quietly reshaping the way hotels welcome their guests. From online check-in to smart rooms, here is how digital tools create a smoother stay.",
    paragraphs: [
      "Guests today expect a hotel to feel as intuitive as their own home. Mobile check-in, digital room keys and in-app requests remove the small frictions — queues at the desk, lost key cards, phone calls at midnight — that used to shape a stay.",
      "Behind the scenes, technology helps the team too. Smart room controls adjust lighting and temperature automatically, while booking data shows us which rooms and services our guests love most.",
      "The best part is that none of it feels cold. Used well, technology disappears into the background and leaves more time for the human moments that make a holiday memorable.",
    ],
    quote: "The best hotel technology is the kind you never notice — it simply makes every moment of your stay smoother.",
    listTitle: "How Technology Improves Your Stay",
    list: [
      "Online booking and mobile check-in",
      "Smart rooms with app and voice control",
      "Data insights that shape better service",
      "Contactless payments and digital concierge",
    ],
  },
  {
    title: "Spa Rituals That Restore Body And Mind",
    day: "17",
    mon: "April 2026",
    category: "Wellness",
    author: "Ruth Edward",
    authorRole: "Wellness Therapist",
    authorImg: AVATARS.ruth,
    readTime: "5 min",
    img: BLOG_IMAGES.spa,
    excerpt:
      "From hot-stone massages to aromatherapy rituals, our spa is designed to quiet the mind and restore the body. Here is what a perfect spa day at Luxorio looks like.",
    paragraphs: [
      "A spa day at Luxorio begins with a welcome ritual — herbal tea, a soft robe and a moment of silence away from the noise of everyday life. Our therapists then tailor every treatment to what your body actually needs.",
      "The treatment rooms open onto quiet garden courtyards, so the only sounds are water and birdsong. Hot stones, warm oils and slow, deliberate movements melt tension that has built up over months.",
      "Afterwards, guests are invited to linger in the relaxation lounge with fresh fruit and infused water. Most leave saying the same thing: they forgot what it feels like to truly switch off.",
    ],
    quote: "Stillness is not the absence of movement — it is the presence of calm.",
    listTitle: "Our Signature Rituals",
    list: [
      "Hot stone massage",
      "Aromatherapy body wraps",
      "Facial treatments with natural products",
      "Private relaxation suite",
    ],
  },
  {
    title: "Sunset Evenings By The Infinity Pool",
    day: "18",
    mon: "April 2026",
    category: "Travel",
    author: "Sophie Robert",
    authorRole: "Resort Lifestyle Editor",
    authorImg: AVATARS.sophie,
    readTime: "4 min",
    img: BLOG_IMAGES.sunsetPool,
    excerpt:
      "There is a moment every evening when the infinity pool turns to gold. Here is why our guests gather at the rail — drink in hand — as the sun goes down.",
    paragraphs: [
      "Between five and seven in the evening, the infinity pool becomes the heart of the resort. The water mirrors the sky, the palm trees frame the horizon and the day slowly lets go.",
      "The pool bar opens at sunset and serves chilled tropical cocktails and fresh coconut straight from the shell. It is the easiest place in the resort to meet fellow travellers.",
      "If you prefer quiet, come at sunrise instead. The pool is warm, empty and wrapped in morning mist — the best hour of the day, full stop.",
    ],
    quote: "The best views are not found on a map — they are found at the water's edge at sunset.",
    listTitle: "Poolside Essentials",
    list: [
      "Infinity pool open dawn to dusk",
      "Sunset cocktail service",
      "Private cabanas with curtains",
      "Sunrise yoga by the water",
    ],
  },
  {
    title: "Start Your Day With A Healthy Breakfast",
    day: "19",
    mon: "April 2026",
    category: "Food & Drink",
    author: "Alexy Queen",
    authorRole: "Food & Travel Writer",
    authorImg: AVATARS.alexy,
    readTime: "5 min",
    img: BLOG_IMAGES.breakfast,
    excerpt:
      "A great day starts with a great breakfast. Our kitchen team shares what makes the morning buffet at Luxorio different from the rest.",
    paragraphs: [
      "The morning buffet is built around fresh, local ingredients: tropical fruit, warm bread from the oven, eggs cooked to order and coffee roasted just streets away from the resort.",
      "Every dish is labelled with its origins, and the chefs are happy to adjust anything — gluten-free, vegan or simply less sweet. No request is too small in the morning.",
      "Eat on the terrace and watch the gardens wake up. Breakfast is served until eleven, because holidays should never be rushed.",
    ],
    quote: "Breakfast is the only meal where dessert first is not just allowed — it is encouraged.",
    listTitle: "Morning Favourites",
    list: [
      "Fresh tropical fruit and juices",
      "Eggs and omelettes cooked to order",
      "Local coffee and freshly baked bread",
      "Served on the terrace until 11 am",
    ],
  },
];
