import "../App.css";
import { useNavigate } from "react-router-dom";
import cat6 from "../assets/cat6.png";

function Page4() {
  const navigate = useNavigate();

  return (
    <div className="valentine-bg">
      {/* hearts */}
      {[...Array(15)].map((_, i) => (
        <span key={i} className={`heart h${i + 1}`}></span>
      ))}

      <div className="center-box">
        <p className="surprise-text">THANK YOU 🤗</p>

       <img
          className="love-video"
          src={cat6}
          alt="sad cat"
        />

        <div className="btn-group">
          <button className="btn yes" onClick={() => navigate("/page5")}>
            PRESS ME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page4;
