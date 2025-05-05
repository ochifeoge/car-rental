import { menu, logo } from "../components/details";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearchengin, FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Button from "../components/Button";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });

      tl.to(containerRef.current, {
        backgroundPosition: "40% 80%", // Start at top 40%, move to 80%
        ease: "power1.inOut", // Smooth
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

        .from(headerRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .from(
          Array.from(navLinksRef.current?.children || []),
          {
            opacity: 0,
            y: -20,
            stagger: 0.2,
            duration: 0.5,
          },
          "-=0.5"
        )
        .from(heroContentRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
        })
        .from(formRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
        })
        .to(heroContentRef.current, {
          y: -50,
          scrollTrigger: {
            trigger: heroContentRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className={`w-dvw h-[65vh] lg:h-screen bg-cover bg-no-repeat relative bg-linear-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.1)] `}
      style={{
        backgroundImage: "url('car-asset/hero-car.png')",
        backgroundPosition: "10% 50%",
      }}>
      <header
        ref={headerRef}
        className="container flex items-center justify-between  py-2">
        <img src={logo} alt="logo" className="w-32" />
        <nav className="hidden lg:block">
          <ul ref={navLinksRef} className="flex gap-4">
            {menu.map(
              (
                { name, link }: { name: string; link: string },
                index: number
              ) => (
                <li key={index}>
                  <a href={link} className="capitalize text-primary font-inter">
                    {name}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="flex items-center gap-4 text-primary">
          <MdOutlineShoppingCart size={20} className="cursor-pointer" />
          <FaSearchengin size={20} className="cursor-pointer hidden lg:block" />
          <button className="border border-primary text-primary hidden lg:block capitalize px-4 py-2 cursor-pointer">
            Explore Vehicles
          </button>
          <CiMenuFries
            size={20}
            onClick={() => {
              setShowMenu(true);
            }}
            className="lg:hidden"
          />

          {showMenu && (
            <div
              className={`absolute top-0 left-0 bg-primary text-secondary h-[50vh] w-screen container flex flex-col pt-8 gap-4  z-10 transform transition-transform duration-300 ease-in-out ${
                showMenu ? "translate-x-0" : "translate-x-full"
              }`}>
              <div className="flex justify-between items-center w-full mb-4 relative">
                <img src={logo} alt="logo" className="w-32" />
                <FaTimes
                  size={20}
                  className=" cursor-pointer"
                  onClick={() => setShowMenu(false)}
                />
              </div>

              <ul className="flex flex-col  gap-6">
                {menu.map(
                  (
                    { name, link }: { name: string; link: string },
                    index: number
                  ) => (
                    <li key={index}>
                      <a
                        href={link}
                        className="capitalize text-secondary font-inter">
                        {name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </header>
      <div className="border-b-[0.3px] border-primary"></div>

      <div
        ref={heroContentRef}
        className="container flex flex-col lg:flex-row justify-center mt-20  items-center  lg:mt-8 lg:h-[calc(100% - 50px)]  ">
        <div className="flex flex-col gap-6 items-center   lg:gap-8 lg:items-start text-primary mb-4 lg:mb-0">
          <h5>NEW IN STOCK</h5>
          <h1 className="text-4xl lg:text-5xl text-center lg:text-start">
            Upgrade Your Driving Experience
          </h1>

          <div className="flex gap-4">
            <Button label="discover more" />
            <Button label="Meet Horizon GT" />
          </div>
        </div>

        <form
          ref={formRef}
          className="text-primary hidden lg:block bg-[rgba(0,0,0,0.5)] p-10 w-[602px] max-w-full backdrop-blur-xs">
          <h3 className="text-3xl mb-4">Find Your Ride</h3>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="Brand *"
              className="border border-primary outline-none px-4 py-2 placeholder:text-white"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="model">Model</label>
            <input
              type="text"
              name="model"
              id="model"
              placeholder="Model *"
              className="border border-primary outline-none px-4 py-2 placeholder:text-white"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Type *"
              className="border border-primary outline-none px-4 py-2 placeholder:text-white"
            />
            <input
              type="submit"
              value="Get Started"
              className="px-4 py-2 bg-accent cursor-pointer"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
