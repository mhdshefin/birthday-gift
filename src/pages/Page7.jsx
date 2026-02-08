import "../App.css";
import kissBg from "../assets/bg.png";
import cardImg from "../assets/card.png";
import { useEffect, useRef, useState } from "react";

import voice from "../assets/voic.mp3";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img4.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img2.jpg";
import img5 from "../assets/img5.jpg";
import gift from "../assets/gift.png";


function Page7() {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current || sourceRef.current) return;

    const audio = audioRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    audioCtxRef.current =
      audioCtxRef.current ||
      new (window.AudioContext || window.webkitAudioContext)();

    analyserRef.current = audioCtxRef.current.createAnalyser();
    analyserRef.current.fftSize = 64;

    sourceRef.current =
      audioCtxRef.current.createMediaElementSource(audio);

    sourceRef.current.connect(analyserRef.current);
    analyserRef.current.connect(audioCtxRef.current.destination);

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      requestAnimationFrame(draw);
      analyserRef.current.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = canvas.width / bufferLength;
      let x = 0;

      dataArray.forEach((barHeight) => {
        ctx.fillStyle = "#ff4d6d";
        ctx.fillRect(
          x,
          canvas.height - barHeight,
          barWidth - 2,
          barHeight
        );
        x += barWidth;
      });
    };

    draw();
  }, []);


const togglePlay = async () => {
  if (!audioCtxRef.current) return;

  if (audioCtxRef.current.state === "suspended") {
    await audioCtxRef.current.resume();
  }

  if (!playing) {
    await audioRef.current.play();
  } else {
    audioRef.current.pause();
  }

  setPlaying(!playing);
};


  return (
    <div
      className="birthday-page top-layout"
      style={{ backgroundImage: `url(${kissBg})` }}
    >
      <img
        src={cardImg}
        alt="Birthday Card"
        className="birthday-card-img top-card"
      />

      <h1 className="birthday-text">HAPPY BIRTHDAY 🎉</h1>
      <h1 className="birthday-text">MY LOVABLE WIFEEEEY...</h1>

      <div className="row">
        <div className="col-12">
          <h3 className="text-center text-light my-5">
            <strong>GIFT FOR YOUUU</strong>
          </h3>
        </div>

        <div className="col-12 mt-12 d-flex justify-content-center">
          <div className="box">
            <div className="box-body">
              <img
                className="img"
                src={gift}
                alt="gift"
              />

              <div className="box-lid">
                <div className="box-bowtie"></div>
              </div>
            </div>
          </div>
          <audio id="giftAudio" src="gift-voice.mp3"></audio>
        </div>

      </div>

      <div className="voice-box">
  <button className="play-btn" onClick={togglePlay}>
    {playing ? "⏸ Pause" : "▶ Play"}
  </button>

  <canvas ref={canvasRef} width="220" height="60"></canvas>

  <audio ref={audioRef} src={voice} />
</div>

      <div className="photo-grid">
        <div className="photo-card"><img src={img1} alt="" /></div>
        <div className="photo-card"><img src={img2} alt="" /></div>
        <div className="photo-card"><img src={img3} alt="" /></div>
        <div className="photo-card"><img src={img4} alt="" /></div>
        <div className="photo-card"><img src={img5} alt="" /></div>
      </div>
    </div>
  );
}

export default Page7;
