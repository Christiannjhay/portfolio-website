import videoSrc from "./../../assets/videos/Landing video.mp4";

export default function LandingVideo() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <video
        className="w-full h-full object-cover opacity-10 max-h-screen"
        src={videoSrc}
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
