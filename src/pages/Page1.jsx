import "../App.css";
import { useNavigate } from "react-router-dom";
import cat5 from "../assets/cat5.webm";
import { useState } from "react";

function Page1() {
  const navigate = useNavigate();

  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [escaped, setEscaped] = useState(false);

  const moveButton = () => {
    const maxX = window.innerWidth - 140;
    const maxY = window.innerHeight - 80;

    const randomLeft = Math.random() * maxX;
    const randomTop = Math.random() * maxY;

    setPos({ top: randomTop, left: randomLeft });
    setEscaped(true);
  };

  return (
    <div className="valentine-bg">
      {[...Array(15)].map((_, i) => (
        <span key={i} className={`heart h${i + 1}`}></span>
      ))}

      <div className="center-box">
        <p className="surprise-text">You said YES 💖</p>
        <p className="surprise-text">DO YOU LOVE ME ?</p>

        <video
          className="love-video"
          src={cat5}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* button area */}
        <div className="container">
          <button
            className="btn yes"
            style={
              escaped
                ? {
                    position: "fixed",
                    top: pos.top,
                    left: pos.left,
                  }
                : {}
            }
            onMouseEnter={moveButton}   // desktop
            onClick={moveButton}        // mobile
          >
            YES
          </button>

          <button className="btn no" onClick={() => navigate("/page3")}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page1;
