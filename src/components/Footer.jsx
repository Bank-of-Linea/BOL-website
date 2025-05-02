import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col w-full`}>
    <div
      className={`${styles.flexStart} md:flex-row flex-col mb-6 w-full pt-4 border-t-[6px] border-t-[#3F3E45]`}
    >
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <img
          src={logo}
          alt="Bank of Linea"
          className="w-full max-w-[300px] sm:max-w-[400px] h-auto object-contain"
        />
        <p
          className={`${styles.paragraph} mt-3 max-w-[90%] sm:max-w-[600px] text-base sm:text-lg md:text-xl text-white`}
        >
          The Dawn of Something Epic!
        </p>
      </div>

      {/* Uncomment and make responsive if needed */}
      {/* <div className="flex-[1.5] w-full flex flex-row justify-center flex-wrap md:mt-0 mt-8 px-4">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className="flex flex-col my-4 min-w-[140px] sm:min-w-[160px] px-2"
          >
            <h4 className="font-poppins font-medium text-sm sm:text-base md:text-lg leading-[1.5] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-3">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-xs sm:text-sm md:text-base leading-[1.5] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-2 sm:mb-3" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-4 border-t-[1px] border-t-[#3F3E45] px-4">
      <p className="font-poppins font-normal text-center text-sm sm:text-base md:text-lg leading-[1.5] text-white">
        Copyright Ⓒ 2025 Bank of Linea. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-4 gap-3 sm:gap-4">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer"
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;