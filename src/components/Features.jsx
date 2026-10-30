// Three guest promise cards
import { ShieldCheck, RotateCcw, BedDouble } from "lucide-react";
import { Wave } from "./Shared";

const FEATURES = [
  {
    title: "Keeping Your Safe",
    text: "The hotel Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque semper pellentesque nibh Donec tincidunt varius odio an dapibus diam consequat",
    Icon: ShieldCheck,
  },
  {
    title: "Cancellation With 24H",
    text: "The hotel Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque semper pellentesque nibh Donec tincidunt varius odio an dapibus diam consequat",
    Icon: RotateCcw,
  },
  {
    title: "Full Room Amaruenses",
    text: "The hotel Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque semper pellentesque nibh Donec tincidunt varius odio an dapibus diam consequat",
    Icon: BedDouble,
  },
];

export default function Features({ nextBg = "var(--cream)" }) {
  return (
    <section className="features section">
      <div className="container">
        <div className="features-grid">
          {FEATURES.map(({ title, text, Icon }) => (
            <article className="feature-card reveal" key={title}>
              <div className="circle"><Icon size={36} strokeWidth={1.4} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

      </div>

      {/* Wave into whatever section comes next */}
      <Wave fill={nextBg} />
    </section>
  );
}
