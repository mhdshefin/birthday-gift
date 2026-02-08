import "../App.css";
import { useNavigate } from "react-router-dom";
import cat5 from "../assets/cat5.webm";

function Page1() {
  const navigate = useNavigate();

  return (
    <div className="valentine-bg">
      {/* hearts */}
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

        <div className="btn-group">
          <button className="btn yes" onClick={() => navigate("/page3")}>
            YES
          </button>
           <button className="btn yes" onClick={() => navigate("/page3")}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page1;
