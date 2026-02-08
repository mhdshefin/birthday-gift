import "../App.css";
import { useNavigate } from "react-router-dom";
import cat3 from "../assets/cat3.mp4";

function Page6() {
    const navigate = useNavigate();

    return (
        <div className="valentine-bg">
            {/* hearts */}
            {[...Array(15)].map((_, i) => (
                <span key={i} className={`heart h${i + 1}`}></span>
            ))}

            <div className="center-box">
                <p className="surprise-text">IT'S MY WIFE'S BIRTHDAY TODAY 🎉</p>


                <video
                    className="love-video"
                    src={cat3}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="btn-group">
                    <button className="btn yes" onClick={() => navigate("/page7")}>
                        PRESS MEE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page6;
