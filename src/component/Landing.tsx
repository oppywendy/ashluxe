import pic1 from "../assets/hero pic.avif";
import pic2 from "../assets/hero 2.avif";

const Landing = () => {
  return (
    <div>
      <div>
        <video
          src="/landing-video.webm"
          autoPlay
          playsInline
          loop
          muted
          preload="auto"
          className="w-full h-[50vh] lg:h-[100vh] object-cover"
        ></video>
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
