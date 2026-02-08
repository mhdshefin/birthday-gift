import "../App.css";
import { useNavigate } from "react-router-dom";
import cat1 from "../assets/cat1.webm";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="valentine-bg">

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

      {/* Center content */}
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

export default Home;
