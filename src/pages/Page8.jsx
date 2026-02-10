import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gift from "../assets/box.png";
import surprise1 from "../assets/frame1.jpg"
import surprise2 from "../assets/frame2.png";

function Page8() {

    const navigate = useNavigate();
    const [openImage, setOpenImage] = useState(null);

    return (
        <div className="valentine-bg">

            {/* Disclaimer */}
            <div className="disclaimer-box">
                <h2 className="disclaimer-title">⚠️ Read Before Opening</h2>
                <p className="disclaimer-text">
                    Opening the gift is allowed 🎁 <br />
                    Crying is strictly prohibited 🚫😄 <br />
                    Side effects may include happiness overload 💖
                </p>

            </div>

            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-light my-5 special-title">
                        🎁 <strong>Special Gift For You</strong> 🎁
                    </h2>
                </div>

                <div className="col-12 d-flex justify-content-center gap-5">

                    {/* Gift 1 */}
                    <div className="gift-box gift-box-1" onClick={() => setOpenImage(surprise1)}>
                        <img src={gift} alt="gift" className="gift-img" />
                    </div>

                    {/* Gift 2 */}
                    <div className="gift-box gift-box-2" onClick={() => setOpenImage(surprise2)}>
                        <img src={gift} alt="gift" className="gift-img" />
                    </div>

                </div>
            </div>

            {/* Full screen popup */}
            {openImage && (
                <div className="gift-overlay" onClick={() => setOpenImage(null)}>
                    <img src={openImage} className="gift-popup-img" />
                </div>
            )}

            {/* Hearts */}
            {[...Array(15)].map((_, i) => (
                <span key={i} className={`heart h${i + 1}`}></span>
            ))}

        </div>

    );
}

export default Page8;
