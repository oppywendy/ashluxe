import pic1 from "../assets/hero pic.avif";
import pic2 from "../assets/hero 2.avif";

const Landing = () => {
  return (
    <div>
      <div>
        <video
          autoPlay
          playsInline
          loop
          muted
          preload="auto"
          className="w-full h-auto object-cover"
        >
          <source src="/landing-video.webm" type="video/webm" />
          <source src="/landing_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col lg:flex-row lg:items-center px-2 justify-center gap-2 lg:justify-between h-[20vh] lg:h-[10vh]">
          <p>Introducing the Summer Capsule</p>
          <b>SHOP NOW</b>
          <p>A powerful dialogue that transcends borders.</p>
        </div>
        <div className="flex">
          <img src={pic1} alt="" className="w-[50%] lg:h-screen" />
          <img src={pic2} alt="" className="w-[50%] lg:h-screen" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
