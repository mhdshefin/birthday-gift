import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cat1 from "../assets/cat1.webm";

function Home() {
  const navigate = useNavigate();

  const [showCountdown, setShowCountdown] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");
  const [flashWhite, setFlashWhite] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const now = new Date();
    const target = new Date();
    target.setHours(24, 0, 0, 0);

    if (now >= target) {
      setShowCountdown(false);
      setShowContent(true);
      return;
    }

    const interval = setInterval(() => {
      const current = new Date();
      const diff = target - current;

      if (diff <= 0) {
        clearInterval(interval);
        setShowCountdown(false);
        setFlashWhite(true);

        setTimeout(() => {
          setFlashWhite(false);
          setShowContent(true);
        }, 800); // 0.5s white + 0.3s fade
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")} : ${minutes
          .toString()
          .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* ================= COUNTDOWN SCREEN ================= */
  if (showCountdown) {
    return (
      <div className="valentine-bg countdown-screen">
        <h1 className="countdown-text">{timeLeft}</h1>
        <p className="countdown-sub">Until the surprise 🎂</p>
      </div>
    );
  }

  /* ================= WHITE FLASH ================= */
  if (flashWhite) {
    return <div className="white-flash"></div>;
  }

  /* ================= MAIN CONTENT ================= */
  if (showContent) {
    return (
      <div className="valentine-bg fade-in">

        {/* Hearts */}
        <span className="heart h1"></span>
        <span className="heart h2 rotate"></span>
        <span className="heart h3"></span>
        <span className="heart h4 rotate-slow"></span>
        <span className="heart h5"></span>
        <span className="heart h6 rotate"></span>
        <span className="heart h7"></span>
        <span className="heart h8 rotate-slow"></span>
        <span className="heart h9"></span>
        <span className="heart h10 rotate"></span>
        <span className="heart h11"></span>
        <span className="heart h12 rotate-slow"></span>
        <span className="heart h13"></span>
        <span className="heart h14 rotate"></span>
        <span className="heart h15"></span>

        <div className="center-box">
          <p className="surprise-text">Ready for a small surprise?</p>

          <video
            className="love-video"
            src={cat1}
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="btn-group">
            <button className="btn yes" onClick={() => navigate("/no")}>
              NO
            </button>
            <button className="btn no" onClick={() => navigate("/no")}>
              NO
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Home;
