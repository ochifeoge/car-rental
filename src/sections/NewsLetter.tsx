import { baseUrl } from "../components/details";

const NewsLetter = ({
  heading,
  buttonText,
  bg,
  activeInput,
}: {
  heading: string;
  bg: string;
  buttonText: string;
  activeInput: boolean;
}) => {
  return (
    <section
      className=" h-[75dvh] lg:h-[600px]  relative mt-12 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] flex items-center justify-between"
      style={{
        background: `url('${baseUrl}${bg}') no-repeat center center`,
        backgroundSize: "cover",
      }}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.5)]  pointer-events-none"></div>
      <div className="flex items-center justify-between container">
        <div className="flex flex-col z-20 text-primary gap-6 basis-full lg:basis-1/2">
          <h5>NEWSLETTER</h5>
          <h3 className="capitalize text-3xl">{heading}</h3>
          <p>
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of vehicles to choose
            from.
          </p>
          <div className="flex items-center flex-wrap justify-between gap-2 md:gap-0">
            {activeInput ? (
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="border border-primary outline-none px-4 py-2 placeholder:text-white basis-10/12"
              />
            ) : null}

            <button className="bg-accent text-primary cursor-pointer px-4 py-2 ">
              {buttonText}
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default NewsLetter;
