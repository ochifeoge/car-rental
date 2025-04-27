import { trust } from "../components/details";

const VarietyBox = () => {
  return (
    <section className="container flex flex-col items-center flex-wrap gap-8 py-8 lg:py-16 md:flex-row">
      {trust.map(
        (
          { heading, text }: { heading: string; text: string },
          index: number
        ) => (
          <div
            className="flex sm:basis-[48%] lg:basis-[31%]  flex-col gap-4 text-secondary"
            key={index}>
            <div className="flex items-center gap-4">
              <p>0{index + 1}</p>
              <div className="border-t w-full "></div>
            </div>

            <div className="border flex flex-col items-center  h-54 justify-center text-center gap-4 p-4">
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
