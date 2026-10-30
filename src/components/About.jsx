// About section: intro text + photo collage on the left, mission/vision/history tabs on the right
import { useState } from "react";
import { Check, Palmtree } from "lucide-react";
import { IMG } from "../data/images";
import { Badge } from "./Shared";

const TABS = [
  {
    id: "mission",
    label: "Our Mission",
    text: "Our mission is to redefine hospitality by creating exceptional stays where luxury, comfort, and personalized service come together. We strive to provide every guest with a memorable experience through elegant accommodations, thoughtful amenities, and genuine care. From the moment guests arrive, we aim to create a welcoming atmosphere that feels both relaxing and extraordinary. With a commitment to quality, sustainability, and attention to every detail, we seek to exceed expectations and make every stay truly special. Our vision is to become a destination where every visit creates lasting memories and every guest feels at home.",
  },
  {
    id: "vision",
    label: "Our Vision",
    text: "Our vision is to become a distinguished destination for luxury hospitality, where timeless elegance meets exceptional comfort. We aspire to create a world where every stay is more than just an experience—it is a collection of unforgettable moments. Through innovation, personalized service, and a deep respect for nature, we aim to set new standards in hospitality while creating meaningful connections with every guest. We envision a future where our hotel is recognized for its excellence, authenticity, and commitment to sustainable luxury, offering a peaceful retreat where guests can escape the ordinary, discover extraordinary experiences, and return with memories that last a lifetime.",
  },
  {
    id: "history",
    label: "Our History",
    text: "Our story began with a simple vision: to create a destination where exceptional hospitality meets timeless elegance. Built on a passion for comfort, quality, and genuine service, our hotel has grown into a welcoming retreat for travelers seeking meaningful experiences. From our earliest days, we have believed that true luxury lies in the details, from thoughtfully designed spaces to the warmth of a personal welcome. Over the years, our commitment to excellence has shaped every part of our journey. Today, we continue to honor our roots while embracing new ideas, creating unforgettable stays that bring people, comfort, and extraordinary experiences together.",
  },
];

const CHECKS = [
  "Morning Meals for Everyone",
  "The Best Parking Space",
  "The Best Lighting",
  "Nutrition Counseling",
  "Quality Room Service",
  "24/7 Services",
];

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");
  const current = TABS.find((tab) => tab.id === activeTab);

  return (
    <section className="about section" id="about">
      <div className="about-dots dot-pattern" />
      <div className="container about-grid">
        {/* Left: heading + layered photos */}
        <div className="reveal">
          <Badge label="Our Luxury Hotel" />
          <h2 className="sec-title">We Provide Outdoor<br />Activities To All Visitors</h2>
          <p className="sec-text" style={{ marginTop: 14 }}>
            At our hotel, luxury is more than just a word it's a tradition. From exquisite
            design to personalized service, every detail is thoughtfully curated to create
            unforgettable experiences.
          </p>

          <div className="about-media">
            <img className="main-img" src={IMG.aboutMain} alt="Resort infinity pool overlooking the bay" />
            <img className="small-img" src={IMG.aboutSmall} alt="Guest relaxing by the pool" />
            <div className="exp-card">
              <Palmtree size={34} strokeWidth={1.6} />
              <div>
                <b>12+</b>
                <small>Years of Experience</small>
              </div>
            </div>
          </div>
        </div>

        {/* Right: tabbed content */}
        <div className="reveal">
          <div className="tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${tab.id === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-panel">
            <p>{current.text}</p>
          </div>

          <ul className="check-list">
            {CHECKS.map((item) => (
              <li key={item}>
                <Check size={15} className="tick" />
                {item}
              </li>
            ))}
          </ul>

          <a href="#facilities" className="btn btn-gold btn-sm">More About</a>
        </div>
      </div>
    </section>
  );
}
