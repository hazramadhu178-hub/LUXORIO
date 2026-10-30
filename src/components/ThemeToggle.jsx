// Compact 3-option theme toggle: Light (Sun), Warm (Flame/Sunset), Dark (Moon)
import { Sun, Flame, Moon } from "lucide-react";

// Props this component receives:
//   theme - "light", "warm" or "dark"
//   onThemeChange - function, receives theme

export default function ThemeToggle({ theme, onThemeChange }) {
  const options = [
    { key: "light", label: "Light", Icon: Sun },
    { key: "warm", label: "Warm", Icon: Flame },
    { key: "dark", label: "Dark", Icon: Moon },
  ];

  return (
    <div
      className="theme-switcher"
      role="radiogroup"
      aria-label="Theme mode"
      title={`Current: ${theme.charAt(0).toUpperCase() + theme.slice(1)} Mode`}
    >
      {options.map(({ key, label, Icon }) => {
        const active = theme === key;
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`${label} mode`}
            className={`theme-btn ${active ? "active" : ""}`}
            onClick={() => onThemeChange(key)}
          >
            <Icon size={14} strokeWidth={2.1} />
            <span className="theme-btn-label">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
