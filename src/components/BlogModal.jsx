// Blog article popup — opens when a blog card is clicked.
// Same behaviour as the room popup: Esc closes, the page behind is locked, clicks on the dark background close it.
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, CalendarDays, Clock, Check } from "lucide-react";
import { SocialLinks } from "./Shared";

// Props this component receives:
//   post - BlogPost object
//   onClose - function

export default function BlogModal({ post, onClose }) {
  // While the popup is open: stop the page behind it from scrolling, and let the Esc key close it
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const closeOnEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEsc);
    };
  }, [onClose]);

  // createPortal puts the popup at the end of <body>, so nothing on the page can cover it
  return createPortal(
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose(); // only clicks on the dark background
      }}
    >
      <div className="blog-modal" role="dialog" aria-modal="true" aria-labelledby="blog-modal-title">
        <button type="button" className="rm-close" onClick={onClose} aria-label="Close article" autoFocus>
          <X size={20} />
        </button>

        {/* Cover photo */}
        <div className="bm-img">
          <img src={post.img} alt={post.title} />
        </div>

        {/* Article */}
        <div className="bm-body">
          <span className="badge">{post.category}</span>
          <h2 id="blog-modal-title">{post.title}</h2>

          {/* Author + date + read time */}
          <div className="bm-meta">
            <div className="bm-author">
              <img src={post.authorImg} alt={post.author} />
              <div>
                <b>{post.author}</b>
                <small>{post.authorRole}</small>
              </div>
            </div>
            <span>
              <CalendarDays size={15} /> {post.day} {post.mon}
            </span>
            <span>
              <Clock size={15} /> {post.readTime} read
            </span>
          </div>

          {/* Lead paragraph, then body paragraphs */}
          <p className="bm-lead">{post.excerpt}</p>
          {post.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          {/* Pull quote */}
          <blockquote className="bm-quote">{post.quote}</blockquote>

          {/* Takeaway list */}
          <h4>{post.listTitle}</h4>
          <ul className="check-list">
            {post.list.map((item) => (
              <li key={item}>
                <Check size={15} className="tick" />
                {item}
              </li>
            ))}
          </ul>

          {/* Share row */}
          <div className="bm-share">
            <b>Share this article:</b>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
