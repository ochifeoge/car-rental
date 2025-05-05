import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TestimonialsType, testimonials } from "../components/details";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: window.innerWidth * 0.83,
        behavior: "smooth",
      });
    }
  };
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -window.innerWidth * 0.85,
        behavior: "smooth",
      });
    }
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useGSAP(
    () => {
      textRef.current.forEach((el) => {
        if (el) {
          gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top center",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    },
    { scope: contentRef }
  );

  return (
    <section className="my-16">
      <div className=" w-full p-6 md:p-8  mx-auto lg:max-w-[1450px]">
        <div className="flex flex-col gap-4 mb-8">
          <h5>TESTIMONIALS</h5>
          <h3 className="text-2xl md:text-3xl capitalize">
            what our clients say
          </h3>
        </div>
        <div
          className="flex items-center gap-4 overflow-x-auto hide-scrollbar"
          ref={containerRef}>
          {testimonials.map(
            ({ name, text, img }: TestimonialsType, index: number) => (
              <div
                className=" min-w-[80vw] md:min-w-[400px] h-72 flex-col gap-4 text-secondary border flex items-center justify-center text-center p-8"
                key={index}>
                <p>{text}</p>
                <div className="flex gap-4 items-center">
                  <h5 className="font-medium ">{name}</h5>
                  <img
                    src={img}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                  />
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex items-center gap-4 z-30 mt-4">
          <FaArrowLeft
            onClick={() => scrollLeft()}
            className="text-xl text-secondary cursor-pointer"
          />
          <FaArrowRight
            onClick={() => {
              scrollRight();
            }}
            className="text-xl text-secondary cursor-pointer"
          />
        </div>
      </div>

      {/* numbers part */}

      <div
        ref={contentRef}
        className="bg-secondary flex h-[50dvh] md:h-[30vh] items-center justify-center p-5 md:p-10 ">
        <div className="max-w-[1075px] flex flex-col md:flex-row items-center justify-between text-primary">
          <div className="flex items-start gap-4 p-2 pb-8 md:p-8 border-b md:border-b-0 border-b-primary">
            <h2
              ref={(el) => {
                textRef.current[0] = el;
              }}
              className="text-3xl">
              15+
            </h2>
            <p>
              Having been in the car dealership industry for 15 years, we're
              proud to say that we've seen it all.
            </p>
          </div>
          <div className="flex items-start gap-4 p-2 pt-8 md:p-8  min-md:border-l border-l-primary ">
            <h2
              ref={(el) => {
                textRef.current[1] = el;
              }}
              className="text-3xl">
              10k
            </h2>
            <p>
              Selling 10,000 cars is no small feat, and we're incredibly proud
              that we have achieved this milestone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
