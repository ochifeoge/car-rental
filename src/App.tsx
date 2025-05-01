import { useRef, useState } from "react";
import { animationData } from "./components/details";
import HomePage from "./pages/HomePage";
import Footer from "./sections/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const wordGroupRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const loadingContainerRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(true);
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
      },
    });
    tl.to(wordGroupRef.current, {
      yPercent: -80,
      duration: 5,
      ease: "power1.inOut",
    })
      .to(
        clipRef.current,
        {
          clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
          duration: 1.5,
          ease: "power1.inOut",
        },
        "+=0.5"
      )
      .to(loadingContainerRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => setLoading(false),
      });
  }, {});

  return loading ? (
    <div
      ref={loadingContainerRef}
      className="h-screen! relative bg-primary flex items-center justify-center flex-col">
      <h1 className="absolute text-5xl bottom-2 left-0 z-20 italic">
        Loading...
      </h1>
      <div
        ref={clipRef}
        className=" max-h-64 w-[95%] max-w-xl  overflow-y-hidden relative"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          willChange: "clip-path",
        }}>
        <div ref={wordGroupRef}>
          {animationData.map((data, index) => (
            <p
              className="z-20 text-lg italic font-poppins text-accent text-center"
              key={index}>
              {data}
            </p>
          ))}
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full z-10 "
          style={{
            background: `linear-gradient(
  to bottom,
  rgba(255, 255, 255, 1) 0%,
  rgba(255, 255, 255, 1) 47%,
  transparent 47%,
  transparent 55%,
  rgba(255, 255, 255, 1) 55%,
  rgba(255, 255, 255, 1) 100%
)`,
          }}></div>
      </div>
    </div>
  ) : (
    <>
      <HomePage />

      <Footer />
    </>
  );
}

export default App;
