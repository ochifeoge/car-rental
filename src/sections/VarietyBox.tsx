import { useGSAP } from "@gsap/react";
import { trust } from "../components/details";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VarietyBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<(HTMLDivElement | null)[]>([]);
  const numberRef = useRef<(HTMLDivElement | null)[]>([]);

  boxRef.current = trust.map((_, i) => boxRef.current[i] || null);
  lineRef.current = trust.map((_, i) => lineRef.current[i] || null);
  numberRef.current = trust.map((_, i) => numberRef.current[i] || null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      numberRef.current.forEach((number, index) => {
        tl.from(number, {
          opacity: 0,

          duration: 0.1,
          stagger: 0.1,
          delay: index * 0.2,
        });
      });

      lineRef.current.forEach((line, index) => {
        tl.to(
          line,
          {
            width: "100%",
            duration: 1,
            stagger: 0.2,
            delay: index * 0.2,
          },
          "-=0.5"
        );
      });
      boxRef.current.forEach((box, index) => {
        tl.from(
          box,
          {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            delay: index * 0.2,
          },
          "-=0.5"
        );
      });
    },
    {
      scope: containerRef,
    }
  );
  return (
    <section
      ref={containerRef}
      className="container flex flex-col items-center flex-wrap gap-8 py-8 lg:py-16 md:flex-row">
      {trust.map(
        (
          { heading, text }: { heading: string; text: string },
          index: number
        ) => (
          <div
            className="flex sm:basis-[48%] lg:basis-[31%]  flex-col gap-4 text-secondary"
            key={index}>
            <div className="flex items-center gap-4">
              <p
                ref={(el) => {
                  numberRef.current[index] = el;
                }}>
                0{index + 1}
              </p>
              <div
                ref={(el) => {
                  lineRef.current[index] = el;
                }}
                className="border-t w-0 "></div>
            </div>

            <div
              ref={(el) => {
                boxRef.current[index] = el;
              }}
              className="border flex flex-col items-center  h-54 justify-center text-center gap-4 p-4">
              <h3 className="font-bold text-3xl">{heading}</h3>
              <p>{text}</p>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default VarietyBox;
