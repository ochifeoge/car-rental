import { useState } from "react";
import { Car, carNames, carDetails } from "../components/details";
import FormatCurrency from "../utils/FormatCurrency";
import Button2 from "../components/Button2";
const LatestVehicles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="container">
      <div className="mt-16">
        <div className="flex flex-col gap-4 mb-4">
          <h5>WE RECOMMEND</h5>
          <h3 className="text-3xl">Latest Vehicles</h3>
        </div>

        <div className="flex flex-wrap gap-4 items-center ">
          {carNames.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer font-semibold  transition-all duration-300 ease-in-out px-4 py-2 ${
                index === activeIndex
                  ? "bg-accent text-white "
                  : "text-secondary bg-[rgba(204,204,204,0.2)]  "
              }  `}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {carDetails[activeIndex].map(
            ({ src, model, price, msap }: Car, index2) => (
              <div
                className={`flex basis-full sm:basis-[48%] md:basis-[23%] flex-col gap-1 mt-4 transition-all duration-300 ease-in-out ${
                  activeIndex && "opacity-100"
                }`}
                key={index2}>
                <img src={src} className="w-full" alt={`car ${+index2}`} />

                <h4 className="text-lg">{model}</h4>
                <FormatCurrency price={price} />

                <p>msrp: {msap}</p>
              </div>
            )
          )}
        </div>

        <div className="flex justify-center  mt-8 md:mt-16">
          <Button2 label="Discover More" />
        </div>
      </div>
    </section>
  );
};

export default LatestVehicles;
