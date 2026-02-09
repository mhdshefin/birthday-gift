import "../App.css";
import { useNavigate } from "react-router-dom";
import cat7 from "../assets/cat7.mp4";

function Page5() {
    const navigate = useNavigate();

    return (
        <div className="valentine-bg">
            {/* hearts */}
            {[...Array(15)].map((_, i) => (
                <span key={i} className={`heart h${i + 1}`}></span>
            ))}

            <div className="center-box">
                <p className="surprise-text">DO KNOW YOU WHAT'S SPECIAL TODAY ?</p>


                <video
                    className="love-video"
                    src={cat7}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="btn-group">
                    <button className="btn yes" onClick={() => navigate("/page6")}>
                        YES
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page5;
