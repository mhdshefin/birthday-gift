import "../App.css";
import { useNavigate } from "react-router-dom";
import cat2 from "../assets/cat2.webm";

function Page3() {
  const navigate = useNavigate();

  return (
    <div className="valentine-bg">
      {/* hearts */}
      {[...Array(15)].map((_, i) => (
        <span key={i} className={`heart h${i + 1}`}></span>
      ))}

      <div className="center-box">
        <p className="surprise-text">NO ONE LIKES ME 😭</p>
        <p className="surprise-text">ARE YOU SURE ?</p>

        <video
          className="love-video"
          src={cat2}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="btn-group">
          <button className="btn yes" onClick={() => navigate("/page4")}>
            NO
          </button>
           <button className="btn yes" onClick={() => navigate("/page4")}>
            ofc NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page3;
