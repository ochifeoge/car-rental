import { FaLocationPin } from "react-icons/fa6";
import { logo } from "../components/details";
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary py-6 text-primary">
      <div className="container">
        <div className="py-4 border-b border-b-primary">
          <img src={logo} alt="Logo" />
        </div>

        <div className="flex flex-wrap items-center justify-between py-6">
          <div className="flex flex-col items-center lg:items-start gap-4 basis-full sm:basis-1/2 lg:basis-[23%] border-b sm:border-b-0 py-6 lg:border-r border-r-primary ">
            <div className="flex items-start gap-2">
              <FaLocationPin size={20} />
              <p className="pt-0">
                17, kellington highway <br />
                Lagos, Nigeria
              </p>
            </div>
            <div className="flex items-start gap-2">
              <MdPhoneInTalk size={20} />
              <p>+234 123 4567</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          {/* 2nd */}
          <div className="flex flex-col items-center text-center gap-4 basis-1/2 lg:basis-[23%] lg:border-r border-r-primary py-6">
            <h5 className="mb-2 font-semibold">Home</h5>
            <ul className="flex flex-col gap-2">
              <li>Demo</li>
              <li>Shop</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* 3rd */}
          <div className="flex flex-col items-center text-center gap-4 basis-1/2 lg:basis-[23%] lg:border-r border-r-primary py-6">
            <h5 className="mb-2 font-semibold">Shop</h5>
            <ul className="flex flex-col gap-2">
              <li>Sport cars</li>
              <li>Electric</li>
              <li>Hybrid</li>
            </ul>
          </div>
          {/* 4th */}
          <div className="flex flex-col items-center text-center gap-4 basis-full sm:basis-1/2 lg:basis-[23%] py-6 ">
            <h5 className="mb-2 font-semibold">Company</h5>
            <ul className="flex flex-col gap-2">
              <li>About us</li>
              <li>Our service</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="pt-6 lg:pt-0 lg:-mt-6 border-t border-t-primary lg:border-t-0 text-center lg:text-left">
            copyright @ {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
