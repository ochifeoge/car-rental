import { useRef } from "react";
import Button2 from "../components/Button2";
import {
  carImage,
  leftFeaturedCar,
  rightFeaturedCar,
} from "../components/details";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowCars = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });
      if (window.innerWidth < 750) {
        tl.from(contentRef.current, {
          x: -300,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }).from(imgRef.current, {
          x: 300,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }

      if (window.innerWidth > 750) {
        tl.from(contentRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }).from(imgRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    },
    {
      scope: containerRef,
    }
  );

  const textRef = useRef<HTMLDivElement>(null);
  const secondContainerRef = useRef<HTMLDivElement>(null);
  const featureRefDiv = useRef<HTMLDivElement>(null);
  const leftFeaturedCarRef = useRef<HTMLImageElement>(null);
  const rightFeaturedCarRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: secondContainerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      tl.from(textRef.current?.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power1.inOut",
      })
        .from(leftFeaturedCarRef.current, {
          x: -100,
          opacity: 0,
          ease: "power1.inOut",
        })
        .from(rightFeaturedCarRef.current, {
          x: 100,
          opacity: 0,
          ease: "power1.inOut",
        })
        .from(featureRefDiv.current?.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power1.inOut",
        });
    },
    {
      scope: secondContainerRef,
    }
  );

  return (
    <section ref={containerRef} className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center  gap-6 lg:gap-8 py-8 lg:py-16">
        <div
          ref={contentRef}
          className="flex text-center md:text-start flex-col gap-6 items-center lg:gap-8 lg:items-start text-secondary mb-4 lg:mb-0">
          <h5>CLASSICS</h5>
          <h1 className="text-4xl lg:text-5xl text-center lg:text-start">
            Discover A New Level Of Comfort
          </h1>
          <p>
            We're here to make the car-buying process as easy and stress-free as
            possible. Contact us today to schedule a test drive or to learn more
            about our financing and service options.
          </p>

          <div className="flex gap-4">
            <Button2 label="discover more" />
          </div>
        </div>
        <div ref={imgRef} className="mx-auto lg:mx-0">
          <img src={carImage} alt="Classic Car" loading="lazy" />
        </div>
      </div>

      {/* featured part */}
      <div className="mt-16">
        <div ref={textRef} className="flex flex-col gap-4">
          <h5>WE RECOMMEND</h5>
          <h3 className="text-3xl">Featured Vehicles</h3>
        </div>

        {/* grid section */}
        <div
          ref={secondContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
          <div className="h-[400px]">
            <img
              ref={leftFeaturedCarRef}
              src={leftFeaturedCar}
              alt="Featured Car 1"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div ref={featureRefDiv}>
            <div className="flex justify-between  mb-12 items-center">
              <div className="flex gap-4 ">
                <p>2019</p>
                <p>SEDAN</p>
              </div>
              <div className="flex gap-4">
                <p>Mileage: </p>
                <p>18900</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-6">Ampera Helix GT</h3>
              <p>
                With its aerodynamic curves and bold lines, this car is a
                standout on the road, turning heads and making a statement
                wherever it goes.
              </p>
              <h4 className="mt-6 text-xl mb-8">
                $ 37,800.00 USD | MSRP: $35,600
              </h4>
              <Button2 label="Explore" />
            </div>
          </div>
          <div className="h-[400px] hidden lg:block">
            <img
              ref={rightFeaturedCarRef}
              src={rightFeaturedCar}
              alt="Feature Car 3"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCars;
